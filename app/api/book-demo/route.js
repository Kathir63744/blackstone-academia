import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

/**
 * POST /api/book-demo
 * Sends the demo booking details to the admin email.
 *
 * Configure in .env.local:
 *   SMTP_HOST=smtp.gmail.com
 *   SMTP_PORT=465
 *   SMTP_USER=your@gmail.com
 *   SMTP_PASS=your-app-password
 *   ADMIN_EMAIL=admin@blackstoneacademia.com
 *
 * If SMTP is not configured, the booking is logged to the server console
 * so the demo flow still works during development.
 */
export async function POST(request) {
  let data;
  try {
    data = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request body." }, { status: 400 });
  }

  const { name, email, academy, size, date, time, message } = data || {};

  // Server-side validation
  if (!name?.trim() || !academy?.trim() || !date || !/^\S+@\S+\.\S+$/.test(email || "")) {
    return NextResponse.json(
      { ok: false, error: "Please fill in name, a valid email, academy and date." },
      { status: 400 }
    );
  }

  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, ADMIN_EMAIL } = process.env;

  const summary = `
New demo booking — Blackstone Academia

Name:       ${name}
Email:      ${email}
Academy:    ${academy}
Size:       ${size || "-"}
Date:       ${date}
Time:       ${time || "-"}
Message:    ${message || "-"}
Received:   ${new Date().toISOString()}
`.trim();

  // No SMTP configured → log and succeed (development mode)
  if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS || !ADMIN_EMAIL) {
    console.log("[book-demo] SMTP not configured — booking logged instead:\n" + summary);
    return NextResponse.json({ ok: true, delivered: false });
  }

  try {
    const transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port: Number(SMTP_PORT) || 465,
      secure: Number(SMTP_PORT) !== 587, // 465 = SSL, 587 = STARTTLS
      auth: { user: SMTP_USER, pass: SMTP_PASS },
    });

    await transporter.sendMail({
      from: `"Blackstone Academia" <${SMTP_USER}>`,
      to: ADMIN_EMAIL,
      replyTo: email,
      subject: `Demo booking: ${academy} — ${date} (${time || "any time"})`,
      text: summary,
      html: `
        <h2 style="font-family:Georgia,serif;">New demo booking</h2>
        <table style="font-family:Arial,sans-serif;font-size:14px;border-collapse:collapse;">
          ${[
            ["Name", name],
            ["Email", email],
            ["Academy", academy],
            ["Size", size || "-"],
            ["Date", date],
            ["Time", time || "-"],
            ["Message", message || "-"],
          ]
            .map(
              ([k, v]) =>
                `<tr><td style="padding:6px 16px 6px 0;color:#5C6674;">${k}</td><td style="padding:6px 0;"><b>${String(
                  v
                ).replace(/</g, "&lt;")}</b></td></tr>`
            )
            .join("")}
        </table>
      `,
    });

    return NextResponse.json({ ok: true, delivered: true });
  } catch (err) {
    console.error("[book-demo] Email failed:", err.message);
    return NextResponse.json(
      { ok: false, error: "Could not send the booking email. Please try again." },
      { status: 502 }
    );
  }
}

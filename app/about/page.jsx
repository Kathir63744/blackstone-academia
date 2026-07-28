import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import { IMAGES } from "@/lib/siteData";

export const metadata = {
  title: "About — Blackstone Academia",
  description:
    "Why Blackstone Academia exists: one platform for online academies to run trials, classes, billing and progress without the chaos.",
};

const values = [
  {
    title: "One system, zero silos",
    desc: "Trials, classes, payments and progress belong together. When they connect, staff stop copying data between tools and start teaching.",
  },
  {
    title: "Your rules, not ours",
    desc: "Every academy runs differently. Roles, permissions, packages and workflows are yours to shape — no code, no support tickets.",
  },
  {
    title: "Trust by default",
    desc: "MFA for staff, single-session enforcement, geo-based access and logged conversations. Security is standard, not an add-on.",
  },
  {
    title: "Built with academies",
    desc: "The platform grew out of real academy operations — trial funnels, sibling invoicing, teacher replacements — not a whiteboard.",
  },
];

const roles = [
  ["Super Admin", "Owns the platform: analytics, finance, settings and every permission."],
  ["Admin & Staff", "Runs daily operations — invoices, reports, announcements, support."],
  ["Academic Coach", "Evaluates trials, assigns and reschedules classes, manages student journeys."],
  ["Supervisor", "Hires and trains teachers, manages feedback and class quality."],
  ["Teacher", "Delivers live classes, sets assignments, tracks earnings and schedules."],
  ["Student & Parent", "Joins classes in one tap, tracks progress, views invoices and chats safely."],
];

export default function AboutPage() {
  return (
    <main>
      <Navbar />

      <PageHero
        eyebrow="About us"
        title="Built so academies can teach, not administrate"
        subtitle="Blackstone Academia began inside a real online academy drowning in spreadsheets, WhatsApp threads and manual invoices. We rebuilt the whole operation as one platform — then made it available to every academy like it."
      />

      {/* Story with image */}
      <section className="px-4 py-10 md:py-16">
        <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2">
          <div className="overflow-hidden rounded-2xl border border-white/80 shadow-soft">
            <img
              src={IMAGES.classroom}
              alt="A modern learning environment"
              className="aspect-[4/3] w-full object-cover"
              loading="lazy"
            />
          </div>
          <div>
            <h2 
              className="text-3xl leading-[1.15] tracking-tight md:text-4xl"
              style={{ fontFamily: "'Onest', sans-serif", fontWeight: 400 }}
            >
              From chaos to one calm workspace
            </h2>
            <div className="mt-6 space-y-4 text-[15px] leading-relaxed text-slate2 md:text-base">
              <p>
                Online academies grow fast — and the tooling breaks first. A
                trial student is booked over WhatsApp, scheduled in a
                spreadsheet, invoiced from a PDF template and taught over a
                Zoom link pasted into a group chat. Every handoff is a place
                for things to fall through.
              </p>
              <p>
                We spent over a year building the alternative: a single system
                where a trial registration flows into evaluation, class
                assignment, live teaching, automatic recording, invoicing and
                progress reporting — with every role seeing exactly what they
                need.
              </p>
              <p>
                Today Blackstone Academia powers academies teaching Quran,
                Tajweed, Islamic Studies, languages and academic tutoring
                across time zones and currencies.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="px-4 py-14">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto max-w-xl text-center">
            <h2 
              className="text-3xl leading-[1.15] tracking-tight md:text-4xl"
              style={{ fontFamily: "'Onest', sans-serif", fontWeight: 400 }}
            >
              What we believe
            </h2>
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v) => (
              <article
                key={v.title}
                className="rounded-2xl border border-white/80 bg-white/80 p-7 shadow-lift backdrop-blur"
              >
                <h3 
                  className="text-xl"
                  style={{ fontFamily: "'Onest', sans-serif", fontWeight: 400 }}
                >
                  {v.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-slate2">{v.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Roles with team image */}
      <section className="px-4 py-14">
        <div className="mx-auto grid max-w-6xl items-start gap-12 lg:grid-cols-2">
          <div>
            <h2 
              className="text-3xl leading-[1.15] tracking-tight md:text-4xl"
              style={{ fontFamily: "'Onest', sans-serif", fontWeight: 400 }}
            >
              Six portals, one platform
            </h2>
            <p className="mt-5 max-w-md text-[15px] leading-relaxed text-slate2 md:text-base">
              Every person in your academy gets a portal shaped around their
              job — with permissions you control down to the module.
            </p>
            <ul className="mt-7 space-y-4">
              {roles.map(([name, desc]) => (
                <li key={name} className="flex items-start gap-3.5">
                  <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-ink text-[10px] text-white">✓</span>
                  <span>
                    <span 
                      className="block text-[15px]"
                      style={{ fontFamily: "'Onest', sans-serif", fontWeight: 400 }}
                    >
                      {name}
                    </span>
                    <span className="block text-sm text-slate2">{desc}</span>
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <div className="overflow-hidden rounded-2xl border border-white/80 shadow-soft lg:sticky lg:top-28">
            <img
              src={IMAGES.team}
              alt="Academy staff planning together"
              className="aspect-[4/3] w-full object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 py-16">
        <div className="mx-auto max-w-4xl rounded-2xl bg-step-fade p-10 text-center shadow-soft md:p-14">
          <h2 
            className="text-3xl leading-[1.15] tracking-tight md:text-4xl"
            style={{ fontFamily: "'Onest', sans-serif", fontWeight: 400 }}
          >
            See it working in 30 minutes
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-[15px] text-slate2 md:text-base">
            Book a live walkthrough and we&apos;ll map the platform to how your
            academy runs today.
          </p>
          <Link
            href="/book-demo"
            className="mt-8 inline-block rounded-full bg-ink px-8 py-4 text-base font-medium text-white shadow-lift transition hover:bg-ink/85"
            style={{ fontFamily: "'Onest', sans-serif" }}
          >
            Book a free demo
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
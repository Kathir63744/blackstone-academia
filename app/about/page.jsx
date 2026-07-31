import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { IMAGES } from "@/lib/siteData";
import { ArrowRight } from "lucide-react";

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

      {/* Custom Hero Section - Starts from top edge */}
      <section className="relative overflow-hidden px-4 pb-12 md:pb-16 -mt-24">
        {/* Background Image */}
        <div className="absolute inset-0 -z-10">
          <img
            src={IMAGES.skyClouds}
            alt=""
            aria-hidden="true"
            className="h-full w-full object-cover"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-sky1/55 to-cream" />
        </div>

        <div className="relative mx-auto max-w-4xl text-center pt-28 sm:pt-20 md:pt-28 lg:pt-32">
          <span className="mx-auto inline-flex items-center gap-2 rounded-full border border-white/80 bg-white/70 px-3 py-1.5 text-[10px] font-bold uppercase tracking-widest text-slate2 shadow-lift backdrop-blur md:px-4 md:text-xs">
            <span className="h-1.5 w-1.5 rounded-full bg-[#6E93E0]" />
            About Us
          </span>

          <h1 
            className="mx-auto mt-4 max-w-3xl text-2xl leading-[1.08] tracking-tight text-ink sm:text-3xl md:text-4xl lg:text-5xl"
            style={{ fontFamily: "'Onest', sans-serif", fontWeight: 400 }}
          >
            Built so academies can <span className="text-iris">teach</span>, not administrate
          </h1>

          <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-slate2 md:mt-4 md:text-[15px] lg:text-base">
            Blackstone Academia began inside a real online academy drowning in spreadsheets, 
            WhatsApp threads and manual invoices. We rebuilt the whole operation as one platform 
            — then made it available to every academy like it.
          </p>

          {/* Trust Badge */}
          <span className="mx-auto mt-5 inline-flex items-center gap-2 rounded-full border border-ink/10 bg-white/70 px-3 py-1.5 text-[10px] font-bold uppercase tracking-widest text-slate2 shadow-lift backdrop-blur md:mt-6 md:px-4 md:py-2 md:text-xs">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Trusted by 500+ academies worldwide
          </span>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-3 md:mt-8 md:gap-4">
            <Link
              href="/book-demo"
              className="group inline-flex items-center gap-2 rounded-full bg-ink px-5 py-2.5 text-sm font-medium text-white shadow-lift transition hover:bg-iris motion-safe:hover:-translate-y-0.5 md:px-7 md:py-3.5 md:text-[15px]"
            >
              Book a free demo
              <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 md:h-4 md:w-4" />
            </Link>
            <Link
              href="/features"
              className="rounded-full border border-ink/15 bg-white px-5 py-2.5 text-sm font-medium text-ink transition hover:border-iris/40 hover:text-iris md:px-7 md:py-3.5 md:text-[15px]"
            >
              Explore features
            </Link>
          </div>
        </div>
      </section>

      {/* Story with image */}
      <section className="px-4 py-10 md:py-16">
        <div className="mx-auto grid max-w-6xl items-center gap-8 md:gap-12 lg:grid-cols-2">
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
              className="text-2xl leading-[1.15] tracking-tight md:text-3xl lg:text-4xl"
              style={{ fontFamily: "'Onest', sans-serif", fontWeight: 400 }}
            >
              From chaos to one calm workspace
            </h2>
            <div className="mt-4 space-y-3 text-sm leading-relaxed text-slate2 md:mt-6 md:space-y-4 md:text-[15px] lg:text-base">
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
      <section className="px-4 py-10 md:py-14">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto max-w-xl text-center">
            <span className="mx-auto inline-flex items-center gap-2 rounded-full border border-white/80 bg-white/70 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-slate2 shadow-lift backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-[#6E93E0]" />
            Our Values
          </span>
            <h2 
              className="mt-3 text-2xl leading-[1.15] tracking-tight md:mt-4 md:text-3xl lg:text-4xl"
              style={{ fontFamily: "'Onest', sans-serif", fontWeight: 400 }}
            >
              What we believe
            </h2>
          </div>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4 md:mt-10 md:gap-5">
            {values.map((v) => (
              <article
                key={v.title}
                className="rounded-2xl border border-white/80 bg-white/80 p-5 shadow-lift backdrop-blur md:p-7"
              >
                <h3 
                  className="text-lg md:text-xl"
                  style={{ fontFamily: "'Onest', sans-serif", fontWeight: 400 }}
                >
                  {v.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate2 md:mt-3">{v.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Roles with team image */}
      <section className="px-4 py-10 md:py-14">
        <div className="mx-auto grid max-w-6xl items-start gap-8 md:gap-12 lg:grid-cols-2">
          <div>
            <span className="mx-auto inline-flex items-center gap-2 rounded-full border border-white/80 bg-white/70 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-slate2 shadow-lift backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-[#6E93E0]" />
            Six Portals
          </span>
            <h2 
              className="mt-3 text-2xl leading-[1.15] tracking-tight md:mt-4 md:text-3xl lg:text-4xl"
              style={{ fontFamily: "'Onest', sans-serif", fontWeight: 400 }}
            >
              Six portals, one platform
            </h2>
            <p className="mt-3 max-w-md text-sm leading-relaxed text-slate2 md:mt-5 md:text-[15px] lg:text-base">
              Every person in your academy gets a portal shaped around their
              job — with permissions you control down to the module.
            </p>
            <ul className="mt-5 space-y-3 md:mt-7 md:space-y-4">
              {roles.map(([name, desc]) => (
                <li key={name} className="flex items-start gap-3">
                  <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-ink text-[8px] text-white md:h-6 md:w-6 md:text-[10px]">✓</span>
                  <span>
                    <span 
                      className="block text-sm md:text-[15px]"
                      style={{ fontFamily: "'Onest', sans-serif", fontWeight: 400 }}
                    >
                      {name}
                    </span>
                    <span className="block text-xs text-slate2 md:text-sm">{desc}</span>
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
      <section className="px-4 py-12 md:py-16">
        <div className="mx-auto max-w-4xl rounded-2xl bg-step-fade p-6 text-center shadow-soft md:p-10 lg:p-14">
          <h2 
            className="text-2xl leading-[1.15] tracking-tight md:text-3xl lg:text-4xl"
            style={{ fontFamily: "'Onest', sans-serif", fontWeight: 400 }}
          >
            See it working in 30 minutes
          </h2>
          <p className="mx-auto mt-3 max-w-lg text-sm text-slate2 md:mt-4 md:text-[15px] lg:text-base">
            Book a live walkthrough and we&apos;ll map the platform to how your
            academy runs today.
          </p>
          <Link
            href="/book-demo"
            className="mt-5 inline-block rounded-full bg-ink px-6 py-3 text-sm font-medium text-white shadow-lift transition hover:bg-ink/85 md:mt-8 md:px-8 md:py-4 md:text-base"
            style={{ fontFamily: "'Onest', sans-serif", fontWeight: 400 }}
          >
            Book a free demo
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
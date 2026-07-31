// ============================================================
// FILE: app/features/page.jsx
// REPLACE your existing file
// ============================================================

import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  Play,
  CreditCard,
  ClipboardCheck,
  MessageSquare,
  BarChart3,
  Shield,
  Zap,
} from "lucide-react";
import { PLATFORM_FEATURES } from "@/lib/siteData";

export const metadata = {
  title: "Features — Blackstone Academia",
  description:
    "Live classes, billing, assessments, messaging, analytics and security — the capabilities every portal runs on.",
};

const ACCENT = "#6E93E0";

/* Keyed by SLUG, not title — titles like "Live Classes & Recording" never
   matched the old title-keyed map, so every card fell back to the same icon. */
const ICONS = {
  "live-classes": <Play className="h-5 w-5" />,
  "billing-finance": <CreditCard className="h-5 w-5" />,
  "assessments-rankings": <ClipboardCheck className="h-5 w-5" />,
  messaging: <MessageSquare className="h-5 w-5" />,
  "analytics-reports": <BarChart3 className="h-5 w-5" />,
  "security-compliance": <Shield className="h-5 w-5" />,
};

/* Every card is the same size, so every slot inside it is fixed too:
   one image band, one clamped title, two clamped summary lines, exactly four
   points and three stats. That's what keeps the rows aligned. */
const POINTS = 4;

function FeatureCard({ f, i }) {
  const icon = ICONS[f.slug] || <Zap className="h-5 w-5" />;
  const points = f.capabilities.slice(0, POINTS);
  const extra = f.capabilities.length - POINTS;

  return (
    <Link
      href={`/features/${f.slug}`}
      className="group flex h-full flex-col overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-slate-200/70 transition-all duration-500 ease-out hover:shadow-2xl hover:ring-[#6E93E0]/40 motion-safe:hover:-translate-y-1.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6E93E0] focus-visible:ring-offset-2"
    >
      {/* MEDIA BAND — fixed ratio, so all six line up exactly */}
      <div className="relative aspect-[16/9] w-full shrink-0 overflow-hidden">
        <img
          src={f.image}
          alt=""
          aria-hidden="true"
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-105"
        />
        <span className="absolute inset-0 bg-gradient-to-t from-slate-900/85 via-slate-900/30 to-transparent" />

        <span className="absolute right-4 top-4 rounded-full bg-white/15 px-2.5 py-0.5 text-[10px] font-semibold tabular-nums text-white ring-1 ring-white/25 backdrop-blur">
          {String(i + 1).padStart(2, "0")}
        </span>

      </div>

      {/* BODY */}
      <div className="flex flex-1 flex-col p-5 pt-8">
        <p
          className="truncate text-[10px] font-semibold uppercase tracking-[0.2em]"
          style={{ color: ACCENT }}
        >
          {f.tagline}
        </p>

        <h3
          className="mt-1.5 line-clamp-1 text-xl tracking-tight text-slate-800 transition-colors duration-300 group-hover:text-[#3B6BC7]"
          style={{ fontFamily: "'Onest', sans-serif", fontWeight: 500 }}
        >
          {f.title}
        </h3>

        <p className="mt-2 line-clamp-2 text-[13.5px] leading-relaxed text-slate-500">
          {f.summary}
        </p>

        {/* HIGHLIGHTED POINTS — the accent bar and tint pull these forward as
           the thing you're meant to read on this card */}
        <div
          className="mt-4 rounded-xl border-l-[3px] bg-sky-50/70 p-3.5 ring-1 ring-sky-200/60 transition-colors duration-300 group-hover:bg-sky-50"
          style={{ borderLeftColor: ACCENT }}
        >
          <p className="text-[9.5px] font-bold uppercase tracking-[0.18em] text-slate-500">
            Key points
          </p>
          <ul className="mt-2.5 space-y-1.5">
            {points.map((c) => (
              <li key={c} className="flex items-start gap-2">
                <Check
                  className="mt-[3px] h-3 w-3 shrink-0"
                  style={{ color: ACCENT }}
                  strokeWidth={3}
                />
                <span className="line-clamp-1 text-[12.5px] font-medium leading-snug text-slate-700">
                  {c}
                </span>
              </li>
            ))}
          </ul>
          {extra > 0 && (
            <p className="mt-2.5 text-[11px] font-semibold text-slate-400">
              +{extra} more capabilities
            </p>
          )}
        </div>

        {/* STATS */}
        <div className="mt-4 grid grid-cols-3 divide-x divide-slate-200 rounded-xl bg-slate-50 py-2.5">
          {f.highlights.map((h) => (
            <div key={h.label} className="px-2 text-center">
              <p className="text-[15px] font-bold leading-none text-slate-800">{h.value}</p>
              <p className="mt-1 truncate text-[9px] font-semibold uppercase tracking-[0.1em] text-slate-400">
                {h.label}
              </p>
            </div>
          ))}
        </div>

        {/* FOOTER — mt-auto pins it to the bottom of every card */}
        <div className="mt-auto flex items-center justify-between pt-4">
          <span className="text-[13px] font-semibold text-slate-700 transition-colors group-hover:text-[#3B6BC7]">
            Explore feature
          </span>
          <span
            className="grid h-8 w-8 place-items-center rounded-full text-slate-500 ring-1 ring-slate-200 transition-all duration-300 group-hover:text-white group-hover:ring-0"
            style={{ transitionProperty: "background-color, color, box-shadow" }}
          >
            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </span>
        </div>
      </div>

      {/* Accent underline sweeps in on hover */}
      <span
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 h-[3px] origin-left scale-x-0 transition-transform duration-500 group-hover:scale-x-100"
        style={{ background: `linear-gradient(90deg, ${ACCENT}, #A5D8FF)` }}
      />
    </Link>
  );
}

export default function FeaturesPage() {
  return (
    <main className="relative bg-gradient-to-br from-sky-50 via-white to-cream-50">
      <Navbar />

      {/* HERO */}
      <section className="relative overflow-hidden px-4 pb-8 pt-10 md:pb-12 md:pt-14">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -left-40 -top-40 h-[30rem] w-[30rem] rounded-full bg-[#6E93E0]/15 blur-[140px]" />
          <div className="absolute -right-32 top-10 h-[26rem] w-[26rem] rounded-full bg-sky-200/30 blur-[140px]" />
        </div>

        <Reveal eager className="mx-auto max-w-6xl">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-sky-200/60 bg-white/80 px-4 py-1.5 text-[12px] font-medium uppercase tracking-[0.22em] text-slate-500 shadow-lift backdrop-blur">
                <span className="relative flex h-1.5 w-1.5">
                  <span
                    className="absolute inline-flex h-full w-full animate-ping rounded-full"
                    style={{ backgroundColor: `${ACCENT}B3` }}
                  />
                  <span
                    className="relative inline-flex h-1.5 w-1.5 rounded-full"
                    style={{ backgroundColor: ACCENT }}
                  />
                </span>
                Platform capabilities
              </span>

              <h1
                className="mt-5 max-w-2xl text-balance text-4xl leading-[1.05] tracking-tight text-ink md:text-[3.2rem]"
                style={{ fontFamily: "'Onest', sans-serif", fontWeight: 400 }}
              >
                Everything you need.
                <span className="block" style={{ color: ACCENT }}>
                  Nothing you don&apos;t.
                </span>
              </h1>
            </div>

            <p className="max-w-sm text-[15px] leading-relaxed text-slate-600">
              Six core capabilities that power every portal — from live teaching to billing,
              assessments, messaging, analytics and security.
            </p>
          </div>

          <div className="mt-7 flex flex-wrap items-center gap-3">
            <Link
              href="/book-demo"
              className="group inline-flex items-center gap-2 rounded-full bg-slate-900 px-6 py-3 text-[14.5px] font-medium text-white shadow-lift transition hover:bg-[#6E93E0] hover:shadow-soft motion-safe:hover:-translate-y-0.5"
              style={{ fontFamily: "'Onest', sans-serif" }}
            >
              Book a free demo
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
            <Link
              href="/modules"
              className="rounded-full border border-sky-200/40 bg-white/80 px-6 py-3 text-[14.5px] font-medium text-ink backdrop-blur-sm transition hover:border-[#6E93E0]/40 hover:text-[#6E93E0]"
              style={{ fontFamily: "'Onest', sans-serif" }}
            >
              See the five portals
            </Link>
          </div>
        </Reveal>
      </section>

      {/* UNIFORM CARD GRID — 6 features, 3 across, two clean rows */}
      <section className="px-4 py-8 md:py-12">
        <div className="mx-auto grid max-w-6xl grid-cols-1 items-stretch gap-6 md:grid-cols-2 lg:grid-cols-3">
          {PLATFORM_FEATURES.map((f, i) => (
            <Reveal key={f.slug} as="div" delay={i * 70} className="h-full">
              <FeatureCard f={f} i={i} />
            </Reveal>
          ))}
        </div>
      </section>

      {/* PROOF STRIP */}
      <section className="px-4 py-6">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-3 md:grid-cols-4">
          {[
            ["500+", "Academies"],
            ["50K+", "Students"],
            ["99.9%", "Uptime"],
            ["24/7", "Support"],
          ].map(([value, label]) => (
            <div
              key={label}
              className="rounded-xl border border-sky-200/30 bg-white/80 p-4 text-center shadow-sm backdrop-blur"
            >
              <p className="text-2xl font-bold" style={{ color: ACCENT }}>
                {value}
              </p>
              <p className="mt-0.5 text-[10px] font-medium uppercase tracking-wider text-slate-500">
                {label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 py-14 md:py-20">
        <Reveal className="mx-auto max-w-6xl">
          <div className="rounded-2xl bg-gradient-to-br from-white via-sky-200/40 to-cream-200/40 p-px shadow-soft">
            <div className="relative overflow-hidden rounded-[inherit] bg-white/85 px-8 py-12 text-center backdrop-blur-xl md:px-14">
              <span
                aria-hidden="true"
                className="pointer-events-none absolute -top-24 left-1/2 h-64 w-[32rem] -translate-x-1/2 rounded-full blur-[100px]"
                style={{ backgroundColor: `${ACCENT}33` }}
              />
              <h2
                className="relative text-3xl tracking-tight text-ink md:text-4xl"
                style={{ fontFamily: "'Onest', sans-serif", fontWeight: 400 }}
              >
                Every feature, in one walkthrough
              </h2>
              <p className="relative mx-auto mt-3 max-w-lg text-[15px] text-slate-600 md:text-base">
                Book 30 minutes and we&apos;ll run your real workflow through the platform —
                live class, invoice, assessment and report.
              </p>
              <Link
                href="/book-demo"
                className="group relative mt-7 inline-flex items-center gap-2 rounded-full bg-slate-900 px-7 py-3.5 text-[15px] font-medium text-white shadow-lift transition hover:bg-[#6E93E0] hover:shadow-soft motion-safe:hover:-translate-y-0.5"
                style={{ fontFamily: "'Onest', sans-serif" }}
              >
                Book a free demo
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </div>
          </div>
        </Reveal>
      </section>

      <Footer />
    </main>
  );
}
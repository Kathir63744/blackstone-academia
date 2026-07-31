"use client";

// ============================================================
// FILE: app/features/[slug]/FeatureDetailClient.jsx
// REPLACE your existing file
// (this supersedes the 3 string edits from step 9 — no longer needed)
// ============================================================

import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import { useEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowRight, ArrowUpRight, Check, Play } from "lucide-react";

const SECTIONS = [
  { id: "overview", label: "Overview" },
  { id: "how-it-works", label: "How it works" },
  { id: "included", label: "What's included" },
];

export default function FeatureDetailClient({
  feature,
  index,
  next,
  relatedModules,
  workflowImages,
  workflowSteps,
  FEATURES,
}) {
  const hasVideo = feature.video && feature.video.trim() !== "";
  const isMp4 = hasVideo && feature.video.endsWith(".mp4");

  const [activeSection, setActiveSection] = useState("overview");
  const sectionRefs = useRef({});

  /* Highlights the current section in the side rail */
  useEffect(() => {
    if (typeof IntersectionObserver === "undefined") return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActiveSection(e.target.id);
        });
      },
      { rootMargin: "-30% 0px -60% 0px", threshold: 0 }
    );
    SECTIONS.forEach(({ id }) => {
      const el = sectionRefs.current[id];
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const setRef = (id) => (el) => {
    sectionRefs.current[id] = el;
  };

  return (
    <main className="relative bg-gradient-to-br from-sky-50 via-white to-cream-50">
      <Navbar />

      {/* ---------------- BREADCRUMB BAR ---------------- */}
      <div className="border-b border-sky-200/30 bg-white/80 backdrop-blur-sm">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-4 py-4">
          <div className="flex items-center gap-2 text-[13px] text-slate2">
            <Link
              href="/features"
              className="inline-flex items-center gap-1.5 font-medium transition hover:text-[#6E93E0]"
            >
              <ArrowLeft className="h-3.5 w-3.5" />
              Features
            </Link>
            <span className="text-sky-300">/</span>
            <span className="text-ink">{feature.title}</span>
          </div>

          <span className="text-[13px] tabular-nums text-slate2">
            <span className="font-semibold text-ink">
              {String(index + 1).padStart(2, "0")}
            </span>
            {" / "}
            {String(FEATURES.length).padStart(2, "0")}
          </span>
        </div>
      </div>

      {/* ---------------- SPLIT HERO ---------------- */}
      <section className="relative overflow-hidden px-4 pb-10 pt-10 md:pb-14 md:pt-14">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -left-40 -top-40 h-[28rem] w-[28rem] rounded-full bg-[#6E93E0]/15 blur-[140px]" />
          <div className="absolute -right-28 top-0 h-[24rem] w-[24rem] rounded-full bg-sky-200/30 blur-[140px]" />
          <div className="absolute bottom-0 left-1/2 h-[20rem] w-[40rem] -translate-x-1/2 rounded-full bg-cream-200/20 blur-[100px]" />
        </div>

        <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-[1.05fr_1fr] lg:gap-14">
          <Reveal eager>
            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#6E93E0]">
              {feature.tagline}
            </p>

            <h1
              className="mt-4 text-balance text-4xl leading-[1.05] tracking-tight text-ink md:text-[3.2rem]"
              style={{ fontFamily: "'Onest', sans-serif", fontWeight: 400 }}
            >
              {feature.title}
            </h1>

            <p className="mt-5 max-w-xl text-[17px] leading-relaxed text-ink/80">
              {feature.summary}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/book-demo"
                className="group inline-flex items-center gap-2 rounded-full bg-slate-900 px-6 py-3 text-[14.5px] font-medium text-white shadow-lift transition hover:bg-[#6E93E0] motion-safe:hover:-translate-y-0.5"
                style={{ fontFamily: "'Onest', sans-serif" }}
              >
                See it in a demo
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
              <Link
                href="/features"
                className="rounded-full border border-sky-200/40 bg-white/80 px-6 py-3 text-[14.5px] font-medium text-ink transition hover:border-[#6E93E0]/40 hover:text-[#6E93E0] backdrop-blur-sm"
                style={{ fontFamily: "'Onest', sans-serif" }}
              >
                All features
              </Link>
            </div>
          </Reveal>

          {/* Framed image instead of a full-bleed banner */}
          <Reveal delay={80}>
            <div className="rounded-3xl bg-gradient-to-br from-white via-sky-200/40 to-cream-200/40 p-px shadow-lift">
              <div className="overflow-hidden rounded-[inherit] bg-white">
                <img
                  src={feature.image}
                  alt=""
                  aria-hidden="true"
                  className="aspect-[16/10] w-full object-cover"
                  loading="eager"
                />
                <div className="grid grid-cols-3 divide-x divide-sky-200/30 border-t border-sky-200/30">
                  {feature.highlights.map((h) => (
                    <div key={h.label} className="px-4 py-4 text-center">
                      <p
                        className="text-xl leading-none text-ink"
                        style={{ fontFamily: "'Onest', sans-serif", fontWeight: 500 }}
                      >
                        {h.value}
                      </p>
                      <p className="mt-1.5 text-[10px] font-semibold uppercase leading-tight tracking-[0.12em] text-slate2">
                        {h.label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------------- BODY: RAIL + CONTENT ---------------- */}
      <div className="mx-auto max-w-6xl px-4 pb-8">
        <div className="lg:grid lg:grid-cols-[220px_minmax(0,1fr)] lg:gap-14">
          {/* STICKY RAIL */}
          <aside className="hidden lg:block">
            <div className="sticky top-28 py-10">
              <p className="text-[10.5px] font-semibold uppercase tracking-[0.2em] text-slate2">
                On this page
              </p>
              <nav className="mt-4 space-y-1 border-l border-sky-200/30">
                {SECTIONS.map((s) => {
                  const active = activeSection === s.id;
                  return (
                    <a
                      key={s.id}
                      href={`#${s.id}`}
                      className={`-ml-px block border-l-2 py-1.5 pl-4 text-[14px] transition ${
                        active
                          ? "border-[#6E93E0] font-medium text-ink"
                          : "border-transparent text-slate2 hover:border-[#6E93E0]/30 hover:text-ink"
                      }`}
                    >
                      {s.label}
                    </a>
                  );
                })}
              </nav>

              <div className="mt-8 rounded-2xl border border-sky-200/30 bg-sky-50/60 backdrop-blur p-5">
                <p className="text-[13px] leading-relaxed text-slate2">
                  Want to see {feature.title} running on your own workflow?
                </p>
                <Link
                  href="/book-demo"
                  className="group mt-4 inline-flex items-center gap-1.5 text-[13.5px] font-semibold text-ink transition hover:text-[#6E93E0]"
                >
                  Book a demo
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                </Link>
              </div>
            </div>
          </aside>

          {/* CONTENT */}
          <div className="min-w-0">
            {/* OVERVIEW */}
            <section
              id="overview"
              ref={setRef("overview")}
              className="scroll-mt-28 border-b border-sky-200/30 py-10 md:py-14"
            >
              <Reveal>
                <h2
                  className="text-2xl tracking-tight text-ink md:text-3xl"
                  style={{ fontFamily: "'Onest', sans-serif", fontWeight: 400 }}
                >
                  Overview
                </h2>
                <p className="mt-5 text-[16px] leading-[1.75] text-slate2">
                  {feature.overview}
                </p>
              </Reveal>
            </section>

            {/* HOW IT WORKS */}
            <section
              id="how-it-works"
              ref={setRef("how-it-works")}
              className="scroll-mt-28 border-b border-sky-200/30 py-10 md:py-14"
            >
              <Reveal>
                <div className="flex flex-wrap items-end justify-between gap-3">
                  <h2
                    className="text-2xl tracking-tight text-ink md:text-3xl"
                    style={{ fontFamily: "'Onest', sans-serif", fontWeight: 400 }}
                  >
                    How it works
                  </h2>
                  <span className="inline-flex items-center gap-2 rounded-full border border-sky-200/30 bg-white/80 px-3 py-1 text-[11.5px] font-medium text-slate2 backdrop-blur-sm">
                    <span
                      className={`h-1.5 w-1.5 rounded-full ${
                        hasVideo ? "animate-pulse bg-emerald-400" : "bg-slate-300"
                      }`}
                    />
                    {hasVideo ? "Video demo" : "Preview"}
                  </span>
                </div>

                {/* Media — caption sits BELOW the frame rather than over it, so
                   the text never lands on an unpredictable video frame */}
                <div className="mt-6 overflow-hidden rounded-2xl border border-sky-200/30 bg-white shadow-lift">
                  {hasVideo ? (
                    isMp4 ? (
                      <video
                        src={feature.video}
                        className="block h-auto w-full"
                        autoPlay
                        muted
                        loop
                        playsInline
                      />
                    ) : (
                      <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
                        <iframe
                          src={`${feature.video}?autoplay=1&loop=1&mute=1&controls=0&rel=0&modestbranding=1`}
                          title={`${feature.title} overview video`}
                          className="absolute inset-0 h-full w-full border-0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        />
                      </div>
                    )
                  ) : (
                    <img
                      src={workflowImages?.step1 || feature.image}
                      alt={feature.title}
                      className="block h-auto w-full"
                    />
                  )}
                </div>
                <p className="mt-3 flex items-center gap-2 text-[12.5px] text-slate2">
                  <Play className="h-3.5 w-3.5 text-[#6E93E0]" />
                  {feature.title} — {feature.tagline}
                </p>

                {/* Steps as a vertical spine, not a 3-across grid */}
                <ol className="mt-10 space-y-0">
                  {workflowSteps.map((step, idx) => (
                    <li key={idx} className="relative flex gap-5 pb-9 last:pb-0">
                      {/* connector */}
                      {idx < workflowSteps.length - 1 && (
                        <span
                          aria-hidden="true"
                          className="absolute left-[22px] top-12 bottom-0 w-px bg-sky-200/30"
                        />
                      )}

                      <span className="relative z-10 grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-sky-100/60 text-[#6E93E0] ring-1 ring-sky-200/30">
                        {step.icon}
                      </span>

                      <div className="min-w-0 pt-1">
                        <p className="text-[10.5px] font-semibold uppercase tracking-[0.2em] text-slate2">
                          Step {String(idx + 1).padStart(2, "0")}
                        </p>
                        <h3
                          className="mt-1.5 text-lg text-ink"
                          style={{ fontFamily: "'Onest', sans-serif", fontWeight: 500 }}
                        >
                          {step.title}
                        </h3>
                        <p className="mt-2 text-[14.5px] leading-relaxed text-slate2">
                          {step.desc}
                        </p>
                        <div className="mt-3 flex flex-wrap gap-2">
                          {step.detail.split(" • ").map((item) => (
                            <span
                              key={item}
                              className="rounded-full border border-sky-200/30 bg-sky-50/50 backdrop-blur px-2.5 py-1 text-[11.5px] font-medium text-slate2"
                            >
                              {item}
                            </span>
                          ))}
                        </div>
                      </div>
                    </li>
                  ))}
                </ol>
              </Reveal>
            </section>

            {/* WHAT'S INCLUDED */}
            <section
              id="included"
              ref={setRef("included")}
              className="scroll-mt-28 py-10 md:py-14"
            >
              <Reveal>
                <div className="flex flex-wrap items-end justify-between gap-3">
                  <h2
                    className="text-2xl tracking-tight text-ink md:text-3xl"
                    style={{ fontFamily: "'Onest', sans-serif", fontWeight: 400 }}
                  >
                    What&apos;s included
                  </h2>
                  <span className="text-[13px] tabular-nums text-slate2">
                    {String(feature.capabilities.length).padStart(2, "0")} capabilities
                  </span>
                </div>

                {/* Divided rows rather than cards — reads as a spec list */}
                <ul className="mt-6 grid gap-x-10 sm:grid-cols-2">
                  {feature.capabilities.map((c) => (
                    <li
                      key={c}
                      className="flex items-start gap-3 border-b border-sky-200/30 py-3.5"
                    >
                      <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-md bg-sky-100/60 text-[#6E93E0]">
                        <Check className="h-3 w-3" />
                      </span>
                      <span className="text-[14.5px] leading-snug text-ink/85">{c}</span>
                    </li>
                  ))}
                </ul>
              </Reveal>
            </section>
          </div>
        </div>
      </div>

      {/* ---------------- MORE FEATURES ---------------- */}
      {relatedModules?.length > 0 && (
        <section className="border-t border-sky-200/30 bg-sky-50/40 backdrop-blur px-4 py-12 md:py-16">
          <div className="mx-auto max-w-6xl">
            <Reveal className="mb-6 flex flex-wrap items-end justify-between gap-3">
              <h2
                className="text-2xl tracking-tight text-ink md:text-3xl"
                style={{ fontFamily: "'Onest', sans-serif", fontWeight: 400 }}
              >
                More features
              </h2>
              <Link
                href="/features"
                className="inline-flex items-center gap-1.5 text-[13.5px] font-medium text-[#6E93E0] hover:underline"
              >
                View all
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </Reveal>

            {/* Compact horizontal rows — deliberately unlike the modules page's
               image cards, so the two sections stay visually separate */}
            <div className="grid gap-3 md:grid-cols-3">
              {relatedModules.map((mod) => (
                <Reveal key={mod.slug} delay={50}>
                  <Link
                    href={`/features/${mod.slug}`}
                    className="group flex h-full items-center gap-4 rounded-2xl border border-sky-200/30 bg-white/80 backdrop-blur p-3 transition hover:border-[#6E93E0]/40 hover:shadow-lift motion-safe:hover:-translate-y-0.5"
                  >
                    <img
                      src={mod.image}
                      alt=""
                      aria-hidden="true"
                      loading="lazy"
                      className="h-16 w-16 shrink-0 rounded-xl object-cover"
                    />
                    <div className="min-w-0 flex-1">
                      <p className="truncate text-[15px] font-medium text-ink transition-colors group-hover:text-[#6E93E0]">
                        {mod.title}
                      </p>
                      <p className="mt-0.5 line-clamp-2 text-[12.5px] leading-snug text-slate2">
                        {mod.tagline}
                      </p>
                    </div>
                    <ArrowUpRight className="h-4 w-4 shrink-0 text-slate2 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#6E93E0]" />
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ---------------- NEXT ---------------- */}
      {next && next.slug !== feature.slug && (
        <section className="px-4 py-12 md:py-16">
          <Reveal className="mx-auto max-w-6xl">
            <Link
              href={`/features/${next.slug}`}
              className="group flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-sky-200/30 bg-white/80 backdrop-blur px-6 py-6 transition hover:border-[#6E93E0]/40 hover:shadow-lift md:px-8"
            >
              <div>
                <p className="text-[10.5px] font-semibold uppercase tracking-[0.24em] text-slate2">
                  Next feature
                </p>
                <p
                  className="mt-1.5 text-2xl tracking-tight text-ink transition-colors group-hover:text-[#6E93E0] md:text-3xl"
                  style={{ fontFamily: "'Onest', sans-serif", fontWeight: 400 }}
                >
                  {next.title}
                </p>
                <p className="mt-1 text-[13.5px] text-slate2">{next.tagline}</p>
              </div>
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full border border-sky-200/30 text-ink transition duration-300 group-hover:border-transparent group-hover:bg-[#6E93E0] group-hover:text-white">
                <ArrowRight className="h-5 w-5" />
              </span>
            </Link>
          </Reveal>
        </section>
      )}

      <Footer />
    </main>
  );
}
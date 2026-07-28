import Link from "next/link";
import { IMAGES } from "@/lib/siteData";
import Reveal from "./Reveal";
import BackgroundAccent from "./BackgroundAccent";

// Real people thumbnails instead of plain color dots
const PARTICIPANTS = [
  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=60",
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=60",
  "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=100&q=60",
];

const TRUSTED = [
  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&q=60",
  "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=100&q=60",
];

export default function Hero() {
  return (
    <section className="relative -mt-24 overflow-hidden px-4 pb-16 pt-20 md:pt-28 lg:pt-32">
      {/* Cloud photo background + pastel overlay */}
      <div className="absolute inset-0 -z-10">
        <img
          src={IMAGES.skyClouds}
          alt=""
          aria-hidden="true"
          className="h-full w-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-sky1/50 to-cream/90" />
      </div>
      <BackgroundAccent variant="diagonal" />

      <div className="relative mx-auto max-w-7xl">
        {/* Headline — animates in on page load, not on scroll */}
        <Reveal eager as="div" className="text-center">
          <span className="mx-auto inline-flex items-center gap-2 rounded-full border border-white/80 bg-white/70 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-slate2 shadow-lift backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-[#6E93E0]" />
            Trusted by 500+ academies worldwide
          </span>
          <h1 className="mx-auto mt-5 max-w-3xl text-[2rem] leading-[1.12] tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
            Run your <span className="">entire</span> academy
            <br className="hidden sm:block" /> on{" "}
            <span className="">one</span> platform
          </h1>
          <p className="mx-auto mt-4 max-w-xl px-2 text-sm leading-relaxed text-slate2 md:text-[15px]">
            Live classes, trial sessions, invoicing, assessments and reports —
            for students, teachers, coaches and admins in one system.
          </p>
        </Reveal>

        {/* Composition: on mobile the frame leads, quote & stat share a row below;
            on md+ it becomes the 3-column reference layout */}
        <div className="mt-8 grid grid-cols-2 items-center gap-x-4 gap-y-8 md:mt-12 md:grid-cols-[1fr_3fr_1fr] md:gap-8">
          {/* CENTER — extra-large live class frame.
              The frame itself (border, padding, shadow) stays static on
              hover — only the photo inside reacts, via its own overflow
              container so the zoom/glow never bleeds past the image edge. */}
          <Reveal eager delay={120} y={32} className="col-span-2 order-1 md:order-2 md:col-span-1">
            <div className="relative mx-auto w-full max-w-3xl rounded-3xl border border-white/80 bg-white/80 p-2 shadow-soft backdrop-blur sm:rounded-[2rem] sm:p-2.5">
              <div className="group relative overflow-hidden rounded-[1.15rem] sm:rounded-[1.6rem]">
                <img
                  src={IMAGES.heroClass}
                  alt="Student attending a live online class"
                  className="aspect-[16/10] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05] sm:aspect-[16/9]"
                  loading="eager"
                />

                {/* highlight confined to the image itself: a soft sheen
                    that fades in on hover, clipped by the same overflow
                    container as the photo — never touches the frame */}
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  style={{
                    background:
                      "radial-gradient(circle at 30% 20%, rgba(255,255,255,0.28), transparent 55%)",
                  }}
                />

                {/* participants — real faces, top left */}
                <div className="absolute left-3 top-3 flex -space-x-2 sm:left-4 sm:top-4">
                  {PARTICIPANTS.map((src, i) => (
                    <img
                      key={i}
                      src={src}
                      alt=""
                      className="h-7 w-7 rounded-full border-2 border-white object-cover shadow-lift sm:h-8 sm:w-8"
                      loading="lazy"
                    />
                  ))}
                  <span className="grid h-7 w-7 place-items-center rounded-full border-2 border-white bg-ink text-[9px] font-bold text-white shadow-lift sm:h-8 sm:w-8 sm:text-[10px]">
                    +15
                  </span>
                </div>

                {/* live badge — top right */}
                <span className="absolute right-3 top-3 flex items-center gap-1.5 rounded-full bg-white/90 px-2.5 py-1 text-[10px] font-bold text-ink shadow-lift backdrop-blur sm:right-4 sm:top-4 sm:px-3.5 sm:py-1.5 sm:text-xs">
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-ember" />
                  LIVE · 24:12
                </span>

                {/* value strip — bottom, key words highlighted */}
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/80 via-ink/40 to-transparent px-4 pb-3.5 pt-14 text-left text-white sm:px-5 sm:pb-4">
                  <p className="text-sm font-bold leading-snug sm:text-base md:text-lg">
                    Every class{" "}
                    <span className="rounded-md bg-ember/90 px-1.5 py-0.5">
                      auto-recorded
                    </span>
                    , every seat{" "}
                    <span className="rounded-md bg-white/25 px-1.5 py-0.5 backdrop-blur">
                      invoice-ready
                    </span>
                  </p>
                  <div className="mt-2.5 flex flex-wrap items-center gap-1.5 sm:gap-2">
                    {[
                      "Tajweed · Level 2",
                      "MS Teams",
                      "→ SharePoint",
                      "Attendance ✓",
                    ].map((chip, i) => (
                      <span
                        key={chip}
                        className={`rounded-full border border-white/30 bg-white/15 px-2.5 py-1 text-[10px] font-semibold backdrop-blur sm:text-[11px] ${
                          i > 1 ? "hidden xs:inline-block sm:inline-block" : ""
                        }`}
                      >
                        {chip}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          {/* LEFT — quote from an academy, CTA. Author name now matches the
              rest of the hero's font family (no separate display/italic
              face) so nothing in this section switches typefaces. */}
          <Reveal eager delay={220} className="order-2 mx-auto max-w-[220px] text-center md:order-1">
            <blockquote className="text-[10px] font-bold uppercase tracking-wider leading-relaxed text-ink/80 sm:text-[11px]">
              &ldquo;Trial sessions, live classes and invoices finally run in
              one place&rdquo;
            </blockquote>
            <p className="mt-2.5 text-lg font-bold sm:text-xl">Ayesha Rahman</p>
            <p className="text-[9px] font-semibold uppercase tracking-widest text-slate2 sm:text-[10px]">
              Founder, Noor Academy
            </p>
            <Link
              href="/book-demo"
              className="mt-5 inline-block rounded-full bg-ink px-5 py-2.5 text-[13px] font-semibold text-white shadow-lift transition hover:-translate-y-0.5 hover:bg-ink/85 hover:shadow-soft sm:px-6 sm:py-3 sm:text-sm"
            >
              Book a free demo
            </Link>
          </Reveal>

          {/* RIGHT — real avatars, stat, trust line. Stat number dropped the
              separate display face too, so it's the same family as
              everything else in the hero, just heavier and larger. */}
          <Reveal eager delay={300} className="order-3 mx-auto text-center">
            <div className="flex justify-center -space-x-2">
              {TRUSTED.map((src, i) => (
                <img
                  key={i}
                  src={src}
                  alt=""
                  className="h-9 w-9 rounded-full border-2 border-white object-cover shadow-lift sm:h-10 sm:w-10"
                  loading="lazy"
                />
              ))}
            </div>
            <p className="mt-3 text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
              25K+
            </p>
            <p className="mt-1 text-[9px] font-semibold uppercase tracking-[0.2em] text-slate2 sm:text-[10px]">
              Students managed
            </p>
            <p className="mx-auto mt-4 max-w-[170px] text-[13px] font-semibold leading-relaxed text-ink sm:mt-6 sm:text-sm">
              We are chosen for our quality
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
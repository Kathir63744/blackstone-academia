import Link from "next/link";
import { IMAGES } from "@/lib/siteData";
import Reveal from "./Reveal";

const PARTICIPANTS = [
  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=60",
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=60",
  "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=100&q=60",
];

const CHECKS = ["Easy to start", "Quick to set up", "Built to grow with you"];

const FEATURES = [
  {
    title: "Built-in Live Classes",
    body: "Conduct interactive live sessions, share screens and engage in real-time.",
    tile: "bg-teal-50 text-teal-600 ring-teal-100",
    path: "M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z",
  },
  {
    title: "Smart & Efficient",
    body: "Automated workflows save time and reduce manual work.",
    tile: "bg-orange-50 text-orange-500 ring-orange-100",
    path: "M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zm10 0a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zm10 0a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z",
  },
  {
    title: "Automate and Save Time",
    body: "Automated invoices, attendences, reports and notifications",
    tile: "bg-rose-50 text-rose-500 ring-rose-100",
    path: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
  },
  {
    title: "Insights that Help You Grow",
    body: "Get powerful insights and reports to make smarter decisions",
    tile: "bg-blue-50 text-blue-600 ring-blue-100",
    path: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
  }
];

export default function Hero() {
  return (
    <section className="relative -mt-24 overflow-hidden px-4 pb-16 pt-28 sm:pt-20 md:pt-28 lg:pt-32">
      {/* Cloud photo background + pastel wash */}
      <div className="absolute inset-0 -z-10">
        <img
          src={IMAGES.skyClouds}
          alt=""
          aria-hidden="true"
          className="h-full w-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/75 via-sky1/45 to-white/85" />
      </div>

      <div className="relative mx-auto max-w-7xl">
        {/* ── Badge + headline ─────────────────────────────────────────── */}
        <Reveal eager as="div" className="text-center">
          <h1 className="mx-auto mt-6 text-3xl font-semibold leading-[1.15] tracking-tight md:text-4xl lg:text-5xl">
            Run your entire academy
            <br className="hidden sm:block" />{" "}
            <span className="whitespace-nowrap">
              on <span className="text-sky-600 font-semibold">one platform</span>
            </span>
          </h1>

          <p className="mx-auto mt-5 max-w-2xl px-2 text-sm leading-relaxed text-slate-800 sm:text-base md:text-[17px]">
            Manage admissions, academics, student life, faculty, finance, learning, and campus operations through one intelligent University Management Platform.
          </p>
        </Reveal>

        {/* ── Three-column composition ─────────────────────────────────── */}
        {/* THIS IS THE CRITICAL PART - KEEP THE SAME GRID BUT MAKE IT RESPONSIVE */}
        <div className="mt-10 grid grid-cols-1 items-start gap-8 md:mt-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,2.5fr)_minmax(0,1.1fr)] lg:gap-10">
          
          {/* LEFT — pitch, checklist, CTA */}
          <Reveal
            eager
            delay={220}
            className="order-2 w-full max-w-sm mx-auto lg:order-1 lg:mt-8 lg:max-w-none lg:mx-0"
          >
            <div className="flex items-start gap-3">
              <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-blue-600/10 text-sky-600">
                <svg
                  className="h-4.5 w-4.5"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M12 2l1.9 5.6L19.5 9.5 13.9 11.4 12 17l-1.9-5.6L4.5 9.5l5.6-1.9L12 2z" />
                </svg>
              </span>
              <p className="text-[11px] font-bold uppercase leading-[1.5] tracking-[0.12em] text-iris">
                Intelligent Academic
                <br />
                Management Platform
              </p>
            </div>

            <h2 className="mt-6 text-2xl font-extrabold leading-tight text-ink sm:text-[1.7rem]">
              Simplify today.
              <br />
              Scale tomorrow.
            </h2>

            <span
              aria-hidden="true"
              className="mt-4 block h-[3px] w-12 rounded-full bg-iris"
            />

            <ul className="mt-5 space-y-3">
              {CHECKS.map((c) => (
                <li key={c} className="flex items-center gap-3">
                  <span className="grid h-5 w-5 shrink-0 place-items-center rounded-full bg-iris text-white">
                    <svg
                      className="h-3 w-3"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={3.5}
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </span>
                  <span className="text-[15px] font-medium text-slate-700">
                    {c}
                  </span>
                </li>
              ))}
            </ul>

            <Link
              href="/book-demo"
              className="group mt-14 inline-flex items-center gap-3 rounded-full bg-black py-3.5 pl-7 pr-3.5 text-[15px] font-semibold text-white shadow-lift transition hover:-translate-y-0.5 hover:bg-iris/90"
            >
              Book a free demo
              <span className="grid h-8 w-8 place-items-center rounded-full bg-white/20 transition group-hover:translate-x-0.5">
                <svg
                  className="h-4 w-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2.5}
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 12h14M13 6l6 6-6 6"
                  />
                </svg>
              </span>
            </Link>
          </Reveal>

          {/* CENTER — extra-large live class frame */}
          <Reveal eager delay={120} y={32} className="order-1 col-span-2 md:order-2 md:col-span-1">
            <div className="relative mx-auto w-full max-w-4xl rounded-3xl border border-white/80 bg-white/80 p-3 shadow-soft backdrop-blur sm:rounded-[2rem] sm:p-3.5">
              <div className="group relative overflow-hidden rounded-[1.15rem] sm:rounded-[1.6rem]">
                <img
                  src={IMAGES.heroClass}
                  alt="Student attending a live online class"
                  className="aspect-[16/10] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05] sm:aspect-[16/9]"
                  loading="eager"
                />

                {/* highlight confined to the image itself */}
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
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-red-500" />
                  LIVE
                </span>

                {/* value strip — bottom */}
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent px-4 pb-3.5 pt-14 text-left text-white sm:px-5 sm:pb-4">
                  <p className="text-sm font-bold leading-snug sm:text-base md:text-lg">
                    Built to{" "}
                    <span className="rounded-md bg-red-500/90 px-1.5 py-0.5">
                      Educate 
                    </span>{" "}
                    & Designed to{" "}
                    <span className="rounded-md bg-red-500/90 px-1.5 py-0.5">
                      Elevate 
                    </span>
                  </p>
                  <div className="mt-2.5 flex flex-wrap items-center gap-1.5 sm:gap-2">
                    {[
                      "Class",
                      "MS Teams",
                      "SharePoint",
                      "Attendance",
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

          {/* RIGHT — feature list */}
          <Reveal
            eager
            delay={300}
            className="order-3 w-full max-w-sm mx-auto lg:max-w-none lg:mx-0"
          >
            <h2 className="text-xl font-extrabold leading-snug text-ink sm:text-[1.35rem]">
              Everything you need,
              <br />
              is <span className="text-sky-600">Unified</span>.
            </h2>

            <ul className="mt-6 space-y-5">
              {FEATURES.map((f) => (
                <li key={f.title} className="flex items-start gap-3.5">
                  <span
                    className={`grid h-11 w-11 shrink-0 place-items-center rounded-2xl ring-1 ${f.tile}`}
                  >
                    <svg
                      className="h-5 w-5"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d={f.path}
                      />
                    </svg>
                  </span>
                  <div>
                    <h3 className="text-[15px] font-bold text-ink">
                      {f.title}
                    </h3>
                    <p className="mt-1 text-[13px] leading-relaxed text-slate-800">
                      {f.body}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>

      {/* Marquee keyframes + edge fade for the word strip */}
      <style>{`
        @keyframes hero-marquee-scroll {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        .hero-marquee {
          animation: hero-marquee-scroll 22s linear infinite;
        }
        .mask-fade {
          -webkit-mask-image: linear-gradient(to right, transparent, #000 8%, #000 92%, transparent);
                  mask-image: linear-gradient(to right, transparent, #000 8%, #000 92%, transparent);
        }
        @media (prefers-reduced-motion: reduce) {
          .hero-marquee { animation: none; }
        }
        
        /* CRITICAL: Custom breakpoint for extra small screens */
        @media (min-width: 480px) {
          .xs\\:inline-block {
            display: inline-block;
          }
        }

        /* CRITICAL: Mobile responsiveness without changing layout */
        @media (max-width: 1023px) {
          /* On mobile, the grid becomes single column */
          .grid-cols-1 {
            grid-template-columns: 1fr !important;
          }
          
          /* Center all content on mobile */
          .mx-auto {
            margin-left: auto !important;
            margin-right: auto !important;
          }
          
          /* Ensure content stays contained */
          .max-w-sm {
            max-width: 100% !important;
          }
          
          /* Fix ordering on mobile */
          .order-1 { order: 1 !important; }
          .order-2 { order: 2 !important; }
          .order-3 { order: 3 !important; }
          
          /* Fix col-span on mobile */
          .col-span-2 {
            grid-column: span 1 !important;
          }
        }

        /* Tablet specific */
        @media (min-width: 768px) and (max-width: 1023px) {
          .md\\:order-2 { order: 2 !important; }
        }

        /* Desktop - restore original layout */
        @media (min-width: 1024px) {
          .lg\\:grid-cols-\\[minmax\\(0\\,0\\.9fr\\)_minmax\\(0\\,2\\.5fr\\)_minmax\\(0\\,1\\.1fr\\)\\] {
            grid-template-columns: minmax(0, 0.9fr) minmax(0, 2.5fr) minmax(0, 1.1fr) !important;
          }
          
          .lg\\:order-1 { order: 1 !important; }
          .lg\\:order-2 { order: 2 !important; }
          .lg\\:order-3 { order: 3 !important; }
          
          .lg\\:max-w-none { max-width: none !important; }
          .lg\\:mx-0 { margin-left: 0 !important; margin-right: 0 !important; }
          .lg\\:mt-8 { margin-top: 2rem !important; }
        }
      `}</style>
    </section>
  );
}
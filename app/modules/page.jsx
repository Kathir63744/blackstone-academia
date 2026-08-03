// ============================================================
// FILE: app/modules/page.jsx
// NEW FILE
// ============================================================

import Link from "next/link";
import Reveal from "@/components/Reveal";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { MODULES } from "@/lib/siteData";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Modules — Blackstone Academia",
  description:
    "Five role-based portals — student, teacher, academic coach, supervisor and admin — on one platform.",
};

/* Gradient hairline borders. Each card is a 1px gradient wrapper around a
   frosted surface — the edge catches light instead of sitting there as a
   flat grey line. */
const EDGES = [
  "from-white via-iris/35 to-sky1/60",
  "from-white via-sky1/60 to-iris/30",
  "from-iris/25 via-white to-sky1/50",
];

function Mesh() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      <div className="absolute -left-32 top-0 h-[28rem] w-[28rem] rounded-full bg-iris/20 blur-[120px]" />
      <div className="absolute -right-24 top-64 h-[24rem] w-[24rem] rounded-full bg-sky1/50 blur-[120px]" />
      <div className="absolute bottom-0 left-1/3 h-[22rem] w-[22rem] rounded-full bg-iris/10 blur-[120px]" />
    </div>
  );
}

/* Portals whose screenshots read better anchored to the bottom of the frame */
const BOTTOM_ANCHORED = ["academic-coach-portal", "supervisor-portal"];

export default function ModulesPage() {
  return (
    <main className="relative bg-sky1/5">
      <Navbar />
      <Mesh />

      {/* HERO */}
      <section className="section-tight px-4 py-4 md:py-8">
        <Reveal eager className="mx-auto max-w-6xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-ink/10 bg-white/70 px-4 py-1.5 text-[12px] font-medium uppercase tracking-[0.22em] text-slate2 backdrop-blur">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-iris/70" />
              <span className="eyebrow" />
            </span>
            Role-based portals
          </span>

          <h1
            className="mt-5 max-w-3xl text-balance text-4xl leading-[1.05] tracking-tight text-ink md:text-5xl"
            style={{ fontFamily: "'Onest', sans-serif", fontWeight: 400 }}
          >
            Five portals. Everyone in the right place.
          </h1>
          <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-slate2 md:text-base">
            Students, teachers, coaches, supervisors and admins each get a workspace built
            around what they actually do — sharing the same data underneath.
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <Link
              href="/book-demo"
              className="group inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-[14.5px] font-medium text-white shadow-lift transition hover:bg-iris hover:shadow-soft motion-safe:hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-iris focus-visible:ring-offset-2"
              style={{ fontFamily: "'Onest', sans-serif" }}
            >
              Book a free demo
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
            <Link
              href="/features"
              className="rounded-full border border-ink/15 bg-white px-6 py-3 text-[14.5px] font-medium text-ink transition hover:border-iris/40 hover:text-iris"
              style={{ fontFamily: "'Onest', sans-serif" }}
            >
              See platform features
            </Link>
          </div>
        </Reveal>
      </section>

      {/* MODULE BOARD */}
      <section className="px-4 py-9 pb-16 md:py-14">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-4 md:grid-cols-2">
          {MODULES.map((f, i) => {
            const edge = EDGES[i % EDGES.length];
            const peek = (f.capabilities ?? []).slice(0, 3);
            const imagePosition = BOTTOM_ANCHORED.includes(f.slug)
              ? "object-bottom"
              : "object-center";

            return (
              <Reveal
                key={f.slug}
                as={Link}
                href={`/modules/${f.slug}`}
                delay={(i % 2) * 70}
                className={`group relative rounded-2xl bg-gradient-to-br p-px shadow-lift transition duration-300 hover:shadow-soft motion-safe:hover:-translate-y-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-iris focus-visible:ring-offset-4 ${edge}`}
              >
                <div className="flex h-full flex-col overflow-hidden rounded-[inherit] bg-white/90 backdrop-blur-xl">
                  {/* Image band */}
                  <div className="relative h-[250px] w-full shrink-0 overflow-hidden">
                    <img
                      src={f.image}
                      alt=""
                      aria-hidden="true"
                      className={`h-[150%] w-full object-cover ${imagePosition}`}
                      loading="lazy"
                    />
                    <span
                      aria-hidden="true"
                      className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/10 to-transparent"
                    />
                    <span className="absolute left-4 top-4 rounded-full border border-white/30 bg-black/25 px-2.5 py-1 text-[11px] font-semibold tabular-nums text-white backdrop-blur">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="absolute right-4 top-4 grid h-8 w-8 place-items-center rounded-full border border-white/40 bg-white/10 text-white backdrop-blur transition duration-300 group-hover:bg-white group-hover:text-ink">
                      <ArrowUpRight className="h-4 w-4" />
                    </span>
                  </div>

                  {/* Copy */}
                  <div className="flex flex-1 flex-col p-6">
                    <h2
                      className="text-xl tracking-tight text-ink transition-colors duration-300 group-hover:text-iris"
                      style={{ fontFamily: "'Onest', sans-serif", fontWeight: 400 }}
                    >
                      {f.title}
                    </h2>
                    <p className="mt-1 text-[14px] font-medium text-slate2">{f.tagline}</p>
                    <p className="mt-3 line-clamp-2 text-[14px] leading-relaxed text-slate2">
                      {f.summary}
                    </p>

                    {peek.length > 0 && (
                      <div className="mt-4 flex flex-wrap gap-2">
                        {peek.map((c) => (
                          <span
                            key={c}
                            className="rounded-full border border-ink/10 bg-mist px-3 py-1 text-xs font-medium text-slate2"
                          >
                            {c}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

 <section className="px-4 py-12 md:py-16">
        <div className="mx-auto max-w-7xl rounded-2xl bg-step-fade p-6 text-center shadow-soft md:p-10 lg:p-14">
          <h2 
            className="text-2xl leading-[1.15] tracking-tight md:text-3xl lg:text-4xl"
            style={{ fontFamily: "'Onest', sans-serif", fontWeight: 400 }}
          >
            See all five portals live

          </h2>
          <p className="mx-auto mt-3 max-w-lg text-sm text-slate2 md:mt-4 md:text-[15px] lg:text-base">
           Book a 30-minute walkthrough and we'll demo the portals your team will actually use, with your real workflow.
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
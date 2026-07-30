import Link from "next/link";
import Reveal from "@/components/Reveal";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { FEATURES } from "@/lib/siteData";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";

/* Gradient hairline borders. Each card is a 1px gradient wrapper around a
   frosted surface — the edge catches light instead of sitting there as a
   flat grey line. */
const EDGES = [
  "from-white via-iris/35 to-sky1/60",
  "from-white via-sky1/60 to-iris/30",
  "from-iris/25 via-white to-sky1/50",
];

/* Ambient field — blurred colour blobs behind the glass. */
function Mesh() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      <div className="absolute -left-32 top-0 h-[28rem] w-[28rem] rounded-full bg-iris/20 blur-[120px]" />
      <div className="absolute -right-24 top-64 h-[24rem] w-[24rem] rounded-full bg-sky1/50 blur-[120px]" />
      <div className="absolute bottom-0 left-1/3 h-[22rem] w-[22rem] rounded-full bg-iris/10 blur-[120px]" />
    </div>
  );
}

export default function Features() {
  return (
    <main className="relative bg-sky1/5">
      <Navbar />
      <Mesh />

      {/* HERO */}
      <section className="section-tight py-4 md:py-8 px-4">
        <Reveal eager className="mx-auto max-w-6xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-ink/10 bg-white/70 px-4 py-1.5 text-[12px] font-medium uppercase tracking-[0.22em] text-slate2 backdrop-blur">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-iris/70" />
              <span className="eyebrow" />
            </span>
            Platform features
          </span>

          <h1 
            className="mt-5 max-w-3xl text-balance text-4xl leading-[1.05] tracking-tight text-ink md:text-5xl"
            style={{ fontFamily: "'Onest', sans-serif", fontWeight: 400 }}
          >
            Eight modules. One calm platform.
          </h1>
          <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-slate2 md:text-base">
            Everything here ships together and works together — no add-ons, no
            integrations to babysit. Open any module for the full detail.
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <Link
              href="/book-demo"
              className="group inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-[14.5px] font-medium text-white shadow-lift transition hover:bg-iris hover:shadow-soft motion-safe:hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-iris focus-visible:ring-offset-2 focus-visible:ring-offset-cream"
              style={{ fontFamily: "'Onest', sans-serif" }}
            >
              Book a free demo
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
            <span className="text-sm text-slate2" style={{ fontFamily: "'Onest', sans-serif" }}>
              {String(FEATURES.length).padStart(2, "0")} modules, one price
            </span>
          </div>
        </Reveal>
      </section>

      {/* MODULE BOARD */}
      <section className="px-4 py-9 md:py-14 pb-16">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-4 md:grid-cols-2">
          {FEATURES.map((f, i) => {
            const edge = EDGES[i % EDGES.length];
            const peek = (f.capabilities ?? []).slice(0, 3);
            
            // Custom image positioning for specific modules - PULLED FURTHER DOWN
            const getImagePosition = (slug) => {
              const positions = {
                "academic-coach-portal": "object-bottom object-[center_bottom]",
                "supervisor-portal": "object-bottom object-[center_bottom]",
                "teacher-portal": "object-center",
                "student-portal": "object-center",
                "admin-portal": "object-center",
                "live-classes": "object-center",
                "billing-finance": "object-center",
                "assessments-rankings": "object-center",
                "messaging": "object-center",
                "analytics-reports": "object-center",
                "security-compliance": "object-center",
              };
              return positions[slug] || "object-center";
            };

            const imagePosition = getImagePosition(f.slug);

            return (
              <Reveal
                key={f.slug}
                as={Link}
                href={`/features/${f.slug}`}
                delay={(i % 2) * 70}
                className={`group relative rounded-2xl bg-gradient-to-br p-px shadow-lift transition duration-300 hover:shadow-soft motion-safe:hover:-translate-y-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-iris focus-visible:ring-offset-4 focus-visible:ring-offset-cream ${edge}`}
              >
                <div className="flex h-full flex-col overflow-hidden rounded-[inherit] bg-white/90 backdrop-blur-xl">
                  {/* Image band - Full fitted image with custom positioning */}
                  <div className="relative w-full shrink-0 overflow-hidden" style={{ height: '250px' }}>
                    <div className="absolute inset-0 overflow-hidden">
                      <img
                        src={f.image}
                        alt={f.title}
                        className={`w-full h-[150%] object-cover ${imagePosition}`}
                        style={{
                          transform: f.slug === "academic-coach-portal" || f.slug === "supervisor-portal" 
                            ? 'translateY(0%)' 
                            : 'translateY(0)'
                        }}
                        loading="lazy"
                      />
                    </div>
                    <span
                      aria-hidden="true"
                      className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/10 to-transparent"
                    />
                   
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

      {/* CTA */}
      <section className="px-4 pb-16 md:pb-20">
        <Reveal className="mx-auto max-w-6xl">
          <div className="rounded-2xl bg-gradient-to-br from-white via-iris/35 to-sky1/60 p-px shadow-soft">
            <div className="relative overflow-hidden rounded-[inherit] bg-white/85 px-8 py-12 text-center backdrop-blur-xl md:px-14">
              <span
                aria-hidden="true"
                className="pointer-events-none absolute -top-24 left-1/2 h-64 w-[32rem] -translate-x-1/2 rounded-full bg-iris/20 blur-[100px]"
              />
              <h2 
                className="relative text-3xl tracking-tight text-ink md:text-4xl"
                style={{ fontFamily: "'Onest', sans-serif", fontWeight: 400 }}
              >
                See all eight live
              </h2>
              <p className="relative mx-auto mt-3 max-w-lg text-[15px] text-slate2 md:text-base">
                Book a 30-minute walkthrough and we&apos;ll demo the modules
                that matter to your academy, with your real workflow.
              </p>
              <Link
                href="/book-demo"
                className="group relative mt-7 inline-flex items-center gap-2 rounded-full bg-ink px-7 py-3.5 text-[15px] font-medium text-white shadow-lift transition hover:bg-iris hover:shadow-soft motion-safe:hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-iris focus-visible:ring-offset-2 focus-visible:ring-offset-cream"
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
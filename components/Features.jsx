import Link from "next/link";
import { FEATURES } from "@/lib/siteData";
import { ArrowRight, Sparkles } from "lucide-react";

export default function Features() {
  // Rounded corner variation only — no clip-path polygons on the image itself.
  // Polygons on an inset rectangular div leave the cut corner exposing the
  // white card behind it; matching the image's own rounding to the card's
  // rounding keeps every edge flush with no visible gap.
  const cardStyles = [
    "rounded-3xl",
    "rounded-2xl",
    "rounded-xl",
    "rounded-lg",
  ];

  return (
    <section id="features" className="relative overflow-hidden px-4 py-16 md:py-24">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-cream/50 via-transparent to-transparent" />
      <div className="absolute -right-40 -top-40 h-96 w-96 rounded-full bg-iris/5 blur-3xl" />
      <div className="absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-violet-400/5 blur-3xl" />

      <div className="mx-auto max-w-6xl">
        {/* Heading — centered badge, tighter/safer type scale so nothing
            overflows or wraps awkwardly on mobile */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="eyebrow  ">Our features</p>
          <h2 className="mt-5 text-balance text-3xl font-light leading-[1.2] tracking-tight sm:text-4xl md:text-5xl">
            Everything to{" "}
      
              run
         
            &{" "}
            <span className=" bg-clip-text text-iris">
              grow
            </span>{" "}
            your academy
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-slate2 md:text-lg">
            No stitched-together tools. Every module ships in one platform and
            works together out of the box.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {FEATURES.map((f, index) => {
            const style = cardStyles[index % cardStyles.length];
            const verticalOffset = index % 2 === 0 ? "mt-0" : "mt-6 lg:mt-10";

            return (
              <Link
                key={f.slug}
                href={`/features/${f.slug}`}
                className={`group relative block transition-all duration-500 hover:-translate-y-2 ${verticalOffset}`}
              >
                <div
                  className={`relative overflow-hidden bg-white shadow-lg transition-all duration-500 hover:shadow-2xl hover:shadow-iris/20 ${style}`}
                >
                  {/* Image — fills the box completely, corners inherit the
                      card's own rounding via overflow-hidden on the parent
                      (no separate clip-path, so no exposed background) */}
                  <div className="relative aspect-[4/3] w-full overflow-hidden">
                    <img
                      src={f.image}
                      alt={f.title}
                      className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                      loading="lazy"
                    />

                    {/* Legibility gradient for the badge */}
                    <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-ink/10 to-transparent opacity-60 transition-opacity duration-500 group-hover:opacity-30" />

                    {/* Inside-out color reveal — pure opacity fade, so it
                        never exposes anything behind the image */}
                    <div className="absolute inset-0 bg-gradient-to-br from-iris via-iris/90 to-violet-600 opacity-0 mix-blend-multiply transition-opacity duration-500 group-hover:opacity-25" />

                    {/* Index badge */}
                    <div className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-white/95 text-sm font-bold text-iris backdrop-blur-sm transition-all duration-500 group-hover:scale-110 group-hover:bg-iris group-hover:text-white">
                      {String(index + 1).padStart(2, "0")}
                    </div>
                  </div>

                  <div className="relative p-5">
                    <div className="absolute left-5 top-0 h-0.5 w-8 bg-gradient-to-r from-iris to-transparent transition-all duration-500 group-hover:w-14" />

                    <h3 className="mt-3 text-lg font-bold text-ink transition-colors duration-300 group-hover:text-iris">
                      {f.title}
                    </h3>
                    <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-slate2">
                      {f.summary}
                    </p>

                    <span className="mt-4 inline-flex items-center gap-2 rounded-full bg-iris/10 px-4 py-2 text-sm font-semibold text-iris transition-all duration-300 group-hover:gap-3 group-hover:bg-iris group-hover:px-5 group-hover:text-white">
                      Explore
                      <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                    </span>
                  </div>

                  <div
                    className="pointer-events-none absolute inset-0 rounded-[inherit] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                    style={{
                      background:
                        "radial-gradient(circle at 50% 50%, rgba(99, 102, 241, 0.06), transparent 70%)",
                    }}
                  />
                </div>
              </Link>
            );
          })}
        </div>

        <div className="mt-20 text-center">
          <Link
            href="/features"
            className="group inline-flex items-center gap-3 rounded-full bg-black px-10 py-4 font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-black/30"
          >
            Explore all features
            <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}
import Reveal from "./Reveal";
import BackgroundAccent from "./BackgroundAccent";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "We cut admin work to a quarter of what it was. Trials, invoices and reschedules that took hours now run themselves.",
    name: "Imran Gowri",
    role: "Director, Al Furqan Academy",
    photo:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=100&q=60",
    rating: 5,
  },
  {
    quote:
      "Teacher payouts and multi-currency invoicing used to be our biggest headache. Now it's a dashboard we barely think about.",
    name: "Sarah Mitchell",
    role: "Operations Lead, BrightPath Tutors",
    photo:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=100&q=60",
    rating: 5,
  },
  {
    quote:
      "The custom roles are the killer feature. Our coaches, supervisors and staff each see exactly what they need — nothing more.",
    name: "Ahmed Tariq",
    role: "Founder, Ilm Institute",
    photo:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=100&q=60",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative overflow-hidden px-4 py-10 md:py-18">
      <BackgroundAccent variant="grid" className="opacity-40" />

      <div className="mx-auto max-w-6xl">
        <Reveal as="div" className="mx-auto max-w-xl text-center">
          <span className="eyebrow">
            Testimonials
          </span>
          <h2 className="mt-3 text-3xl leading-tight tracking-tight md:text-5xl">
            Find out why <span className="">500+</span> academies{" "}
            <span className="">trust</span> us
          </h2>
          <p className="mt-4 text-[15px] text-slate2">
            Real stories from real academies who transformed their operations
          </p>
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal
              key={t.name}
              delay={i * 130}
              y={30}
              as="figure"
              className="group relative flex flex-col rounded-2xl border border-ink/8 bg-white/80 p-7 shadow-lg backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              {/* Quote icon */}
              <Quote className="absolute -top-3 left-6 h-8 w-8 text-iris/10 transition-colors duration-300 group-hover:text-iris/20" />

              {/* Rating stars */}
              <div className="mb-4 flex gap-0.5">
                {[...Array(5)].map((_, idx) => (
                  <Star
                    key={idx}
                    className={`h-4 w-4 ${
                      idx < t.rating
                        ? "fill-amber-400 text-amber-400"
                        : "text-ink/10"
                    }`}
                  />
                ))}
              </div>

              <blockquote className="relative flex-1 font-display text-base leading-relaxed text-ink/90">
                &ldquo;{t.quote}&rdquo;
              </blockquote>

              <figcaption className="mt-6 flex items-center gap-3 border-t border-ink/5 pt-5">
                <div className="relative">
                  <img
                    src={t.photo}
                    alt={t.name}
                    className="h-12 w-12 rounded-full object-cover ring-2 ring-iris/10 transition duration-300 group-hover:ring-iris/30"
                    loading="lazy"
                  />
                  <div className="absolute -bottom-0.5 -right-0.5 h-3.5 w-3.5 rounded-full bg-emerald-400 ring-2 ring-white" />
                </div>
                <span className="flex flex-col">
                  <span className="text-sm font-bold text-ink">{t.name}</span>
                  <span className="text-xs text-slate2">{t.role}</span>
                </span>
              </figcaption>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
}
import Reveal from "./Reveal";
import { Calendar, Settings, Rocket } from "lucide-react";

const steps = [
  {
    n: "01",
    title: "Book your demo",
    desc: "Pick a slot that suits you. We walk you through the platform on a live call — no slides, real product.",
    icon: Calendar,
  },
  {
    n: "02",
    title: "Customize your workspace",
    desc: "We help you set up roles, packages, courses and branding so the platform matches how your academy runs.",
    icon: Settings,
  },
  {
    n: "03",
    title: "Go live with your academy",
    desc: "Invite teachers and students, connect payments and video tools, and run your first live class the same week.",
    icon: Rocket,
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="relative px-4 py-10 md:py-14">
      <div className="mx-auto max-w-6xl">
        <Reveal as="div" className="mx-auto max-w-xl text-center">
          <span className="mx-auto inline-flex items-center gap-2 rounded-full border border-white/80 bg-white/70 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-slate2 shadow-lift backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-[#6E93E0]" />
          How It Works
          </span>
          <h2 
            className="mt-3 text-3xl leading-tight tracking-tight md:text-5xl"
            style={{ fontFamily: "'Onest', sans-serif", fontWeight: 500 }}
          >
            Reduce admin Increase{" "}
            <span className="">results</span>.
          </h2>
          <p className="mt-4 text-sm text-slate2 md:text-base">
            From first demo to first class in three steps.
          </p>
        </Reveal>

        <div className="relative mt-12 grid gap-5 md:grid-cols-3">
          {/* Connecting line — meaningful because these steps are a real sequence */}
          <div
            aria-hidden
            className="absolute left-0 right-0 top-14 hidden h-px overflow-hidden md:block"
          >
            <Reveal
              delay={200}
              as="div"
              className="connector-line h-full w-full bg-gradient-to-r from-transparent via-iris/30 to-transparent"
            />
          </div>

          {steps.map((s, i) => {
            const Icon = s.icon;
            
            return (
              <Reveal
                key={s.n}
                delay={i * 140}
                y={30}
                as="article"
                className="group relative rounded-blob bg-step-fade p-8 shadow-lift transition-all duration-300 hover:-translate-y-1 hover:shadow-soft"
              >
                <div className="flex items-start justify-between">
                  <p 
                    className="font-display text-5xl italic text-iris/30 transition-colors duration-300 group-hover:text-iris/60"
                    style={{ fontFamily: "'Onest', sans-serif" }}
                  >
                    {s.n}
                  </p>
                  
                  {/* Icon */}
                  <div className="rounded-xl bg-white/60 p-2.5 shadow-sm transition-all duration-300 group-hover:scale-110 group-hover:bg-white group-hover:shadow-md">
                    <Icon className="h-4 w-4 text-iris" />
                  </div>
                </div>

                <h3 
                  className="mt-5 text-lg font-bold text-ink"
                  style={{ fontFamily: "'Onest', sans-serif" }}
                >
                  {s.title}
                </h3>
                <p className="mt-2 text-md leading-relaxed text-slate2">
                  {s.desc}
                </p>

               
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
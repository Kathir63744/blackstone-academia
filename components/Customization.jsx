"use client";

import { useState } from "react";
import Reveal from "./Reveal";
import BackgroundAccent from "./BackgroundAccent";
import { Shield, Package, Palette, ChevronRight, Check } from "lucide-react";

const tabs = [
  {
    key: "roles",
    label: "Roles & permissions",
    title: "Design your own hierarchy",
    icon: Shield,
    points: [
      "Create unlimited custom roles and permission groups",
      "Grant or revoke access per module, per action",
      "Give each role its own dashboard and menu",
    ],
  },
  {
    key: "packages",
    label: "Student packages",
    title: "Package rules you control",
    icon: Package,
    points: [
      "Define plans like Simple, Essential, Elite and Pro",
      "Set rescheduling & cancellation rights per package",
      "Attach courses, session counts to each plan",
    ],
  },
  {
    key: "branding",
    label: "Branding & workflows",
    title: "Make it feel like yours",
    icon: Palette,
    points: [
      "Your logo, colors and domain across every portal",
      "Custom email & invoice templates",
      "Configurable notification rules and reminders",
    ],
  },
];

export default function Customization() {
  const [active, setActive] = useState(tabs[0].key);
  const current = tabs.find((t) => t.key === active);

  return (
    <section className="relative overflow-hidden px-4 py-11 md:py-14">
      <BackgroundAccent variant="grid" className="opacity-40" />
      <Reveal className="mx-auto max-w-6xl rounded-2xl border border-white/80 bg-white/80 p-8 shadow-lg backdrop-blur-sm transition-shadow duration-500 hover:shadow-xl md:p-12">
        <div className="grid items-start gap-12 md:grid-cols-2">
          {/* Left Column */}
          <div>
            <div className="flex items-center gap-2.5">
              <span className="h-8 w-1 rounded-full bg-gradient-to-b from-iris to-indigo-400" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-slate2">
                Fully customizable
              </span>
            </div>

            <h2 className="mt-4 text-3xl leading-tight tracking-tight text-ink md:text-4xl">
              Every control, <span className="text-iris">your</span> rules
            </h2>

            <p className="mt-4 max-w-md text-sm leading-relaxed text-slate2">
              Blackstone Academia isn&apos;t one-size-fits-all. Admins can reshape roles,
              packages, portals and workflows from the settings panel — no code,
              no support tickets.
            </p>

            {/* Tab Buttons */}
            <div className="mt-8 flex flex-wrap gap-2">
              {tabs.map((t) => {
                const isActive = active === t.key;
                const Icon = t.icon;
                
                return (
                  <button
                    key={t.key}
                    onClick={() => setActive(t.key)}
                    className={`group flex items-center gap-2 rounded-full px-5 py-2.5 text-xs font-semibold transition-all duration-300 ${
                      isActive
                        ? "bg-gradient-to-r from-ink to-ink/90 text-white shadow-lg shadow-ink/20"
                        : "bg-white/70 text-slate2 hover:-translate-y-0.5 hover:bg-white hover:text-ink hover:shadow-md"
                    }`}
                  >
                    <Icon className={`h-3.5 w-3.5 transition-colors duration-300 ${
                      isActive ? "text-white/80" : "text-slate2 group-hover:text-ink"
                    }`} />
                    {t.label}
                    {isActive && (
                      <ChevronRight className="h-3 w-3 text-white/60" />
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right Column - Fixed Height Content Card */}
          <div className="relative">
            <div className="rounded-2xl bg-gradient-to-br from-sky1/90 via-white/90 to-cream/90 p-7 shadow-lg shadow-ink/5 transition-all duration-500 hover:shadow-xl md:p-9 h-[320px] flex flex-col overflow-hidden">
              <div className="flex-1 flex flex-col">
                {/* Icon header */}
                <div className="flex items-center gap-3 flex-shrink-0">
                  <div className="rounded-xl bg-gradient-to-br from-iris/10 to-indigo-400/10 p-2.5">
                    <current.icon className="h-6 w-6 text-iris" />
                  </div>
                  <h3 className="font-display text-xl font-semibold text-ink">
                    {current.title}
                  </h3>
                </div>

                <div className="mt-6 h-px w-full bg-gradient-to-r from-iris/20 via-iris/40 to-iris/20 flex-shrink-0" />

                <ul className="mt-6 space-y-4 flex-1 overflow-y-auto">
                  {current.points.map((p) => (
                    <li 
                      key={p} 
                      className="group flex items-start gap-3 text-md leading-relaxed text-ink/80 transition-colors duration-200 hover:text-ink"
                    >
                      <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-gradient-to-r from-iris to-indigo-500 text-iris shadow-sm shadow-iris/30 transition-transform duration-300 group-hover:scale-110">
                        <Check className="h-3 w-3" />
                      </span>
                      {p}
                    </li>
                  ))}
                </ul>

                {/* Decorative gradient dots - fixed at bottom */}
                <div className="mt-6 flex items-center gap-2 border-t border-ink/5 pt-5 flex-shrink-0">
                  <span className="h-1.5 w-1.5 rounded-full bg-iris/50" />
                  <span className="h-1.5 w-1.5 rounded-full bg-iris/30" />
                  <span className="h-1.5 w-1.5 rounded-full bg-iris/15" />
                  <span className="ml-auto text-[10px] font-medium uppercase tracking-wider text-slate2">
                    {active === "roles" && "Access control"}
                    {active === "packages" && "Plan management"}
                    {active === "branding" && "White-label"}
                  </span>
                </div>
              </div>
            </div>

            {/* Decorative accent */}
            <div className="absolute -right-4 -top-4 h-24 w-24 rounded-full bg-gradient-to-br from-iris/5 to-indigo-400/5 blur-2xl -z-10" />
          </div>
        </div>
      </Reveal>
    </section>
  );
}
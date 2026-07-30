import Link from "next/link";
import Reveal from "@/components/Reveal";
import { ArrowRight, Check, Star } from "lucide-react";
import React from "react";

/**
 * Plans live here rather than in siteData so pricing can be edited without
 * touching the shared data file. Move them across if you'd rather have one
 * source of truth.
 *
 * @typedef {{
 *   name: string,
 *   price: string,
 *   unit: string,
 *   blurb: string,
 *   seats: string,
 *   features: string[],
 *   cta: string,
 *   href: string,
 *   featured?: boolean
 * }} Plan
 */

/** @type {Plan[]} */
const PLANS = [
  {
    name: "Basic",
    price: "₹4,999",
    unit: "per month",
    blurb: "For a single academy finding its feet.",
    seats: "Up to 150 students",
    features: [
      "Student and teacher portals",
      "Timetables and attendance",
      "Assignment submissions",
      "Email support",
    ],
    cta: "Start with Basic",
    href: "/book-demo",
  },
  {
    name: "Standard",
    price: "₹9,999",
    unit: "per month",
    blurb: "For academies running several batches at once.",
    seats: "Up to 500 students",
    features: [
      "Everything in Basic",
      "Live classes and recordings",
      "Fee plans and automated reminders",
      "Assessments and report cards",
      "Priority email and chat support",
    ],
    cta: "Choose Standard",
    href: "/book-demo",
    featured: true,
  },
  {
    name: "Premium",
    price: "₹18,999",
    unit: "per month",
    blurb: "For multi-branch groups that need the full picture.",
    seats: "Up to 2,000 students",
    features: [
      "Everything in Standard",
      "Multi-branch management",
      "Analytics and risk flags",
      "Role-based access and audit logs",
      "Named account manager",
    ],
    cta: "Choose Premium",
    href: "/book-demo",
  },
  {
    name: "Custom",
    price: "Let's talk",
    unit: "tailored quote",
    blurb: "For institutions with their own rules to follow.",
    seats: "Unlimited students",
    features: [
      "Everything in Premium",
      "Custom integrations and imports",
      "Single sign-on and data residency",
      "Onboarding and staff training",
      "Service level agreement",
    ],
    cta: "Talk to us",
    href: "/contact",
  },
];

export default function Plans() {
  return (
    <section className="px-4 py-16 md:py-24">
      <div className="mx-auto max-w-6xl">
        {/* header */}
        <Reveal className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <span className="eyebrow justify-center text-center ">
              Subscription plans
            </span>
            <h2 className="mt-3 font-display text-3xl leading-[1.1] tracking-tight text-ink md:text-4xl">
              One platform. <span className="">Four</span> ways to
              pay for it.
            </h2>
          </div>
          <p className="max-w-[34ch] text-[15px] text-slate2 md:text-right">
            Every plan includes all eight modules. What changes is how many
            students you carry and how much support you get.
          </p>
        </Reveal>

        {/* plans */}
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {PLANS.map((plan, i) => (
            <Reveal
              key={plan.name}
              as="article"
              delay={(i % 4) * 70}
              className={`relative flex flex-col rounded-blob border bg-white p-6 shadow-lift transition duration-300 hover:shadow-soft motion-safe:hover:-translate-y-1 md:p-7 ${
                plan.featured
                  ? "border-iris/50 ring-1 ring-iris/30 pt-9"
                  : "border-ink/10"
              }`}
            >
              {plan.featured && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-black px-4 py-1 text-[9px] font-semibold uppercase tracking-[0.16em] text-white shadow-lg shadow-iris/25">
                  <span className="flex items-center gap-1.5">
                    
                    Most chosen
                  </span>
                </div>
              )}

              <div className="flex flex-1 flex-col">
                <h3 className="font-display text-xl text-ink">{plan.name}</h3>
                <p className="mt-1.5 min-h-[2.75rem] text-[13.5px] leading-relaxed text-slate2">
                  {plan.blurb}
                </p>

                <p className="mt-5 font-display text-3xl leading-none text-ink">
                  {plan.price}
                </p>
                <p className="mt-1.5 text-[12.5px] text-slate2">{plan.unit}</p>

                <p className="mt-4 rounded-xl bg-sky1/40 px-3 py-2 text-[12.5px] font-medium text-ink">
                  {plan.seats}
                </p>

                <ul className="mt-5 space-y-2.5">
                  {plan.features.map((f) => (
                    <li
                      key={f}
                      className="flex items-start gap-2.5 text-[14px] leading-relaxed text-ink"
                    >
                      <Check className="mt-[3px] h-3.5 w-3.5 shrink-0 text-iris" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>

              <Link
                href={plan.href}
                className={`group mt-7 inline-flex w-full items-center justify-center gap-2 rounded-full px-6 py-3.5 text-[14.5px] font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-iris focus-visible:ring-offset-2 focus-visible:ring-offset-white ${
                  plan.featured
                    ? "bg-ink text-white hover:bg-iris"
                    : "border border-ink/15 text-ink hover:border-iris/40 hover:text-iris"
                }`}
              >
                {plan.cta}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </Reveal>
          ))}
        </div>

        <Reveal
          as="p"
          className="mt-6 text-center text-[13px] text-slate2"
        >
          Prices exclude GST. Annual billing takes two months off every plan.
          Moving between plans is instant, and nothing is locked in.
        </Reveal>
      </div>
    </section>
  );
}
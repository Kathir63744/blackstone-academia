import Link from "next/link";
import { IMAGES } from "@/lib/siteData";
import Reveal from "./Reveal";
import BackgroundAccent from "./BackgroundAccent";
import { Users, Shield, UserCog, GraduationCap } from "lucide-react";

const roles = [
  { name: "Super Admin", desc: "Full control of platform, analytics and finance.", icon: Shield },
  { name: "Admin & Staff", desc: "Daily operations, invoices and reports.", icon: Users },
  { name: "Academic Coach", desc: "Trials, class assignment, rescheduling.", icon: GraduationCap },
  { name: "Supervisor", desc: "Teacher hiring, training and feedback.", icon: UserCog },
];

export default function About() {
  return (
    <section id="about" className="relative overflow-hidden px-4 py-20 md:py-28">
      <BackgroundAccent variant="diagonal" />

      <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2">
        {/* Photo card */}
        <Reveal y={30} className="relative">
          <div className="group overflow-hidden rounded-2xl border border-white/80 bg-white/85 shadow-soft backdrop-blur transition-shadow duration-500 hover:shadow-lift">
            <div className="overflow-hidden">
              <img
                src={IMAGES.aboutFounder}
                alt="Academy team collaborating"
                className="aspect-[4/3] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                loading="lazy"
              />
            </div>
            <div className="grid grid-cols-2 gap-3 p-5">
              {roles.map((r, i) => (
                <Reveal
                  key={r.name}
                  delay={150 + i * 80}
                  as="div"
                  className="group/role rounded-xl bg-mist p-4 transition-all duration-300 hover:bg-white hover:shadow-lift"
                >
                  <div className="flex items-center gap-2">
                    <r.icon className="h-4 w-4 text-iris transition-colors duration-300 group-hover/role:text-ink" />
                    <p className="text-sm font-bold">{r.name}</p>
                  </div>
                  <p className="mt-1 text-xs leading-relaxed text-slate2">{r.desc}</p>
                </Reveal>
              ))}
            </div>
          </div>
          <span className="absolute -right-2 -top-2 rounded-full bg-gradient-to-r from-iris to-indigo-500 px-4 py-2 text-sm font-bold text-white shadow-lg shadow-iris/25">
            6 role portals
          </span>
        </Reveal>

        {/* Copy */}
        <Reveal delay={100} y={30}>
          <p className="eyebrow">Who we are</p>
          <h2 className="mt-4 text-4xl leading-[1.15] tracking-tight md:text-5xl">
            Manage <span className="text-iris">every</span> role,{" "}
            <span className="text-iris">without</span> the chaos
          </h2>
          <p className="mt-6 max-w-lg text-base leading-relaxed text-slate2 md:text-lg">
            Blackstone Academia is a cloud platform built for online academies
            and tuition centers. It replaces spreadsheets, WhatsApp threads and
            manual invoicing with one system where trials, classes, payments
            and progress all connect — and every role gets its own portal.
          </p>
          <ul className="mt-7 space-y-3.5 text-[15px] text-ink">
            {[
              "Role-based access control with fully custom groups & permissions",
              "Package-based student rights — rescheduling, cancellation and more",
              "Sibling accounts with combined or separate invoicing",
              "Automatic teacher replacement when leave is approved",
            ].map((item, i) => (
              <Reveal key={item} delay={200 + i * 70} as="li" className="flex items-start gap-3">
                <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-gradient-to-r from-iris to-indigo-500 text-[10px] text-iris shadow-sm shadow-iris/20">
                  ✓
                </span>
                {item}
              </Reveal>
            ))}
          </ul>
          <div className="mt-9 flex flex-wrap gap-3">
            <Link
              href="/about"
              className="rounded-full bg-ink px-8 py-3.5 text-[15px] font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-ink/85 hover:shadow-lift"
            >
              Read our full story
            </Link>
            <Link
              href="/book-demo"
              className="rounded-full border border-ink/15 bg-white/70 px-8 py-3.5 text-[15px] font-semibold text-ink transition-all duration-300 hover:-translate-y-0.5 hover:bg-white hover:shadow-lift"
            >
              Book a demo
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
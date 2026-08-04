import Link from "next/link";
import { IMAGES } from "@/lib/siteData";
import Reveal from "./Reveal";
import BackgroundAccent from "./BackgroundAccent";
import { 
  Users, 
  Shield, 
  UserCog, 
  GraduationCap, 
  BookOpen, 
  CalendarCheck, 
  Building2, 
  BarChart3 
} from "lucide-react";

const features = [
  { 
    icon: Shield, 
    title: "Role-Based Access", 
    desc: "Administrators, faculty, staff, students, parents, and alumni with customizable permissions" 
  },
  { 
    icon: GraduationCap, 
    title: "Student Lifecycle", 
    desc: "From admissions and enrollment to graduation, transcripts, and alumni engagement" 
  },
  { 
    icon: BookOpen, 
    title: "Academic Management", 
    desc: "Course registration, timetables, attendance, examinations, grading, and learning" 
  },
  { 
    icon: Building2, 
    title: "Finance & Operations", 
    desc: "Online fee collection, HR & payroll, library, hostel, transport, and analytics" 
  },
];

export default function About() {
  return (
    <section id="about" className="relative overflow-hidden px-4 py-20 md:py-28">
      <BackgroundAccent variant="diagonal" />

      <div className="mx-auto grid max-w-6xl items-start gap-12 lg:grid-cols-2">
        {/* Photo card with feature grid */}
        <Reveal y={30} className="relative">
          <div className="group overflow-hidden rounded-2xl border border-white/80 bg-white/85 shadow-soft backdrop-blur transition-shadow duration-500 hover:shadow-lift">
            <div className="overflow-hidden">
              <img
                src={IMAGES.aboutFounder}
                alt="University campus management"
                className="aspect-[4/3] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                loading="lazy"
              />
            </div>
            <div className="grid grid-cols-2 gap-3 p-5">
              {features.map((feature, i) => (
                <Reveal
                  key={feature.title}
                  delay={150 + i * 80}
                  as="div"
                  className="group/feature rounded-xl bg-mist p-4 transition-all duration-300 hover:bg-white hover:shadow-lift"
                >
                  <div className="flex items-center gap-2">
                    <feature.icon className="h-4 w-4 text-iris transition-colors duration-300 group-hover/feature:text-ink" />
                    <p className="text-sm font-bold leading-tight">{feature.title}</p>
                  </div>
                  <p className="mt-1 text-xs leading-relaxed text-slate2">{feature.desc}</p>
                </Reveal>
              ))}
            </div>
          </div>
          
        </Reveal>

        {/* Copy */}
        <Reveal delay={100} y={30}>
          <span className="inline-flex items-center gap-2 rounded-full border border-ink/10 bg-white/70 px-4 py-1.5 text-[12px] font-medium uppercase tracking-[0.22em] text-slate2 backdrop-blur">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-iris/70" />
              <span className="eyebrow" />
            </span>
            Who we are
          </span>
          <h2 className="mt-4 text-3xl leading-[1.15] tracking-tight md:text-4xl lg:text-5xl">
  Empowering <span className="text-iris">education</span> 
  <br />through innovation
</h2>
          <p className="mt-6 max-w-lg text-[16px] leading-relaxed text-slate2 md:text-[17px]">
            Blackstone Academia empowers universities to digitally manage every aspect 
            of campus life through a secure, scalable, and intelligent platform. 
            From admissions and academics to examinations, finance, faculty management, 
            and student services, everything is connected in one centralized system 
            designed for modern higher education institutions.
          </p>
          <ul className="mt-7 space-y-5 text-[16px] text-ink">
            {[
              "Role-based access for administrators, faculty, staff, students, parents, and alumni with customizable permissions",
              "End-to-end student lifecycle management from admissions and enrollment to graduation, transcripts, and alumni engagement",
              "Integrated academic management including course registration, timetables, attendance, examinations, grading, and learning management",
              "Centralized finance and campus operations with online fee collection, HR & payroll, library, hostel, transport, and real-time analytics",
            ].map((item, i) => (
              <Reveal key={item} delay={200 + i * 70} as="li" className="flex items-start gap-3">
                <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-gradient-to-r from-iris to-indigo-500 text-[10px] text-iris shadow-sm shadow-iris/20">
                  ✓
                </span>
                <span className="text-sm leading-relaxed">{item}</span>
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
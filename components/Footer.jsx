import Reveal from "./Reveal";

const columns = [
  {
    heading: "Explore",
    links: [
      ["Features", "/features"],
      ["How it works", "/#how-it-works"],
      ["Testimonials", "/#testimonials"],
      ["Book a demo", "/book-demo"],
    ],
  },
  {
    heading: "Modules",
    links: [
      ["Student portal", "/features/student-portal"],
      ["Live classes", "/features/live-classes"],
      ["Billing & finance", "/features/billing-finance"],
      ["Security", "/features/security-compliance"],
    ],
  },
  {
    heading: "Company",
    links: [
      ["About us", "/about"],
      ["Contact", "/book-demo"],
      ["Careers", "/about"],
    ],
  },
  {
    heading: "Legal",
    links: [
      ["Privacy policy", "#"],
      ["Terms of service", "#"],
      ["Cookie policy", "#"],
    ],
  },
];

export default function Footer() {
  return (
    <footer className="px-4 pb-8 pt-10">
      <Reveal y={20} className="mx-auto max-w-6xl rounded-blob border border-white/80 bg-white/80 p-8 shadow-lift backdrop-blur md:p-12">
        <div className="grid gap-10 md:grid-cols-[1.4fr_2fr]">
          <div>
            <a href="#top" className="flex items-center gap-2 font-bold">
              <span className="grid h-8 w-8 place-items-center rounded-full bg-ink font-display text-sm  text-white">
                B
              </span>
              <span className="text-lg">
                Blackstone <span className="accent-word">Academia</span>
              </span>
            </a>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-slate2">
              The all-in-one platform for online academies — classes, billing,
              people and progress in one place.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
            {columns.map((col) => (
              <div key={col.heading}>
                <p className="text-xs font-bold uppercase tracking-widest text-slate2">
                  {col.heading}
                </p>
                <ul className="mt-3 space-y-2">
                  {col.links.map(([label, href]) => (
                    <li key={label}>
                      <a
                        href={href}
                        className="text-sm text-ink/80 transition hover:text-ink"
                      >
                        {label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-line pt-6 text-xs text-slate2 md:flex-row">
          <p>© {new Date().getFullYear()} Blackstone Academia. All rights reserved.</p>
          <p>Made for academies, everywhere.</p>
        </div>
      </Reveal>
    </footer>
  );
}
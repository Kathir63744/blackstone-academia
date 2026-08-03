"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Reveal from "./Reveal";
import { MODULES, PLATFORM_FEATURES } from "@/lib/siteData";

/* Columns are derived from siteData, so adding a module or feature shows up
   here automatically instead of needing a second edit. */
const columns = [
  {
    heading: "Explore",
    links: [
      ["Home", "/"],
      ["About", "/about"],
      ["Modules", "/modules"],
      ["Features", "/features"],
      ["Industry", "/industry"],
      ["Book a demo", "/book-demo"],
    ],
  },
  {
    heading: "Modules",
    links: MODULES.map((m) => [m.title, `/modules/${m.slug}`]),
  },
  {
    heading: "Features",
    links: PLATFORM_FEATURES.map((f) => [f.title, `/features/${f.slug}`]),
  },
  {
    heading: "Company",
    links: [
      ["About us", "/about"],
      ["Contact", "/book-demo"],
      ["Careers", "/about"],
    ],
  },
];

const legal = [
  ["Privacy policy", "#"],
  ["Terms of service", "#"],
  ["Cookie policy", "#"],
];

export default function Footer() {
  const pathname = usePathname();

  const isActive = (href) => {
    if (href === "#") return false;
    if (href === "/") return pathname === "/";
    /* Exact match, or a section link when you're on one of its detail pages */
    return pathname === href || pathname?.startsWith(`${href}/`);
  };

  return (
    <footer className="px-4 pb-8 pt-10 sm:px-6 md:px-8">
      <Reveal
        y={20}
        className="mx-auto max-w-7xl rounded-3xl border border-white/60 bg-white/80 p-8 shadow-lift backdrop-blur md:p-12 lg:p-14"
      >
        <div className="grid gap-10 md:grid-cols-[1.1fr_2.6fr] lg:gap-12">
          {/* Left Column - Brand */}
          <div>
            <Link href="/" className="inline-flex items-center gap-2">
              <Image
                src="/logo.svg"
                alt="Blackstone Academia"
                width={120}
                height={32}
                className="h-8 w-auto object-contain"
              />
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-slate2">
              The all-in-one platform for online academies — classes, billing, people and
              progress in one place.
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              <Link
                href="/modules"
                className={`rounded-full border px-3.5 py-1.5 text-xs font-medium transition ${
                  isActive("/modules")
                    ? "border-iris/40 bg-iris/10 text-iris"
                    : "border-ink/10 text-slate2 hover:border-iris/30 hover:text-ink"
                }`}
              >
                {MODULES.length} modules
              </Link>
              <Link
                href="/features"
                className={`rounded-full border px-3.5 py-1.5 text-xs font-medium transition ${
                  isActive("/features")
                    ? "border-iris/40 bg-iris/10 text-iris"
                    : "border-ink/10 text-slate2 hover:border-iris/30 hover:text-ink"
                }`}
              >
                {PLATFORM_FEATURES.length} features
              </Link>
            </div>
          </div>

          {/* Right Column - Navigation Links */}
          <div className="grid grid-cols-2  gap-8 sm:grid-cols-4">
            {columns.map((col) => (
              <div key={col.heading}>
                {/* Heading - fixed height to align all headings */}
                <div className="h-[20px]">
                  <p className="text-xs ml-3 font-bold uppercase tracking-widest text-slate2 leading-none">
                    {col.heading}
                  </p>
                </div>
                
                {/* Links - all start from same position */}
                <ul className="mt-3 space-y-2.5">
                  {col.links.map(([label, href]) => {
                    const active = isActive(href);
                    return (
                      <li key={`${col.heading}-${label}`}>
                        <Link
                          href={href}
                          aria-current={active ? "page" : undefined}
                          className={`group inline-flex items-center gap-1.5 text-sm transition ${
                            active
                              ? "font-medium text-iris"
                              : "text-ink/80 hover:translate-x-0.5 hover:text-ink"
                          }`}
                        >
                          <span
                            aria-hidden="true"
                            className={`h-1.5 w-1.5 rounded-full transition flex-shrink-0 ${
                              active ? "bg-iris" : "bg-transparent"
                            }`}
                          />
                          {label}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-line pt-6 text-xs text-slate2 md:flex-row">
          <p>© {new Date().getFullYear()} Blackstone Academia. All rights reserved.</p>
          <ul className="flex flex-wrap items-center gap-5">
            {legal.map(([label, href]) => (
              <li key={label}>
                <Link href={href} className="transition hover:text-ink">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Reveal>
    </footer>
  );
}
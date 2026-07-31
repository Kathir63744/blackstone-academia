"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const links = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Modules", href: "/modules" },
  { label: "Features", href: "/features" },
  { label: "Industry", href: "/industry" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => setOpen(false), [pathname]);

  const isActive = (href) => (href === "/" ? pathname === "/" : pathname === href);

  return (
    <header id="top" className="sticky top-0 z-50 px-0 sm:px-6 lg:px-8">
      <nav
        className={`relative mx-auto flex max-w-7xl items-center justify-between bg-white transition-all duration-300 ${
          "px-5 py-3.5 shadow-[0_8px_24px_-14px_rgba(15,23,42,0.20)] md:px-8"
        } ${
          "rounded-none sm:rounded-b-[28px]"
        }`}
      >
        {/* Logo */}
        <Link href="/" className="flex flex-shrink-0 items-center">
          <Image
            src="/logo.svg"
            alt="Blackstone Academia"
            width={150}
            height={40}
            className="h-9 w-auto object-contain"
            priority
          />
        </Link>

        {/* Links — absolutely centred in the bar, as in the reference */}
        <ul className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-1 lg:flex">
          {links.map((l) => {
            const active = isActive(l.href);
            return (
              <li key={l.label}>
                <Link
                  href={l.href}
                  aria-current={active ? "page" : undefined}
                  className={`rounded-full px-4 py-1.5 text-[15px] font-medium transition-all duration-300 ${
                    active
                      ? "bg-sky-100 text-ink"
                      : "text-slate-500 hover:bg-slate-50 hover:text-ink"
                  }`}
                >
                  {l.label}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Book a demo */}
        <div className="hidden flex-shrink-0 items-center lg:flex">
          <Link
            href="/book-demo"
            className="rounded-full bg-ink px-6 py-2.5 text-[15px] font-semibold text-white transition hover:-translate-y-0.5 hover:bg-ink/85 hover:shadow-lift"
          >
            Book a demo
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          className="grid h-10 w-10 flex-shrink-0 place-items-center rounded-full border border-line lg:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <span className="text-lg leading-none">{open ? "✕" : "☰"}</span>
        </button>
      </nav>

      {/* Mobile menu - full width */}
      {open && (
        <div className="mx-0 mt-2 rounded-none border border-white/30 bg-white/95 p-4 shadow-lift backdrop-blur-sm lg:hidden">
          {links.map((l) => {
            const active = isActive(l.href);
            return (
              <Link
                key={l.label}
                href={l.href}
                onClick={() => setOpen(false)}
                className={`block rounded-xl px-4 py-3 text-[15px] font-medium transition-all duration-300 ${
                  active ? "bg-sky-100 text-ink" : "text-slate-500 hover:text-ink"
                }`}
              >
                {l.label}
              </Link>
            );
          })}
          <Link
            href="/book-demo"
            onClick={() => setOpen(false)}
            className="mt-2 block rounded-full bg-ink px-5 py-3 text-center text-[15px] font-semibold text-white"
          >
            Book a demo
          </Link>
        </div>
      )}
    </header>
  );
}
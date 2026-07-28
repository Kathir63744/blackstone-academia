"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const links = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Features", href: "/features" },
  { label: "How it works", href: "/#how-it-works" },
  { label: "Testimonials", href: "/#testimonials" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header id="top" className="sticky top-0 z-50 px-4 pt-4">
      <nav
        className={`mx-auto flex max-w-6xl items-center justify-between rounded-full border border-white/70 bg-white/85 backdrop-blur transition-all duration-300 ${
          scrolled ? "px-4 py-2 shadow-soft" : "px-5 py-3 shadow-lift"
        }`}
      >
        <Link href="/" className="flex items-center gap-2.5 font-bold tracking-tight">
          <span className="grid h-9 w-9 place-items-center rounded-full bg-ink font-display text-base  text-white transition-transform duration-300 group-hover:scale-105">
            B
          </span>
          <span className="text-lg leading-tight">
            Blackstone <span className="accent-word">Academia</span>
          </span>
        </Link>

        <ul className="hidden items-center gap-1 lg:flex">
          {links.map((l) => (
            <li key={l.label}>
              <Link
                href={l.href}
                className="rounded-full px-4 py-2 text-[15px] font-medium text-slate2 transition hover:bg-mist hover:text-ink"
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-2 lg:flex">
          <Link
            href="/book-demo"
            className="rounded-full px-4 py-2 text-[15px] font-semibold text-ink transition hover:bg-mist"
          >
            Log in
          </Link>
          <Link
            href="/book-demo"
            className="rounded-full bg-ink px-6 py-2.5 text-[15px] font-semibold text-white transition hover:-translate-y-0.5 hover:bg-ink/85 hover:shadow-lift"
          >
            Book a demo
          </Link>
        </div>

        <button
          className="grid h-10 w-10 place-items-center rounded-full border border-line lg:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <span className="text-lg leading-none">{open ? "✕" : "☰"}</span>
        </button>
      </nav>

      {open && (
        <div className="reveal reveal-visible mx-auto mt-2 max-w-6xl rounded-blob border border-white/70 bg-white/95 p-4 shadow-lift lg:hidden">
          {links.map((l) => (
            <Link
              key={l.label}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block rounded-xl px-4 py-3 text-[15px] font-medium text-slate2 hover:bg-mist hover:text-ink"
            >
              {l.label}
            </Link>
          ))}
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
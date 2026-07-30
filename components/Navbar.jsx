"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const links = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Features", href: "/features" },
  { label: "Industry", href: "/industry" },
  { label: "How it works", href: "/#how-it-works" },
  { label: "Testimonials", href: "/#testimonials" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Check if link is active
  const isActive = (href) => {
    // For hash links (/#how-it-works, /#testimonials) - active only when on home page
    if (href.startsWith("/#")) {
      return pathname === "/";
    }
    // For exact matches
    if (href === "/") {
      return pathname === "/";
    }
    return pathname === href;
  };

  // Check if any hash link should be active (for Home tab)
  const isHomeActive = () => {
    // Home tab is active when on home page OR when viewing hash sections
    return pathname === "/" || links.some(l => l.href.startsWith("/#") && pathname === "/");
  };

  return (
    <header id="top" className="sticky top-0 z-50 px-4 pt-4">
      <nav
        className={`mx-auto flex max-w-6xl items-center justify-between rounded-full border border-white/70 bg-white/85 backdrop-blur transition-all duration-300 ${
          scrolled ? "px-4 py-2 shadow-soft" : "px-5 py-3 shadow-lift"
        }`}
      >
        <Link href="/" className="flex items-center">
          <div className="relative h-10 w-auto">
            <Image
              src="/logo.svg"
              alt="Logo"
              width={120}
              height={40}
              className="object-contain"
              priority
            />
          </div>
        </Link>

        <ul className="hidden items-center gap-1 lg:flex">
          {links.map((l) => {
            // Special case for Home - active when on home page or hash sections
            let active = false;
            if (l.href === "/") {
              active = pathname === "/";
            } else if (l.href.startsWith("/#")) {
              // Hash links are never "active" in the tab sense - they just scroll
              active = false;
            } else {
              active = pathname === l.href;
            }
            
            return (
              <li key={l.label}>
                <Link
                  href={l.href}
                  className={`rounded-full px-4 py-2 text-[15px] font-medium transition-all duration-300 ${
                    active
                      ? "bg-gradient-to-r from-sky-300/50 via-sky-200/50 to-blue-300/50 text-ink shadow-sm backdrop-blur-sm border border-white/60"
                      : "text-slate2 hover:bg-mist hover:text-ink"
                  }`}
                >
                  {l.label}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="hidden items-center gap-2 lg:flex">
          
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
          {links.map((l) => {
            let active = false;
            if (l.href === "/") {
              active = pathname === "/";
            } else if (l.href.startsWith("/#")) {
              active = false;
            } else {
              active = pathname === l.href;
            }
            
            return (
              <Link
                key={l.label}
                href={l.href}
                onClick={() => setOpen(false)}
                className={`block rounded-xl px-4 py-3 text-[15px] font-medium transition-all duration-300 ${
                  active
                    ? "bg-gradient-to-r from-sky-300/50 via-sky-200/50 to-blue-300/50 text-ink shadow-sm backdrop-blur-sm border border-white/60"
                    : "text-slate2 hover:bg-mist hover:text-ink"
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
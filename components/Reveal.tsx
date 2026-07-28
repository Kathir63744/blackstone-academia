"use client";

import React from "react";
import {
  useEffect,
  useRef,
  useState,
  type ElementType,
  type ComponentPropsWithoutRef,
  type ReactNode,
  type CSSProperties,
} from "react";

type RevealOwnProps<T extends ElementType> = {
  children: ReactNode;
  delay?: number;
  y?: number;
  eager?: boolean;
  as?: T;
  className?: string;
};

// Merge our own props with whatever props the underlying tag/component
// accepts (href for Link, onClick for button, etc.), minus the ones we
// already declare ourselves so TS doesn't fight over `as`/`className`.
type RevealProps<T extends ElementType> = RevealOwnProps<T> &
  Omit<ComponentPropsWithoutRef<T>, keyof RevealOwnProps<T>>;

/**
 * Reveal — fades + lifts children into view.
 *
 * - Default: triggers once via IntersectionObserver as the element scrolls
 *   into the viewport (used for anything below the fold).
 * - `eager`: triggers on mount instead (used for above-the-fold hero content
 *   so it animates in on page load rather than waiting for a scroll event).
 * - Respects prefers-reduced-motion via the .reveal / .reveal-visible CSS
 *   pair — see reveal.css.
 *
 * Usage:
 *   <Reveal delay={80}><Card /></Reveal>
 *   <Reveal as="li" delay={i * 60}>...</Reveal>
 *   <Reveal as={Link} href="/features">...</Reveal>
 */
export default function Reveal<T extends ElementType = "div">({
  children,
  delay = 0,
  y = 24,
  eager = false,
  as,
  className = "",
  style: callerStyle,
  ...rest
}: RevealProps<T>) {
  const Tag = (as || "div") as ElementType;
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (eager) {
      const raf = requestAnimationFrame(() => setVisible(true));
      return () => cancelAnimationFrame(raf);
    }
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          io.unobserve(el);
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -60px 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const style: CSSProperties = {
    transitionDelay: visible ? `${delay}ms` : "0ms",
    ["--reveal-y" as string]: `${y}px`,
    ...callerStyle,
  };

  return (
    <Tag
      ref={ref}
      className={`reveal ${visible ? "reveal-visible" : ""} ${className}`}
      style={style}
      {...rest}
    >
      {children}
    </Tag>
  );
}
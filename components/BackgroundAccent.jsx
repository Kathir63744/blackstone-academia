import React from "react";

/**
 * BackgroundAccent — subtle decorative layer sat behind a section's content
 * (absolute, -z-10, pointer-events-none). Three variants so sections don't
 * all look identical, but the vocabulary — thin gradient-faded lines, soft
 * blurred orbs, a masked dot/grid field — stays consistent site-wide.
 *
 * Usage: place as the first child of a `relative` section.
 *   <section className="relative ...">
 *     <BackgroundAccent variant="diagonal" />
 *     ...
 *   </section>
 */
export default function BackgroundAccent({ variant = "diagonal", className = "" }) {
  if (variant === "diagonal") {
    return (
      <svg
        aria-hidden="true"
        className={`pointer-events-none absolute inset-0 -z-10 h-full w-full ${className}`}
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="bg-diag-fade" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#6E93E0" stopOpacity="0" />
            <stop offset="50%" stopColor="#6E93E0" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#6E93E0" stopOpacity="0" />
          </linearGradient>
        </defs>
        <line x1="0" y1="18%" x2="100%" y2="-2%" stroke="url(#bg-diag-fade)" strokeWidth="1" />
        <line x1="0" y1="62%" x2="100%" y2="34%" stroke="url(#bg-diag-fade)" strokeWidth="1" />
        <line x1="8%" y1="102%" x2="92%" y2="72%" stroke="url(#bg-diag-fade)" strokeWidth="1" />
      </svg>
    );
  }

  if (variant === "grid") {
    return (
      <div
        aria-hidden="true"
        className={`pointer-events-none absolute inset-0 -z-10 ${className}`}
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(99,102,241,0.07) 1px, transparent 1px), linear-gradient(to bottom, rgba(99,102,241,0.07) 1px, transparent 1px)",
          backgroundSize: "46px 46px",
          maskImage: "radial-gradient(ellipse at center, black 0%, transparent 72%)",
          WebkitMaskImage: "radial-gradient(ellipse at center, black 0%, transparent 72%)",
        }}
      />
    );
  }

  if (variant === "orbs") {
    return (
      <div aria-hidden="true" className={`pointer-events-none absolute inset-0 -z-10 overflow-hidden ${className}`}>
        <div className="accent-drift absolute -right-40 -top-40 h-96 w-96 rounded-full bg-iris/8 blur-3xl" />
        <div className="accent-drift absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-sky-400/10 blur-3xl" style={{ animationDelay: "4s" }} />
      </div>
    );
  }

  return null;
}
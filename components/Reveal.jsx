"use client";

import { useEffect, useRef, useState } from "react";

/**
 * A reveal-on-scroll component that animates children when they enter the viewport.
 *
 * @param {Object} props
 * @param {React.ReactNode} props.children - Child elements to reveal
 * @param {string|number} [props.y=30] - Vertical offset in pixels or any valid translateY value
 * @param {number} [props.delay=0] - Animation delay in milliseconds
 * @param {number} [props.threshold=0.15] - Intersection Observer threshold (0-1)
 * @param {string} [props.className] - Additional CSS classes
 * @param {boolean} [props.eager=false] - If true, the element is considered visible immediately
 * @param {string} [props.as='div'] - HTML tag to render as
 * @param {Object} [props.style] - Additional inline styles
 * @param {string} [props.rootMargin='0px'] - Intersection Observer root margin
 */
export default function Reveal({
  children,
  y = 30,
  delay = 0,
  threshold = 0.15,
  className = "",
  eager = false,
  as: Component = "div",
  style = {},
  rootMargin = "0px",
  ...rest
}) {
  const [isVisible, setIsVisible] = useState(eager);
  const ref = useRef(null);

  useEffect(() => {
    if (eager) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold,
        rootMargin,
      }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [eager, threshold, rootMargin]);

  // Convert y to a valid CSS translateY value
  const yValue = typeof y === "number" ? `${y}px` : y;

  const hiddenStyles = {
    opacity: 0,
    transform: `translateY(${yValue})`,
  };

  const visibleStyles = {
    opacity: 1,
    transform: "translateY(0)",
  };

  const combinedStyles = {
    transition: `opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1), transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)`,
    transitionDelay: `${delay}ms`,
    willChange: "opacity, transform",
    ...(isVisible ? visibleStyles : hiddenStyles),
    ...style,
  };

  return (
    <Component
      ref={ref}
      className={className}
      style={combinedStyles}
      {...rest}
    >
      {children}
    </Component>
  );
}
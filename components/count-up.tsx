"use client";

import { useEffect, useRef, useState } from "react";

type Parsed = {
  prefix: string;
  rawNumber: string;
  number: number;
  suffix: string;
};

/**
 * Pulls the leading number off a string like "+8,400" or "3.1M" or "₹412"
 * so we can animate the numeric part and keep the decoration static.
 * Returns null for values without a parseable leading number — those render as-is.
 */
function parseAnimatable(value: string): Parsed | null {
  // groups: 1 = prefix (sign or currency), 2 = number string, 3 = suffix
  const m = value.match(/^([+\-−₹$€£¥]?)\s*([\d,]+(?:\.\d+)?)(.*)$/);
  if (!m) return null;
  const raw = m[2];
  const n = parseFloat(raw.replace(/,/g, ""));
  if (Number.isNaN(n)) return null;
  return {
    prefix: m[1] || "",
    rawNumber: raw,
    number: n,
    suffix: m[3] || "",
  };
}

function format(current: number, original: string): string {
  const hasComma = original.includes(",");
  const decimals = (original.split(".")[1] || "").length;
  let result = current.toFixed(decimals);
  if (hasComma) {
    const [intPart, decPart] = result.split(".");
    result = intPart.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    if (decPart) result += "." + decPart;
  }
  return result;
}

export function CountUp({
  value,
  duration = 1400,
}: {
  value: string;
  duration?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const parsed = parseAnimatable(value);
  const [display, setDisplay] = useState<string>(
    parsed
      ? `${parsed.prefix}${format(0, parsed.rawNumber)}${parsed.suffix}`
      : value
  );

  useEffect(() => {
    if (!parsed) {
      setDisplay(value);
      return;
    }
    const el = ref.current;
    if (!el) return;

    // Respect reduced-motion: snap to final value, skip animation.
    if (
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      setDisplay(value);
      return;
    }

    let raf = 0;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();
        const start = performance.now();
        const tick = (now: number) => {
          const t = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - t, 3);
          const current = parsed.number * eased;
          setDisplay(
            `${parsed.prefix}${format(current, parsed.rawNumber)}${parsed.suffix}`
          );
          if (t < 1) raf = requestAnimationFrame(tick);
        };
        raf = requestAnimationFrame(tick);
      },
      { threshold: 0.4 }
    );
    observer.observe(el);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [value, duration, parsed]);

  return <span ref={ref}>{display}</span>;
}

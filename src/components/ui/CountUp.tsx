import React, { useEffect, useState } from "react";
import { prefersReducedMotion, useInView } from "../../hooks/useInView";

interface CountUpProps {
  /** Display value such as "+1,500", "100%" or "0$". */
  value: string;
  className?: string;
  duration?: number;
}

/** Counts the numeric part of `value` up from zero when it scrolls into view. */
export const CountUp: React.FC<CountUpProps> = ({ value, className = "", duration = 1600 }) => {
  const match = value.match(/^(\D*)([\d,]+)(\D*)$/);
  const hasNumber = match !== null;
  const target = match ? Number(match[2].replace(/,/g, "")) : 0;
  const { ref, inView } = useInView<HTMLSpanElement>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!inView || !hasNumber || prefersReducedMotion() || target === 0) return;
    let frame = 0;
    const start = performance.now();
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - t, 3);
      setCurrent(Math.round(target * eased));
      if (t < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [inView, target, duration, hasNumber]);

  if (!match) return <span className={className}>{value}</span>;

  const shown = inView && (target === 0 || prefersReducedMotion()) ? target : current;

  return (
    <span ref={ref} className={className} dir="ltr">
      <span aria-hidden="true">
        {match[1]}
        {shown.toLocaleString("en-US")}
        {match[3]}
      </span>
      <span className="sr-only">{value}</span>
    </span>
  );
};

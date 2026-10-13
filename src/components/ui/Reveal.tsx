import React from "react";
import { useInView } from "../../hooks/useInView";

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  /** Delay in ms, used to stagger siblings. */
  delay?: number;
  as?: "div" | "li" | "article" | "section";
}

/** Fades and lifts its children in the first time they scroll into view. */
export const Reveal: React.FC<RevealProps> = ({
  children,
  className = "",
  delay = 0,
  as: Tag = "div",
}) => {
  const { ref, inView } = useInView<HTMLElement>();

  return (
    <Tag
      ref={ref as React.Ref<never>}
      className={`reveal ${inView ? "is-visible" : ""} ${className}`}
      style={{ "--reveal-delay": `${delay}ms` } as React.CSSProperties}
    >
      {children}
    </Tag>
  );
};

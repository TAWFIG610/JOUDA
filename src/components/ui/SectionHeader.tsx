import React from "react";
import { Reveal } from "./Reveal";

interface SectionHeaderProps {
  title: React.ReactNode;
  description?: React.ReactNode;
  align?: "center" | "start";
  /** "dark" for headers placed on the navy brand surface. */
  tone?: "light" | "dark";
  className?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  title,
  description,
  align = "center",
  tone = "light",
  className = "",
}) => (
  <Reveal
    className={`mb-8 max-w-2xl sm:mb-12 ${align === "center" ? "mx-auto text-center" : "text-start"} ${className}`}
  >
    <span className={`title-rule ${align === "center" ? "mx-auto" : ""}`} aria-hidden="true" />
    <h2 className={`section-title ${tone === "dark" ? "text-white" : ""}`}>{title}</h2>
    {description && (
      <p className={`section-description mt-3 ${tone === "dark" ? "text-brand-100" : ""}`}>{description}</p>
    )}
  </Reveal>
);

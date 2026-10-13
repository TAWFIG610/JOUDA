import React from "react";
import { Reveal } from "./Reveal";

interface SectionHeaderProps {
  title: React.ReactNode;
  description?: React.ReactNode;
  align?: "center" | "start";
  className?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  title,
  description,
  align = "center",
  className = "",
}) => (
  <Reveal
    className={`mb-8 max-w-2xl space-y-3 sm:mb-12 ${
      align === "center" ? "mx-auto text-center" : "text-start"
    } ${className}`}
  >
    <h2 className="section-title">{title}</h2>
    {description && <p className="section-description">{description}</p>}
  </Reveal>
);

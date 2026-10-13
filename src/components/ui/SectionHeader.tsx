import React from "react";
import type { LucideIcon } from "lucide-react";
import { Reveal } from "./Reveal";

interface SectionHeaderProps {
  icon: LucideIcon;
  eyebrow: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  className?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  icon: Icon,
  eyebrow,
  title,
  description,
  className = "",
}) => (
  <Reveal className={`mx-auto mb-10 max-w-3xl space-y-4 text-center sm:mb-14 ${className}`}>
    <div className="section-eyebrow">
      <Icon className="h-3.5 w-3.5 text-gold-600" aria-hidden="true" />
      <span>{eyebrow}</span>
    </div>
    <h2 className="section-title">{title}</h2>
    {description && <p className="section-description">{description}</p>}
  </Reveal>
);

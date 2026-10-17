import React from "react";

interface SectionHeaderProps {
  id: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  children?: React.ReactNode;
}

/** Start-aligned section heading, the same on every section. */
export const SectionHeader: React.FC<SectionHeaderProps> = ({ id, title, description, children }) => (
  <div className="section-head">
    <h2 id={id}>{title}</h2>
    {description && <p>{description}</p>}
    {children}
  </div>
);

import React from "react";

interface SectionProps {
  children: React.ReactNode;
  classes?: string;
  layout?: "row" | "column";
}

const Section: React.FC<SectionProps> = ({ children, classes, layout }) => {
  const layoutClass = layout === "row" ? "section-row" : "section-column";
  return (
    <section className={`section ${layoutClass} ${classes}`}>
      {children}
    </section>
  );
};

export default Section;

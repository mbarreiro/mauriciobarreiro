import clsx from "clsx";
import React from "react";

interface SectionProps {
  children: React.ReactNode;
  classes?: string;
  layout?: "row" | "column";
  spacing?: "none" | "small" | "medium" | "large";
}

const Section: React.FC<SectionProps> = ({
  children,
  classes,
  layout,
  spacing,
}) => {
  const classList = clsx(
    "section",
    { classes: classes },
    `section--spacing-${spacing}`,
    layout ? `section--layout-${layout}` : ""
  );

  return <section className={classList}>{children}</section>;
};

export default Section;

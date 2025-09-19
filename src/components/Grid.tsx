import React from "react";
import Image from "next/image";
import clsx from "clsx";
import Card from "./Card";

export type GridItem = {
  component: string;
  props: Record<string, unknown> & typeof Card;
};

interface GridProps {
  children?: React.ReactNode;
  classes?: string;
  gridItems: GridItem[];
  gridColumns?: number | 1 | 2 | 3 | 4 | 5;
  gridColumnGap?: "none" | "small" | "medium" | "large";
  gridRowGap?: "none" | "small" | "medium" | "large";
  hasGridColumnGap?: boolean;
  hasGridRowGap?: boolean;

  image?: typeof Image;
}
// Map of component names to actual components
// eslint-disable-next-line
const componentMap: { [key: string]: React.ComponentType<any> } = {
  // Add your components here
  // Example:
  // 'Image': ImageComponent,
  Card: Card,
  Image: Image,
};

const Grid: React.FC<GridProps> = ({
  children,
  classes,
  gridItems,
  gridColumns,
  gridColumnGap,
  gridRowGap,
  hasGridColumnGap,
  hasGridRowGap,
}) => {
  function DynamicComponentRenderer({
    type,
    ...props
  }: {
    type: string;
    [key: string]: unknown;
  }) {
    const ComponentToRender = componentMap[type];
    console.log("ComponentToRender:", type);
    if (!ComponentToRender) {
      return <p>Component type &quot;{type}&quot; not found.</p>;
    }
    return <ComponentToRender {...props} />;
  }
  const classList = clsx(
    "grid",
    { classes: classes },
    gridColumnGap ? `grid--column-gap-${gridColumnGap}` : "",
    gridRowGap ? `grid--row-gap-${gridRowGap}` : "",
    hasGridColumnGap ? "grid--with-column-gap" : "",
    hasGridRowGap ? "grid--with-row-gap" : "",
    gridColumns ? `grid--cols-${gridColumns}` : ""
  );

  return (
    <div className={classList}>
      {gridItems.map((item, i) => (
        <div key={i} className="grid__item">
          <DynamicComponentRenderer type={item.component} {...item.props} />
        </div>
      ))}
      {children}
    </div>
  );
};

export default Grid;

import React from "react";
import clsx from "clsx";
import Image from "next/image";
import { ImageModel } from "../app/models/image.model";

export type GreyscaleColor = "#f5f5f5" | "#cccccc" | "#333333" | undefined;

export type BackgroundImage = {
  src?: string;
};

export interface CardProps {
  children?: React.ReactNode;
  classes?: string;
  eyebrow?: string;
  description?: string;
  backgroundColor?: GreyscaleColor;
  backgroundImage?: ImageModel;
  layout?: "image-left" | "image-right" | "image-top" | "image-bottom";
  image: ImageModel;
  color?: string;
  textAlign?: "left" | "center" | "right";
  title?: string;
  variant?: "standard" | "featured" | "highlighted" | "claim";
}

const Card: React.FC<CardProps> = ({
  children,
  classes,
  eyebrow,
  description,
  backgroundColor,
  backgroundImage,
  color,
  layout = "image-top",
  image,
  textAlign = "left",
  title,
  variant = "standard",
}) => {
  const classList = clsx(
    "card",
    { classes: classes },
    layout ? `card--layout-${layout}` : "",
    backgroundColor ? "card--with-bg" : "",
    backgroundImage ? "card--with-bg-image" : "",
    color ? "card--with-color" : "",
    textAlign ? `card--text-align-${textAlign}` : "",
    variant ? `card--variant-${variant}` : ""
  );

  return (
    <div
      className={classList}
      style={{
        color,
        backgroundColor,
        backgroundImage:
          backgroundImage && backgroundImage.src
            ? `url("${backgroundImage.src}")`
            : undefined,
      }}
    >
      <div className="card__media-container">
        {image && image.src && <Image {...image} alt={image.alt || ""} />}
      </div>
      <div className="card__content">
        {eyebrow && <span className="card__eyebrow">{eyebrow}</span>}
        {title && <span className="card__title">{title}</span>}
        {description && <p className="card__description">{description}</p>}
        {children}
      </div>
    </div>
  );
};

export default Card;

import React from "react";
import clsx from "clsx";
import Image from "next/image";
import { ImageModel } from "../app/models/image.model";

export type GreyscaleColor = "#f5f5f5" | "#cccccc" | "#333333" | undefined;

export type BackgroundImage = {
  src?: string;
};

interface HeroProps {
  children?: React.ReactNode;
  classes?: string;
  title?: string;
  description?: string;
  backgroundColor?: GreyscaleColor;
  backgroundImage?: ImageModel;
  image: ImageModel;
  color?: string;
}

const Hero: React.FC<HeroProps> = ({
  children,
  classes,
  title,
  description,
  backgroundColor,
  backgroundImage,
  color,
  image,
}) => {
  const classList = clsx(
    "hero",
    { classes: classes },
    backgroundColor ? "hero--with-bg" : "",
    backgroundImage ? "hero--with-bg-image" : "",
    color ? "hero--with-color" : ""
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
      <div className="hero__content">
        {title && <h1 className="hero__title">{title}</h1>}
        {description && <p className="hero__description">{description}</p>}
        {children}
      </div>
      <div className="hero__media-container">
        {image && image.src && <Image {...image} alt={image.alt || ""} />}
      </div>
    </div>
  );
};

export default Hero;

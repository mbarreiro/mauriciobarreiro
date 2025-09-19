"use client";
import Image from "next/image";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import clsx from "clsx";

type SliderSimpleProps = {
  classes?: string;
};

function SliderSimple({ classes }: SliderSimpleProps) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const classList = clsx("slider-simple slider-container", {
    classes: classes,
  });
  return (
    <div className={classList}>
      <Slider {...settings}>
        <div>
          <Image
            src="https://fpoimg.com/1920x1080?text=Slideshow One&bg_color=e6e6e6&text_color=8F8F8F"
            alt="Slideshow placeholder"
            width={`1920`}
            height={`1080`}
            priority
          />
        </div>
        <div>
          <Image
            src="https://fpoimg.com/1920x1080?text=Slideshow Two&bg_color=e6e6e6&text_color=8F8F8F"
            alt="Slideshow placeholder"
            width={`1920`}
            height={`1080`}
            priority
          />
        </div>
        <div>
          <Image
            src="https://fpoimg.com/1920x1080?text=Slideshow Two&bg_color=e6e6e6&text_color=8F8F8F"
            alt="Slideshow placeholder"
            width={`1920`}
            height={`1080`}
            priority
          />
        </div>
        <div>
          <Image
            src="https://fpoimg.com/1920x1080?text=Slideshow Three&bg_color=e6e6e6&text_color=8F8F8F"
            alt="Slideshow placeholder"
            width={`1920`}
            height={`1080`}
            priority
          />
        </div>
        <div>
          <Image
            src="https://fpoimg.com/1920x1080?text=Slideshow Four&bg_color=e6e6e6&text_color=8F8F8F"
            alt="Slideshow placeholder"
            width={`1920`}
            height={`1080`}
            priority
          />
        </div>
        <div>
          <Image
            src="https://fpoimg.com/1920x1080?text=Slideshow Five&bg_color=e6e6e6&text_color=8F8F8F"
            alt="Slideshow placeholder"
            width={`1920`}
            height={`1080`}
            priority
          />
        </div>
      </Slider>
    </div>
  );
}

export default SliderSimple;

import React, { useEffect, useRef, useState } from "react";
import styled from "@emotion/styled";
import Slide from "./Slide";
import Image from "next/image";
import { config } from "react-spring";
import ArrowUp from "../../../public/svg/arrow-up.svg";
import { slidestestimonal } from "@/utils/data";

function mod(a: number, b: number) {
  return ((a % b) + b) % b;
}

export interface ContentProps {
  id: number;
  quote: string;
  author: string;
  position: string;
  company: string;
}

interface VerticalCarouselProps {}

const VerticalCarousel: React.FC<VerticalCarouselProps> = () => {
  const [index, setIndex] = useState(0);
  const [offsetRadius, setOffsetRadius] = useState(2);
  const [showNavigation, setShowNavigation] = useState(true);
  const [animationConfig] = useState(config.gentle);
  const [slides, setSlides] = useState(slidestestimonal);

  const modBySlidesLength = (index: number) => {
    return mod(index, slides.length);
  };

  const moveSlide = (direction: number) => {
    setIndex((prevIndex) => modBySlidesLength(prevIndex + direction));
  };

  const clampOffsetRadius = (offsetRadius: number) => {
    const upperBound = Math.floor((slides.length - 1) / 2);

    if (offsetRadius < 0) {
      return 0;
    }
    if (offsetRadius > upperBound) {
      return upperBound;
    }

    return offsetRadius;
  };

  const getPresentableSlides = () => {
    let offset = offsetRadius;
    offset = clampOffsetRadius(offset);

    const presentableSlides: ContentProps[] = [];

    for (let i = -offset; i < 1 + offset; i++) {
      presentableSlides.push(slides[modBySlidesLength(index + i)]);
    }

    return presentableSlides;
  };
  const divRef = useRef<HTMLDivElement>(null);
  const getHeight = () => {
    if (divRef.current) {
      const height = divRef.current.offsetHeight;
      console.log("Height:", height);
    }
  };

  useEffect(() => {
    getHeight();
  }, []);
  let navigationButtons = null;
  if (showNavigation) {
    navigationButtons = (
      <div className="flex flex-row md:flex-col gap-5 justify-center">
        <button
          onClick={() => moveSlide(1)}
          className="bg-sec_dark -rotate-90 md:rotate-0 rounded-full flex items-center justify-center w-[40px] h-[40px] lg:w-[60px] lg:h-[60px] xl:w-[80px] xl:h-[80px]"
        >
          <Image src={ArrowUp} alt="arrow up" />
        </button>
        <button
          onClick={() => moveSlide(-1)}
          className="bg-sec_dark rotate-90 md:rotate-180 rounded-full flex items-center justify-center  w-[40px] h-[40px] lg:w-[60px] lg:h-[60px] xl:w-[80px] xl:h-[80px]"
        >
          <Image src={ArrowUp} alt="arrow up" />
        </button>
      </div>
    );
  }

  return (
    <div
      ref={divRef}
      className="screen-center justify-center md:flex  gap-5 xl:gap-10 gap-y-20 my-20 mx-0 max-h-[500px]"
    >
      <div className="flex flex-col justify-center w-full h-[45vh] max-h-[500px] mx-auto">
        <div className="relative flex h-full w-full">
          {getPresentableSlides().map((slide, presentableIndex) => (
            <Slide
              key={slide.id}
              content={slide}
              moveSlide={moveSlide}
              offsetRadius={clampOffsetRadius(offsetRadius)}
              index={presentableIndex}
              animationConfig={animationConfig}
            />
          ))}
        </div>
      </div>
      {navigationButtons}
    </div>
  );
};
export default VerticalCarousel;

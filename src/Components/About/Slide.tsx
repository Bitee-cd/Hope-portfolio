import React from "react";
import styled from "@emotion/styled";
import { Spring, animated } from "react-spring";
import { ContentProps } from "./VerticalCarousel";

interface SlideProps {
  content: ContentProps;
  offsetRadius: number;
  index: number;
  animationConfig: object;
  moveSlide: (direction: number) => void;
  delta?: [number, number];
  down?: boolean;
}

const SlideContainer = styled(animated.div)`
  position: absolute;
  height: 70%;
  top: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transform-origin: 50% 50%;
`;

const Slide: React.FC<SlideProps> = ({
  content,
  offsetRadius,
  index,
  animationConfig,
  moveSlide,
  delta,
  down,
}) => {
  const offsetFromMiddle = index - offsetRadius;
  const totalPresentables = 2 * offsetRadius + 1;
  const distanceFactor = 1 - Math.abs(offsetFromMiddle / (offsetRadius + 1));

  const translateYoffset =
    50 * (Math.abs(offsetFromMiddle) / (offsetRadius + 1));
  let translateY = -50;

  if (offsetRadius !== 0) {
    if (index === 0) {
      translateY = 0;
    } else if (index === totalPresentables - 1) {
      translateY = -100;
    }
  }

  if (offsetFromMiddle === 0 && down && delta) {
    translateY += delta[1] / (offsetRadius + 1);
    if (translateY > -40) {
      moveSlide(-1);
    }
    if (translateY < -100) {
      moveSlide(1);
    }
  }
  if (offsetFromMiddle > 0) {
    translateY += translateYoffset;
  } else if (offsetFromMiddle < 0) {
    translateY -= translateYoffset;
  }

  return (
    <Spring
      to={{
        transform: `translateX(0%) translateY(${translateY}%) scale(${distanceFactor})`,
        top: `${
          offsetRadius === 0 ? 50 : 50 + (offsetFromMiddle * 50) / offsetRadius
        }%`,
        opacity: distanceFactor * distanceFactor,
      }}
      config={animationConfig}
    >
      {(style) => (
        <SlideContainer
          style={{
            ...style,
            zIndex: Math.abs(Math.abs(offsetFromMiddle) - 2),
          }}
        >
          <div
            className="text-red rounded-[30px] bg-sec  p-5 md:px-10  relative w-full z-10  mx-auto border border-sec_light "
            onClick={() => moveSlide(offsetFromMiddle)}
          >
            <div>
              <p className="text-ter text-opacity-50 h2 font-bold">
                {content.id.toString().padStart(2, "0")}
              </p>
              <p className="text-[#DADADA] p">{content.quote}</p>
              <p className="text-white p font-semibold mt-5">
                {content.author}
              </p>
              <div className="p-small text-[#888787] text-opacity-60 mt-2">
                <p> {content.position}</p>
                <p>
                  <span>{content.company}</span>
                </p>
              </div>
            </div>
          </div>
        </SlideContainer>
      )}
    </Spring>
  );
};

export default Slide;

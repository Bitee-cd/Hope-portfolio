import React from "react";

import { Fade } from "react-awesome-reveal";

import VerticalCarousel from "../About/VerticalCarousel";
interface Props {}

const PeopleSay = (props: Props) => {
  return (
    <section className="overflow-x-hidden -z-100">
      <div className="screen-center  grid lg:grid-cols-2 xl:gap-10 gap-y-20 my-10 lg:my-20">
        <div className="flex items-center justify-center text-white">
          <Fade direction="up" duration={1500} delay={500} triggerOnce>
            <p className="h2 font-bold text-center lg:w-[80%]">
              What people say about Me.
            </p>
          </Fade>
        </div>
        <div>
          <VerticalCarousel />
        </div>
      </div>
    </section>
  );
};

export default PeopleSay;

import React from "react";
import { Fade, Slide } from "react-awesome-reveal";
interface Props {}
const Hero = (props: Props) => {
  return (
    <section className="bg-sec ">
      <div className="screen-center lg:min-h-screen flex items-center justify-center">
        <div className="py-10 text-ter flex flex-col justify-center items-center mx-auto ">
          <div className="flex flex-col justify-center">
            <div className=" font-extrabold text-center text-[50px]">
              <Fade cascade direction="up" duration={2000} triggerOnce>
                <span className="text-pri   text-[45px]  md:text-[90px] lg:text-[120px] ">
                  Simplicity
                </span>
                <span className="text-xl lg:text-[50px]">is the ultimate</span>
                <span className="text-pri text-[45px] md:text-[90px] lg:text-[120px] font-extrabold">
                  Sophistication
                </span>
                <p className="text-end w-full text-[10px] text-base  font-[300]">
                  Leonardo da Vinci
                </p>
              </Fade>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

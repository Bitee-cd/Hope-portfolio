import React from "react";
import { Fade, Slide } from "react-awesome-reveal";
interface Props {}
const Hero = (props: Props) => {
  return (
    <section className="bg-sec ">
      <div className="screen-center min-h-screen flex items-center justify-center">
        <div className="py-10 text-ter flex flex-col justify-center items-center mx-auto ">
          <Fade cascade damping={1}>
            <div className="flex flex-col justify-center">
              <div className=" font-extrabold text-center text-[50px]">
                <Fade direction="up" duration={2000} triggerOnce>
                  <span className="text-pri   text-[45px]  md:text-[90px] lg:text-[120px] ">
                    Simplicity
                  </span>
                </Fade>
                <br></br>

                <Fade delay={1000} duration={1000} direction="up" triggerOnce>
                  <span className="text-xl lg:text-[50px]">
                    is the ultimate
                  </span>
                </Fade>

                <br></br>
                <Fade direction="up" delay={1500} duration={2000} triggerOnce>
                  <span className="text-pri text-[45px] md:text-[90px] lg:text-[120px] font-extrabold">
                    Sophistication
                  </span>
                </Fade>
              </div>
              <Fade direction="up" delay={2000} duration={2000} triggerOnce>
                <p className="text-end w-full text-[12px] text-base  font-[300]">
                  Leonardo da Vinci
                </p>
              </Fade>
            </div>
          </Fade>
        </div>
      </div>
    </section>
  );
};

export default Hero;

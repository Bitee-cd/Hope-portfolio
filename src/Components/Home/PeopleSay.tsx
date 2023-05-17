import React, { useState } from "react";
import "swiper/css";
import "swiper/css/effect-cards";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/effect-cards";
import { EffectCards } from "swiper";
import { Fade } from "react-awesome-reveal";
interface Props {}
const testimonialData = [
  {
    id: 1,
    quote:
      "“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.”",
    author: "Victor Anto",
    position: "Senior Frontend Engineer",
    company: "(Ourpass, Nigeria)",
  },
  {
    id: 2,
    quote:
      "“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.”",
    author: "John Doe",
    position: "Software Developer",
    company: "(Acme Inc., USA)",
  },
  {
    id: 3,
    quote:
      "“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.”",
    author: "Jane Smith",
    position: "UI Designer",
    company: "(Design Co., Canada)",
  },
  {
    id: 4,
    quote:
      "“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.”",
    author: "Mike Johnson",
    position: "Product Manager",
    company: "(Innovate Ltd., UK)",
  },
  {
    id: 5,
    quote:
      "“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ”",
    author: "Lucy Williams",
    position: "Marketing Manager",
    company: "(Growth Inc., Australia)",
  },
];
const PeopleSay = (props: Props) => {
  return (
    <section className="overflow-x-hidden -z-100">
      <div className="screen-center  grid lg:grid-cols-2 gap-10 my-10 lg:my-20">
        <div className="flex items-center justify-center text-white">
          <Fade direction="up" duration={1500} delay={500} triggerOnce>
            <p className="h2 font-bold text-center lg:w-[80%]">
              What people say about Me.
            </p>
          </Fade>
        </div>
        <div className="flex flex-col  w-[80%] mx-auto gap-5 mb-10">
          <Swiper
            effect={"cards"}
            grabCursor={true}
            modules={[EffectCards]}
            className="mySwiper"
          >
            {testimonialData.map((item, index) => (
              <SwiperSlide
                key={index}
                className="rounded-[30px] bg-sec  p-5 md:px-10  relative w-full z-10  mx-auto border border-sec_light "
              >
                <p className="text-ter text-opacity-50 h2 font-bold">
                  {item.id.toString().padStart(2, "0")}
                </p>
                <p className="text-[#DADADA] p">{item.quote}</p>
                <p className="text-white p font-semibold mt-5">{item.author}</p>
                <div className="p-small text-[#888787] text-opacity-60 mt-2">
                  <p> {item.position}</p>
                  <p>
                    <span>{item.company}</span>
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="flex flex-row md:flex-col gap-5 justify-center"></div>
      </div>
    </section>
  );
};

export default PeopleSay;

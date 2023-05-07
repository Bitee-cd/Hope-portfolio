import React from "react";
interface Props {}
const Hero = (props: Props) => {
  return (
    <section className="bg-sec">
      <div className="screen-center">
        <div className="py-10 text-ter flex flex-col justify-center items-center mx-auto md:w-[80%]">
          <p className="text-center font-extrabold text-[50px]">
            <span className="text-pri   text-[45px]  md:text-[90px] lg:text-[120px] ">
              Simplicity
            </span>
            <br></br>
            <span className="text-xl lg:text-[50px]"> is the ultimate </span>
            <br></br>
            <span className="text-pri text-[45px] md:text-[90px] lg:text-[120px] font-extrabold">
              Sophistication
            </span>
          </p>
          <p className="flex justify-end w-full text-base md:2xl lg:text-[35px] font-[300]">
            Leonardo da Vinci
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;

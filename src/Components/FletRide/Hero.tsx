import React from "react";
import ResponsiveImage from "../Reusable/Image";

const Hero = () => {
  return (
    <section className="screen-center flex-col-reverse gap-y-5 lg:flex-row flex my-10">
      <div className="lg:w-1/5 lg:ml-10 flex  lg:items-center lg:justify-center">
        <div className="flex lg:items-center lg:justify-center flex-col gap-5 lg:gap-10">
          <div className="flex lg:items-center lg:justify-center ">
            <div className=" flex lg:items-center lg:flex-col gap-10 ">
              <div className=" hidden lg:block">
                <ResponsiveImage
                  alt="Flet Ride Logo"
                  src="/Images/flet_ride/logo.svg"
                />
              </div>
              <p className={`h4  text-[#2A00AC] font-black`}>Flet Ride</p>
            </div>
          </div>
          <p className="h4 font-extrabold lg:text-center">UI/UX Case study</p>
        </div>
      </div>
      <div className="flex-1 flex justify-center md:justify-end relative">
        <div className="w-[80%]">
          <ResponsiveImage
            alt="Flet ride Phone"
            src="/Images/flet_ride/hero.png"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;

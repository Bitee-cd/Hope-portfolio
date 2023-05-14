import React from "react";
import ResponsiveImage from "../Reusable/Image";
import { COLORS } from "@/utils/constants";

const Hero = () => {
  return (
    <section className="mx-auto  max-w-[2000px] flex-col-reverse gap-y-5 lg:flex-row flex my-10">
      <div className="w-full h-full relative">
        <ResponsiveImage
          alt="Classic Park Mobile"
          src="/Images/classic_park/hero.png"
        />

        {/* content  */}
        <div className="screen-center lg:absolute lg:z-10 top-0 h-full left-0 lg:w-1/2 flex items-center justify-center">
          <div className="flex lg:w-1/2 items-center justify-center flex-col gap-5 lg:gap-10">
            <div className="flex items-center justify-center ">
              <div className=" flex items-center lg:flex-col">
                <p className={`h4 font-black`}>Classic Park </p>
              </div>
            </div>
            <p className={`p text-center text-[#0157FF] font-semibold`}>
              Park your car in a convenient way anytime, any day
            </p>
            <p className="h5 font-extrabold">UI/UX Case study</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

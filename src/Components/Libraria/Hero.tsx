import React from "react";
import ResponsiveImage from "../Reusable/Image";

const Hero = () => {
  return (
    <section className="mx-auto max-w-[2000px] flex-col-reverse gap-y-5 lg:flex-row flex my-10">
      <div className="lg:w-1/5 lg:ml-10 flex  items-center justify-center">
        <div className="flex items-center justify-center flex-col gap-5 lg:gap-10">
          <div className="flex items-center justify-center ">
            <div className=" flex items-center lg:flex-col">
              <div className="max-w-[65px] lg:max-w-[200px]">
                <ResponsiveImage
                  alt="Libraria Laptop"
                  src="/Images/libraria/logo.svg"
                />
              </div>
              <p className={`h4 text-[#183A1D] font-black`}>Libraria</p>
            </div>
          </div>
          <p className="p text-center">
            All the books you need at your Finger tips
          </p>
        </div>
      </div>
      <div className="flex-1 relative">
        <ResponsiveImage
          alt="Libraria Laptop"
          src="/Images/libraria/laptop.svg"
        />
        <div className="w-1/6  absolute right-0 top-0 -translate-x-1/2 translate-y-1/2">
          <ResponsiveImage
            alt="Libraria Phone"
            src="/Images/libraria/phone.svg"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;

import React from "react";
interface Props {}
const Hero = (props: Props) => {
  return (
    <section className="bg-sec">
      <div className="screen-center">
        <div className=" text-ter flex flex-col justify-center items-center mx-auto w-[80%]">
          <p className="text-center ">
            <span className="text-pri text-[120px]">Simplicity</span>
            <br></br> is the ultimate <br></br>
            <span className="text-pri text-[120px]">Sophistication</span>
          </p>
          <p className="flex justify-end w-full">Leonardo da Vinci</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;

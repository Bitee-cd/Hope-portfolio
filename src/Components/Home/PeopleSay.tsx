import React from "react";
interface Props {}
const PeopleSay = (props: Props) => {
  return (
    <section className="bg-sec">
      <div className="screen-center md:grid grid-cols-2 gap-10 py-10 lg:py-20">
        <div className="flex items-center justify-center text-white">
          <p>What people say about Me.</p>
        </div>
        <div className="bg-sec_dark rounded-[30px] p-5 w-[80%] mx-auto border border-sec_light">
          <p className="text-ter text-opacity-50">01</p>
          <p className="text-[#DADADA]">
            “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.”
          </p>
          <p className="text-white">Victor Anto</p>
          <div className="text-[#888787] text-opacity-60">
            <p>Senior Frontend Engineer</p>
            <p>(Ourpass, Nigeria)</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PeopleSay;

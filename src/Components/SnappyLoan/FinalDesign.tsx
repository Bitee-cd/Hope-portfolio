import { final_design_impementation } from "@/utils/data/snappy";
import React from "react";
import ResponsiveImage from "../Reusable/Image";
import HeaderTextImageGroup from "../Reusable/HeaderTextImageGroup";

const FinalDesign = () => {
  return (
    <section className="my-5 xl:my-10">
      <div className="screen-center">
        <div className="">
          <p className="h4 font-extrabold mb-5">Final Design Implementation</p>
          <p className="p">
            I then began colouring the design and giving it a more realistic
            appearance.
          </p>
        </div>
        <div className="my-5 lg:my-10 flex flex-col gap-5 lg:gap-10 ">
          {final_design_impementation.map((item, index) => (
            <HeaderTextImageGroup item={item} key={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FinalDesign;

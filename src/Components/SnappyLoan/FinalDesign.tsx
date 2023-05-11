import { final_design_impementation } from "@/utils/data/snappy";
import React from "react";
import ResponsiveImage from "../Reusable/Image";

const FinalDesign = () => {
  return (
    <section className="my-10 xl:my-20">
      <div className="screen-center">
        <div className="">
          <p className="h4 font-extrabold mb-5">Final Design Implementation</p>
          <p className="p">
            I then began colouring the design and giving it a more realistic
            appearance.
          </p>
        </div>
        <div className="my-10 lg:my-20 flex flex-col gap-10 lg:gap-20 ">
          {final_design_impementation.map((item, index) => (
            <div className="" key={index}>
              <p className="h5 font-semibold mb-5">{item.title}</p>
              <p className="p">{item.text}</p>
              <div className="my-10 lg:my-20">
                <ResponsiveImage
                  src={`/Images/snappy_loan/${item.image}`}
                  alt={item.title}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FinalDesign;

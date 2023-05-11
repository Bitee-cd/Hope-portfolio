import { pain_points } from "@/utils/data/snappy";
import React from "react";

const PainPoints = () => {
  return (
    <section>
      <div className="screen-center my-10">
        <div className="my-10 ">
          <p className="h4 font-extrabold mb-5">Pain points</p>
          <p className="p">
            After completing the interview and user reviews on Google play store
            and apple store, the following are the pain points discovered:
          </p>
          <div className=" custom_border my-10">
            <div className="w-[90%] mx-auto flex flex-col lg:flex-row lg:flex-wrap gap-10 justify-between xl:gap-x-20 my-10 xl:my-20">
              {pain_points.map((item, index) => (
                <div className="lg:w-[45%]" key={index}>
                  <p className="h5 font-bold mb-5">{item.title}</p>
                  <div className="p">{item.text}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PainPoints;

import { TitleTextImage } from "@/Interfaces/Projects";
import React from "react";
interface Props {
  pain_points: {
    title?: string;
    list: TitleTextImage[];
  };
}
const PainPoints = ({ pain_points }: Props) => {
  return (
    <section>
      <div className="screen-center my-10">
        <div className="my-10 ">
          <p className="h4 font-extrabold mb-5">Pain points</p>
          {pain_points.title && <p className="p">{pain_points.title}</p>}
          <div className="custom_border my-10">
            <div className="w-[90%] mx-auto flex flex-col lg:flex-row lg:flex-wrap gap-10 justify-between xl:gap-x-20 my-10 xl:my-20">
              {pain_points.list.map((item, index) => (
                <div
                  className={`lg:w-[45%] ${index === 1 && "lg:order-2"} ${
                    index === 3 && "lg:order-4"
                  }  `}
                  key={index}
                >
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

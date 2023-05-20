import React from "react";

import { COLORS } from "@/utils/constants";
import Title from "../Reusable/Title";
import ResponsiveImage from "../Reusable/Image";
import { ideate } from "@/utils/data/classic_park";
interface Props {}
const Ideate = ({}: Props) => {
  return (
    <section className="my-5 lg:my-10">
      <div className="screen-center">
        <Title text="Ideate" color={`text-[${COLORS.classic_blue}]`} />
        {/* brainstorming  */}
        {
          <div className="my-5 lg:my-10">
            <p className="h4 my-5 font-extrabold">{ideate[0].title}</p>
            <p className="p mb-5 lg:mb-10">{ideate[0].text}</p>

            {ideate[0].image?.map((item, index) => (
              <div className="w-[90%] md:w-1/2 mx-auto" key={index}>
                <ResponsiveImage src={item} alt={`Ideate ${ideate[0].title}`} />
              </div>
            ))}
          </div>
        }

        {/* mscw  */}
        {
          <div className="my-5 lg:my-10">
            <p className="h4 my-5 font-extrabold">{ideate[1].title}</p>
            <p className="p mb-5 lg:mb-10">{ideate[1].text}</p>
            <div className="grid grid-cols-2 gap-10">
              {ideate[1].image?.map((item, index) => (
                <div className="my-5 lg:w-[80%] mx-auto" key={index}>
                  <ResponsiveImage
                    src={item}
                    alt={`Ideate ${ideate[1].title}`}
                  />
                </div>
              ))}
            </div>
          </div>
        }

        {/* priotitization */}
        {ideate.slice(2, 4).map((list, index) => (
          <div key={index} className="my-5 lg:my-10">
            <p className="h4 my-5 font-extrabold">{list.title}</p>
            <p className="p mb-5 lg:mb-10">{list.text}</p>
            {list.image &&
              list.image?.map((item, index) => (
                <div className="my-5" key={index}>
                  <ResponsiveImage src={item} alt={`Ideate ${list.title}`} />
                </div>
              ))}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Ideate;

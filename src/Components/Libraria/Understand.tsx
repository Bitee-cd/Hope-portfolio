import React from "react";
import Title from "../Reusable/Title";
import { COLORS } from "@/utils/constants";
import {
  final_design_impementation,
  understand_questions,
} from "@/utils/data/snappy";
import List from "../Reusable/List";
import HeaderTextImageGroup from "../Reusable/HeaderTextImageGroup";
import { design_strategy } from "@/utils/data/libraria";
import ResponsiveImage from "../Reusable/Image";
interface Props {}
const Understand = ({}: Props) => {
  return (
    <section>
      <div className="screen-center my-10 xl:my-20">
        <div>
          <Title text="Understand" color={`text-[${COLORS.libraria_green}]`} />
        </div>

        <div className="my-5 lg:my-10">
          <p className="my-2 lg:my-5 h4 font-extrabold">Design Strategy</p>

          <div className="">
            <div className="my-5 lg:my-10 flex flex-col gap-5 lg:gap-10 ">
              {design_strategy.map((item, index) => (
                <HeaderTextImageGroup
                  item={item}
                  key={index}
                  bullet_className="libraria_bullet"
                />
              ))}
            </div>
          </div>
        </div>

        <div className="my-5 lg:my-10">
          <div className="">
            <p className="my-5 lg:my-10 h4 font-extrabold">
              Competitive Analysis
            </p>
            <p className="p">
              I continued to similar items to examine competitors. This will
              help me to better understand user empathy and to comprehend
              important components of the model.
            </p>
          </div>
          <div className="my-5 lg:my-10">
            <ResponsiveImage
              src="/Images/libraria/competitive_analysis.png"
              alt="Libraria competitive analysis"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Understand;

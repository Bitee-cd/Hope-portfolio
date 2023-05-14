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
          <p className="my-5 lg:my-10 h4 font-extrabold">Design Strategy</p>
          <p className="p">
            In order to better understand where they were having trouble with
            the several loan apps that were already available, I conducted
            interviews with consumers ranging in age from 18 to 45.
          </p>

          <div className="my-5">
            <div className="my-10 lg:my-20 flex flex-col gap-10 lg:gap-20 ">
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
          <div className="my-5 lg:my-10">
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

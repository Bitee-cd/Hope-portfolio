import React from "react";
import Title from "../Reusable/Title";
import { COLORS } from "@/utils/constants";

import HeaderTextImageGroup from "../Reusable/HeaderTextImageGroup";
import {
  design_strategy_a,
  design_strategy_b,
} from "@/utils/data/classic_park";
import ResponsiveImage from "../Reusable/Image";
import OnlineSurvey from "./OnlineSurvey";
interface Props {}
const Understand = ({}: Props) => {
  return (
    <section>
      <div className="screen-center my-10 xl:my-20">
        <div>
          <Title text="Understand" color={`text-[${COLORS.blue_dark}]`} />
        </div>

        <div className="my-5 lg:my-10">
          <p className="my-5 lg:my-10 h4 font-extrabold">User Interview</p>
          <p className="p">
            In this section, I chose to interview 5 potential users.The goal of
            this interview was to familiarise users with the problem and
            worries. How do they locate storage areas? The following are some of
            the assessment questions:
          </p>

          <div className="my-5 grid lg:grid-cols-2">
            {/* list group  */}
            <div className="my-5 lg:my-10 flex flex-col gap-5 lg:gap-10 ">
              {design_strategy_a.map((item, index) => (
                <HeaderTextImageGroup
                  item={item}
                  key={index}
                  bullet_className="classic_bullet"
                />
              ))}
              <div className="hidden lg:block">
                {design_strategy_b.map((item, index) => (
                  <HeaderTextImageGroup
                    item={item}
                    key={index}
                    bullet_className="classic_bullet"
                  />
                ))}
              </div>
            </div>

            {/* image group  */}
            <div className="my-5 w-[80%] mx-auto lg:my-10">
              <ResponsiveImage
                src="/Images/classic_park/user_taking_notes.svg"
                alt="LClassic Park User Taking Notes"
              />
            </div>

            {/* list b group  */}
            <div className="lg:hidden my-5 lg:my-10 flex flex-col gap-5 lg:gap-10 ">
              {design_strategy_b.map((item, index) => (
                <HeaderTextImageGroup
                  item={item}
                  key={index}
                  bullet_className="classic_bullet"
                />
              ))}
            </div>
          </div>
        </div>

        <OnlineSurvey />
      </div>
    </section>
  );
};

export default Understand;

import { COLORS } from "@/utils/constants";
import React from "react";
import Title from "../Reusable/Title";
import PainPoints from "../Reusable/PainPoints";
import { pain_points } from "@/utils/data/flet_ride";

const Understand = () => {
  return (
    <>
      <section>
        <div className="screen-center my-10 xl:my-20">
          <div>
            <Title text="Understand" color={`text-[${COLORS.flet_purple}]`} />
          </div>

          <div className="my-5 lg:my-10">
            <p className="my-5 lg:my-10 h4 font-extrabold">
              Qualitative Analysis
            </p>
            <p className="p">
              To comprehend the demands of the users I am developing for, I
              conducted interviews. Young and old persons who were having
              trouble or were unable to get cab service for their needs were the
              major target group for this study. Although it was first thought
              that the main barrier to people visiting the clinics at the
              scheduled time was cost, other significant barriers were
              discovered during the investigation.
            </p>
          </div>
        </div>
      </section>
      <PainPoints pain_points={pain_points} />
    </>
  );
};

export default Understand;

import React from "react";
import Title from "../Reusable/Title";
import { COLORS } from "@/utils/constants";
import ResponsiveImage from "../Reusable/Image";

const Ideate = () => {
  return (
    <section className="my-10 xl:my-20">
      <div className="screen-center">
        <Title text="Ideate" color={COLORS.flet_purple} />

        <div className="my-10 flex flex-col gap-10">
          <div className="">
            <p className="h4 font-extrabold mb-5">Task Analysis</p>
          </div>

          <ResponsiveImage
            src="/Images/flet_ride/task_analysis.png"
            alt="Task Analysis Flet Ride"
          />
        </div>
      </div>
    </section>
  );
};

export default Ideate;

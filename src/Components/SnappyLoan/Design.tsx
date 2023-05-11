import React from "react";
import Title from "../Reusable/Title";
import { COLORS } from "@/utils/constants";
import ResponsiveImage from "../Reusable/Image";
interface Props {}
const SnappyDesign = (props: Props) => {
  return (
    <section className="my-10 lg:my-20">
      <div className="screen-center my-5 lg:my-10">
        <Title text="Design" color={`text-[${COLORS.green_dark}]`} />
        <p className="h4 my-5 lg:mb-10 font-extrabold">Wireframe</p>
        <p className="p">
          The desired design solutions are shown in these low quality wireframe
          displays. However, this design aims to address the problems identified
          by user experience research.
        </p>
      </div>
      <ResponsiveImage
        src="/Images/snappy_loan/snappy_wireframe.svg"
        alt="Snappy loan Wireframe"
      />
    </section>
  );
};

export default SnappyDesign;

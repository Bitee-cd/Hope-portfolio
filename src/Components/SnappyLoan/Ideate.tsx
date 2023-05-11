import React from "react";
import Title from "../Reusable/Title";
import { COLORS } from "@/utils/constants";
import ResponsiveImage from "../Reusable/Image";
interface Props {}
const Ideate = (props: Props) => {
  return (
    <section className="my-10 lg:my-20">
      <div className="screen-center">
        <Title text="Ideate" color={`text-[${COLORS.green_dark}]`} />
        <p className="h4 my-5 font-extrabold">Information Architecture</p>
        <ResponsiveImage
          src="/Images/snappy_loan/snappy_ideate.svg"
          alt="Snappy loan Ideate"
        />
      </div>
    </section>
  );
};

export default Ideate;

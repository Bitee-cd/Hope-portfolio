import React from "react";
import Title from "../Reusable/Title";
import { COLORS } from "@/utils/constants";
import ResponsiveImage from "../Reusable/Image";

const ClassicDesign = () => {
  return (
    <section className="my-10 lg:my-20">
      <div className="screen-center my-5 lg:my-10">
        <Title text="Design" color={`text-[${COLORS.classic_blue}]`} />
        <p className="h4 my-5 lg:mb-10 font-extrabold">Wireframe</p>
        <p className="p">
          I am now in the design process. This is where I quickly created the
          wireframes. Components and elements are designed more clearly and
          precisely in wireframes.
        </p>
        <div className="my-5 lg:my-10">
          <ResponsiveImage
            src="/Images/classic_park/wireframes.png"
            alt="Classic Park Wireframes"
          />
        </div>
      </div>
    </section>
  );
};

export default ClassicDesign;

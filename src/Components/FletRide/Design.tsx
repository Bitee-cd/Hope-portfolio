import React from "react";
import Title from "../Reusable/Title";
import { COLORS } from "@/utils/constants";
import { design } from "@/utils/data/flet_ride";
import ResponsiveImage from "../Reusable/Image";

const StyleDesign = () => {
  return (
    <section className="my-10 xl:my-20">
      <div className="screen-center">
        <Title text="Design" color={COLORS.flet_purple} />
      </div>
      {design.map((item, index) => (
        <div className="my-10 flex flex-col gap-10" key={index}>
          <div className="screen-center">
            <p className="h4 font-extrabold mb-5">{item.title}</p>
          </div>
          {item.image &&
            item.image.map((image, index) => (
              <ResponsiveImage
                src={image}
                key={index}
                alt={item.title || "Hope Honah Portfolio"}
              />
            ))}
        </div>
      ))}
    </section>
  );
};

export default StyleDesign;

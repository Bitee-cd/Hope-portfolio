import React from "react";
import Title from "./Title";
import { COLORS } from "@/utils/constants";
import ResponsiveImage from "./Image";
import { TitleTextImage } from "@/Interfaces/Projects";
interface Props {
  ideate: TitleTextImage[];
  title_color: string;
}
const Ideate = ({ ideate, title_color }: Props) => {
  return (
    <section className="my-10 lg:my-20">
      <div className="screen-center">
        <Title text="Ideate" color={title_color} />

        {ideate.map((list, index) => (
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

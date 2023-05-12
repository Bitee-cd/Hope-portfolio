import React from "react";
import ResponsiveImage from "./Image";
import { TitleTextImage } from "@/Interfaces/Projects";
interface Props {
  item: TitleTextImage;
}
const HeaderTextImageGroup = ({ item }: Props) => {
  return (
    <div className="">
      <p className="h5 font-semibold mb-5">{item.title}</p>
      <p className="p">{item.text}</p>
      <div className="my-5 lg:my-10 flex gap-2 lg:gap-2 justify-between">
        {item.image &&
          item.image.map((image, index) => (
            <div key={index}>
              <ResponsiveImage
                src={`/Images/snappy_loan/${image}`}
                alt={item.title}
              />
            </div>
          ))}
      </div>
    </div>
  );
};

export default HeaderTextImageGroup;

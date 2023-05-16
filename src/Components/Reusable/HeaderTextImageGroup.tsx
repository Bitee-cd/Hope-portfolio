import React from "react";
import ResponsiveImage from "./Image";
import { TitleTextImage } from "@/Interfaces/Projects";
import List from "./List";
interface Props {
  item: TitleTextImage;
  bullet_className?: string;
}
const HeaderTextImageGroup = ({ item, bullet_className }: Props) => {
  return (
    <div className="">
      <p className="h5 font-bold mb-5">{item.title}</p>
      <p className="p">{item.text}</p>
      {item.texts && (
        <ul
          className={`unordered ${bullet_className} flex flex-col gap-2 my-5`}
        >
          {item.texts.map((text) => (
            <List key={text} text={text} />
          ))}
        </ul>
      )}
      {item.image && (
        <div className="my-5 lg:my-10 flex gap-2 lg:gap-2 justify-between">
          {item.image.map((image, index) => (
            <div key={index} className="w-full h-auto">
              <ResponsiveImage
                src={`/Images${image}`}
                alt={item.title || "Hope Jonah Portfolio"}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default HeaderTextImageGroup;

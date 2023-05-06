import Ai from "@/Assets/Tools/Ai";
import Figma from "@/Assets/Tools/Figma";
import Oho1 from "@/Assets/Tools/Oho1";
import Oho2 from "@/Assets/Tools/Oho2";
import Oho3 from "@/Assets/Tools/Oho3";
import Oho4 from "@/Assets/Tools/Oho4";
import Oho5 from "@/Assets/Tools/Oho5";
import OpenAi from "@/Assets/Tools/OpenAi";
import PhotoShop from "@/Assets/Tools/PhotoShop";
import React from "react";
interface Props {}

const Tools = (props: Props) => {
  return (
    <section className="bg-sec_dark">
      <div className="screen-center flex gap-10">
        <div className="my-10">
          <p>My Tools</p>
        </div>
        <div>
          {tools.map((tool, index) => (
            <div
              key={index}
              className="bg-[#00000] w-[122px] h-[122px] rounded full flex items-center justify-center"
            >
              {tool.icon}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tools;
const tools = [
  { icon: <Figma /> },
  { icon: <PhotoShop /> },
  { icon: <Ai /> },
  { icon: <Oho1 /> },
  { icon: <OpenAi /> },
  { icon: <Oho2 /> },
  { icon: <Oho3 /> },
  { icon: <Oho4 /> },
  { icon: <Oho5 /> },
];

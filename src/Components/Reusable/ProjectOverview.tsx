import React from "react";
import Lens from "../svg/Overview/1a";
import Book from "../svg/Overview/1b";
import CheckBook from "../svg/Overview/2a";
import { OverViewData, OverViewStyle } from "@/Interfaces/Projects";
import Image from "next/image";
import Bulb from "../svg/Overview/1c";
import Clock from "../svg/Overview/2b";
import Spanner from "../svg/Overview/2c";
interface Props {
  data: OverViewData[];
  style: OverViewStyle;
}

const ProjectOverview = ({ style, data }: Props) => {
  const { color, icon_className, bullet_className } = style;
  return (
    <section>
      <div className="screen-center my-10">
        <div className="border-b border-b-black">
          <p className={`text-${color} font-black p-small`}>Project Overview</p>
        </div>
        {/* box  */}
        <div className="flex flex-col lg:flex-row lg:flex-wrap lg:justify-between my-10 lg:my-20 gap-10">
          {data.map((item, index) => (
            <div
              key={index}
              className={`flex  gap-2 ${
                index < 3 ? "lg:w-[70%]" : "lg:max-w-[25%]"
              } ${index === 3 && "lg:order-2"} ${index === 4 && "lg:order-4"} ${
                index === 5 && "lg:order-6"
              } ${index === 2 && "lg:order-5"} ${index === 1 && "lg:order-3"} `}
            >
              <div className="flex gap-2 lg:mt-5 ">
                <div className={`icon_circle  ${icon_className}`}>
                  {
                    [
                      <Lens key="lens" color={color} />,
                      <Book key="book" color={color} />,
                      <Bulb key="bulb" color={color} />,
                      <CheckBook key="checkbook" color={color} />,
                      <Clock key="clock" color={color} />,
                      <Spanner key="spanner" color={color} />,
                    ][index]
                  }
                </div>
              </div>
              <div className="">
                <p className="h4 font-extrabold">{item.title}</p>
                <div>
                  <p className="p font-normal">{item.text && item.text}</p>
                  {item.list && (
                    <ol className="mt-4">
                      {item.list.map((list, index) => (
                        <li key={index} className="flex gap-2 lg:gap-5">
                          <div
                            className={`my-auto w-[6px] lg:w-[9px] h-[6px] lg:h-[9px] rounded-full ${bullet_className}`}
                          ></div>
                          <p className="p font-normal mb-2">{list}</p>
                        </li>
                      ))}
                    </ol>
                  )}
                  {item.icons && (
                    <ul className="flex gap-3">
                      {item.icons.map((item, index) => (
                        <li key={index}>
                          <Image
                            alt="social icons"
                            src={item.link}
                            placeholder="blur"
                            blurDataURL="/Images/profile__.png"
                            width={700}
                            height={475}
                            priority
                            sizes="100vw"
                            style={{
                              width: "100%",
                            }}
                            className="object-cover h-auto"
                          />
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectOverview;

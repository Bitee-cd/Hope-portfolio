import React from "react";
import Lens from "../svg/Overview/1a";
import Book from "../svg/Overview/1b";
import CheckBook from "../svg/Overview/2a";
import { OverViewData, OverViewStyle } from "@/Interfaces/Projects";
import Image from "next/image";
import Bulb from "../svg/Overview/1c";
import Clock from "../svg/Overview/2b";
import Spanner from "../svg/Overview/2c";
import List from "./List";
import Title from "./Title";
interface Props {
  data: OverViewData[];
  style: OverViewStyle;
}

const ProjectOverview = ({ style, data }: Props) => {
  const { color, icon_className, bullet_className, text_color } = style;
  return (
    <section>
      <div className="screen-center my-10">
        <Title color={text_color} text="Project Overview" />
        {/* box  */}
        <div className="flex flex-col lg:flex-row lg:flex-wrap lg:justify-between my-10 lg:my-20 gap-y-10">
          {data.map((item, index) => (
            <div
              key={index}
              className={`flex  gap-1 lg:gap-2 ${
                index < 3 ? "lg:w-[70%]" : " lg:w-[25%] "
              } ${index === 3 && "lg:order-2"} ${index === 4 && "lg:order-4"} ${
                index === 5 && "lg:order-6"
              } ${index === 2 && "lg:order-5"} ${index === 1 && "lg:order-3"} `}
            >
              <div className="">
                <div className="flex gap-1 lg:gap-2 items-center  ">
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
                  <p className="h4 font-extrabold">{item.title}</p>
                </div>

                <div className="mt-2 lg:mt-5 flex gap-1 lg:gap-2">
                  <div className="w-[20px] lg:w-[40px]"></div>
                  <div>
                    <p className="p font-normal">{item.text && item.text}</p>
                    {item.list && (
                      <ul className={`mt-4 unordered ${bullet_className}`}>
                        {item.list.map((list, index) => (
                          <li
                            key={index}
                            className={`list p font-normal mb-2 leading-relaxed `}
                          >
                            {list}
                          </li>
                        ))}
                      </ul>
                    )}
                    {item.icons && (
                      <ul className="flex gap-3 items-center">
                        {item.icons.map((item, index) => (
                          <li key={index} className="w-[30px] lg:w-[68px] ">
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
                              className="object-contain h-[36px] lg:h-[70px]"
                            />
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
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

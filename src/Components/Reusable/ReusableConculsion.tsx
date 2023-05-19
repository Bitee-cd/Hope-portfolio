import React from "react";
import HeaderTextImageGroup from "./HeaderTextImageGroup";
import { Conclusion, TitleTextImage } from "@/Interfaces/Projects";
interface Props {
  conclusion: Conclusion;
}
const ReusableConclusion = ({ conclusion }: Props) => {
  return (
    <section>
      <div className="screen-center ">
        <div className="my-5 lg:my-10 ">
          {conclusion.data &&
            conclusion.data.map((item, index) => (
              <HeaderTextImageGroup item={item} key={index} />
            ))}
        </div>
        <div className="my-5 lg:my-10">
          <p className="h4 font-extrabold ">Impact</p>
          <div className=" custom_border my-10">
            <div className="w-[90%] mx-auto flex flex-col lg:flex-row lg:flex-wrap gap-5 lg:gap-10 justify-between xl:gap-x-20 my-10 xl:my-20">
              {conclusion?.impact.map((item, index) => (
                <div
                  className={`lg:w-[45%] ${index === 1 && " lg:order-2"} ${
                    index === 3 && " lg:order-4"
                  } `}
                  key={index}
                >
                  <p className="h5 font-bold mb-5">{item.title}</p>
                  <div className="p">{item.text}</div>
                  <div className="flex flex-col gap-5 lg:gap-10">
                    {item.data &&
                      item.data.map((list, index) => (
                        <div className="" key={index}>
                          <p className="h5 font-bold mb-5">{list.title}</p>
                          <div className="p">{list.text}</div>
                        </div>
                      ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="my-10 lg:my-20">
          {conclusion?.lesson.map((item, index) => (
            <div className="" key={index}>
              <p className="h4 font-bold mb-2 lg:mb-5">{item.title}</p>
              <div className="my-5 lg:my-10 flex flex-col gap-5 lg:gap-10">
                {item.texts &&
                  item.texts.map((text, index) => (
                    <p key={index} className="p ">
                      {text}
                    </p>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReusableConclusion;

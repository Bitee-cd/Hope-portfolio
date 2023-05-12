import React from "react";
import Title from "../Reusable/Title";
import { COLORS } from "@/utils/constants";
import { conclusion, impact, lesson, pain_points } from "@/utils/data/snappy";
import HeaderTextImageGroup from "../Reusable/HeaderTextImageGroup";
interface Props {}
const Conclusion = (props: Props) => {
  return (
    <section className="my-2">
      <div className="screen-center">
        <Title text="Conclusion: Test" color={`text-[${COLORS.blue_dark}]`} />
        <div className="div">
          <p className="h4 font-extrabold">Usability testing</p>
          <p className="p">
            I conducted many moderated usability tests with a sizable number of
            individuals of various ages and gender. My research results showed
            what needs to be changed in the prototype to provide users with a
            seamless experience—sessions meetings for testing with users who
            represent the intended market. Unmoderated concept testing were also
            carried out.
          </p>
        </div>
        <div className="my-10 lg:my-20">
          {conclusion.map((item, index) => (
            <HeaderTextImageGroup item={item} key={index} />
          ))}
        </div>
        <div className="my-5 lg:my-10">
          <p className="h4 font-extrabold ">Impact</p>
          <div className=" custom_border my-10">
            <div className="w-[90%] mx-auto flex flex-col lg:flex-row lg:flex-wrap gap-10 justify-between xl:gap-x-20 my-10 xl:my-20">
              {impact.map((item, index) => (
                <div
                  className={`lg:w-[45%] ${index === 1 && " lg:order-2"} ${
                    index === 4 && " lg:order-5"
                  } `}
                  key={index}
                >
                  <p className="h5 font-bold mb-5">{item.title}</p>
                  <div className="p">{item.text}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="my-10 lg:my-20">
          {lesson.map((item, index) => (
            <div className="" key={index}>
              <p className="h4 font-bold mb-2 lg:mb-5">{item.title}</p>
              <div className="my-5 lg:my-10 flex flex-col gap-5">
                {item.text.map((text, index) => (
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

export default Conclusion;

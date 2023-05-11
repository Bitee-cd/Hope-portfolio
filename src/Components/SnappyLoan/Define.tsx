import React from "react";
import Title from "../Reusable/Title";
import { COLORS } from "@/utils/constants";
import { define, prioritization } from "@/utils/data/snappy";
import Image from "next/image";
import List from "../Reusable/List";
import ResponsiveImage from "../Reusable/Image";
interface Props {}
const Define = (props: Props) => {
  return (
    <section className="my-10 xl:my-20">
      <div className="screen-center">
        <Title text="Define" color={`text-[${COLORS.green_dark}]`} />
        {define.map((item, index) => (
          <div className="my-10 flex flex-col gap-10" key={index}>
            <div className="">
              <p className="h4 font-extrabold mb-5">{item.title}</p>
              <p className="p">{item.text}</p>
            </div>
            {item.images.map((image, index) => (
              <div key={index} className="my-5">
                <ResponsiveImage src={image} alt={item.title} />
              </div>
            ))}
          </div>
        ))}
        <div className="my-10">
          <p className="h4 font-extrabold mb-5">Prioritization</p>
          <div className="my-5 custom_border">
            <div className="w-[90%] mx-auto justify-between flex flex-col lg:flex-row lg:flex-wrap gap-10  my-10 xl:my-20">
              {prioritization.map((item, index) => (
                <div className="lg:w-[45%]" key={index}>
                  <p className="h5 font-bold mb-5">{item.title}</p>
                  <ul className="unordered">
                    {item.text.map((text, index) => (
                      <List key={index} text={text} />
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Define;

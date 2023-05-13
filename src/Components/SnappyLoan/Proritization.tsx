import React from "react";
import List from "../Reusable/List";
import { prioritization } from "@/utils/data/snappy";

const Proritization = () => {
  return (
    <section className="my-10 xl:my-20">
      <div className="screen-center">
        <div className="my-10">
          <p className="h4 font-extrabold mb-5">Prioritization</p>
          <div className="my-5 custom_border">
            <div className="w-[90%] mx-auto justify-between px-2 flex flex-col lg:flex-row lg:flex-wrap gap-5 lg:gap-10  my-10 xl:my-20">
              {prioritization.map((item, index) => (
                <div
                  className={`lg:w-[45%] ${index === 1 && " lg:order-2"} ${
                    index === 2 && " lg:order-5"
                  }`}
                  key={index}
                >
                  <p className="h5 font-bold mb-2 lg:mb-5">{item.title}</p>
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

export default Proritization;

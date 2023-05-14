import { ui_design } from "@/utils/data/ui_design";
import React from "react";
import ResponsiveImage from "../Reusable/Image";
import Pagination from "../Reusable/Pagination";
import { pages } from "@/utils/constants";

const UiDesignScreen = () => {
  return (
    <>
      <section className="my-10 lg:my-20">
        <div className="screen-center">
          <div className="flex flex-col gap-10 lg:gap-20">
            {ui_design.map((item, index) => (
              <div key={index} className="my-5 lg:my-10">
                <p className="h5  font-extrabold">{item.title}</p>
                <p className={`h2 font-extrabold ${item.color} lg:mb-10`}>
                  {item.text}
                </p>
                <div className="w-full">
                  {item.image?.map((image, index) => (
                    <div className="my-5" key={index}>
                      <ResponsiveImage
                        src={image}
                        alt={`Ideate ${item.title}`}
                      />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Pagination
        prev={`${pages.project}${pages.flet_ride}`}
        next={`${pages.project}${pages.snappy_loan}`}
      />
    </>
  );
};

export default UiDesignScreen;

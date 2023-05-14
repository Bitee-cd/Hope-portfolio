import React from "react";
import ResponsiveImage from "../Reusable/Image";
import { mockups } from "@/utils/data/flet_ride";

const Mockups = () => {
  return (
    <section className="my-10 xl:my-20">
      <div className="screen-center">
        <div>
          <p className="h4 font-extrabold mb-5">High Fidelity Mockups</p>
          <p className="p mb-5">
            The product was intended to be simple, straightforward, and
            compatible with various devices, so high-fidelity prototypes were
            created for IOS and Android devices.
          </p>
        </div>
      </div>
      {mockups.map((item, index) => (
        <div className="my-10 flex flex-col gap-10" key={index}>
          <div className="screen-center">
            <p className="h4 font-extrabold text-center mb-5">{item.title}</p>
          </div>
          {item.image &&
            item.image.map((image, index) => (
              <div key={index} className="lg:my-10 my-5 mx-auto w-[80%]">
                <ResponsiveImage
                  src={image}
                  alt={item.title || "Hope Honah Portfolio"}
                />
              </div>
            ))}
        </div>
      ))}
    </section>
  );
};

export default Mockups;

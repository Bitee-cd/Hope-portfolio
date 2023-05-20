import React from "react";
import ResponsiveImage from "../Reusable/Image";
import { mockups } from "@/utils/data/flet_ride";

const Mockups = () => {
  return (
    <section className="my-5 lg:my-10">
      <div className="screen-center">
        <div>
          <p className="h4 font-extrabold mb-5">High Fidelity Mockups</p>
          <p className="p mb-5">
            The product was intended to be simple, straightforward, and
            compatible with various devices, so high-fidelity prototypes were
            created for IOS and Android devices.
          </p>
        </div>
        <div className=" flex flex-col gap-5 lg:gap-10">
          {mockups.map((item, index) => (
            <div className="" key={index}>
              <p className="h4 font-extrabold text-center mb-5">{item.title}</p>

              {item.image &&
                item.image.map((image, index) => (
                  <div
                    key={index}
                    className="lg:my-10 my-5 mx-auto w-[70%] h-[auto]"
                  >
                    <ResponsiveImage
                      src={image}
                      alt={item.title || "Hope Honah Portfolio"}
                    />
                  </div>
                ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Mockups;

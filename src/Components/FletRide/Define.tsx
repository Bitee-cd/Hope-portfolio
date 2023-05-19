import React from "react";
import ResponsiveImage from "../Reusable/Image";
import Title from "../Reusable/Title";
import { COLORS } from "@/utils/constants";
import { define } from "@/utils/data/flet_ride";

const Define = () => {
  return (
    <section className="my-10 xl:my-20">
      <div className="screen-center">
        <Title text="Define" color={`text-[${COLORS.flet_purple}]`} />
        {define.map((item, index) => (
          <div className="my-10 flex flex-col gap-10" key={index}>
            <div className="">
              <p className="h4 font-extrabold mb-5">{item.title}</p>
            </div>
            {item.image &&
              item.image.map((image, index) => (
                <ResponsiveImage
                  src={image}
                  key={index}
                  alt={item.title || "Hope Honah Portfolio"}
                />
              ))}
          </div>
        ))}

        {/* story boarding  */}
        <div className="lg:my-10 flex flex-col gap-5 lg:gap-10">
          <div className="">
            <p className="h4 font-extrabold mb-5">Story Boarding</p>
          </div>
          <div className="w-full">
            <div className="hidden md:block w-full">
              <ResponsiveImage
                src="/Images/flet_ride/story_boarding.png"
                alt="Story Onboarding Flet Ride"
              />
            </div>
            <div className="md:hidden  w-full">
              <ResponsiveImage
                src="/Images/flet_ride/story_boarding_mobile.png"
                alt="Story Onboarding Flet Ride"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Define;

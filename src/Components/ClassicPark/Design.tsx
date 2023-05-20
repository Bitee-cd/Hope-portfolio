import React from "react";
import Title from "../Reusable/Title";
import { COLORS } from "@/utils/constants";
import ResponsiveImage from "../Reusable/Image";
import { user_interface, wireframes } from "@/utils/data/classic_park";
import HeaderTextImageGroup from "../Reusable/HeaderTextImageGroup";

const ClassicDesign = () => {
  return (
    <section className="my-5 lg:my-10">
      <div className="screen-center my-5 lg:my-10">
        <Title text="Design" color={`text-[${COLORS.classic_blue}]`} />
        <div className="my-5 lg:my-10 flex flex-col gap-10">
          {wireframes.slice(0, 2).map((item, index) => (
            <div key={index}>
              <p className="h4 my-5 lg:mb-10 font-extrabold">{item.title}</p>
              <p className="p">{item.text}</p>

              {item.image &&
                item.image.map((image, index) => (
                  <div className="my-5 lg:my-10 w-full" key={index}>
                    <ResponsiveImage
                      src={image}
                      alt={`Classic Park ${item.title}`}
                    />
                  </div>
                ))}
            </div>
          ))}
        </div>

        {/* app logo  */}
        {wireframes[2] && (
          <div>
            <p className="h4 my-5 lg:mb-10 font-extrabold">
              {wireframes[2].title}
            </p>
            <p className="p">{wireframes[2].text}</p>
            <div className="my-5 lg:my-10">
              <div className="w-[60%] mx-auto">
                <ResponsiveImage
                  src="/Images/classic_park/app_logo.png"
                  alt="Classic Park App Logo"
                />
              </div>
            </div>
          </div>
        )}

        {/* user Interface guidelines  */}
        <div className="my-10 lg:my-20 flex flex-col gap-10">
          <p className="h4 mb-5 font-extrabold">User Interface Guidelines</p>
          {user_interface.map((item, index) => (
            <div key={index}>
              <p className="h5 my-5 lg:mb-10 font-extrabold">{item.title}</p>
              <p className="p">{item.text}</p>
              {item.image &&
                item.image.map((image, index) => (
                  <div className="my-5 lg:my-10 w-full" key={index}>
                    <ResponsiveImage
                      src={image}
                      alt={`Classic Park ${item.title}`}
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

export default ClassicDesign;

import { screens } from "@/utils/data/classic_park";
import React from "react";
import ResponsiveImage from "../Reusable/Image";

const VisualDesign = () => {
  return (
    <section className="my-5 lg:my-10">
      <div className="screen-center">
        {/* visual design  */}
        <div className="my-10">
          <p className="my-10 h4 font-extrabold">Visual Design</p>
          <p className="p">
            I turned the wireframes into final screens. I made the UI design
            basic and intuitive with a user-centered approach. The design shown
            below offers a straightforward onboarding and booking process.
          </p>
        </div>

        {/* screens  */}
        {screens.map((list, index) => (
          <div key={index} className="my-5 lg:my-10">
            <p className="h5 my-5 font-semibold">{list.title}</p>
            <p className="p mb-5 lg:mb-10">{list.text}</p>
            {list.image &&
              list.image?.map((item, index) => (
                <div className="my-5" key={index}>
                  <ResponsiveImage src={item} alt={`Ideate ${list.title}`} />
                </div>
              ))}
          </div>
        ))}
      </div>
    </section>
  );
};
export default VisualDesign;

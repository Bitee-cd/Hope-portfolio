import React from "react";
import Hero from "../ClassicPark/Hero";
import ProjectOverview from "../Reusable/ProjectOverview";
import { classic_data, classic_style } from "@/utils/data/classic_park";
import Design from "../Home/Design";
import Understand from "../ClassicPark/Understand";
import { COLORS, pages } from "@/utils/constants";
import { define } from "@/utils/data/classic_park";
import Define from "../Reusable/Define";
import Ideate from "../ClassicPark/Ideate";
import ClassicDesign from "../ClassicPark/Design";
import Pagination from "../Reusable/Pagination";
import Conclusion from "../ClassicPark/Conclusion";
import VisualDesign from "../ClassicPark/VisualDesign";

const ClassicParkScreen = () => {
  return (
    <>
      <Hero />
      <ProjectOverview style={classic_style} data={classic_data} />
      <Design />
      <Understand />
      <Define define={define} color={`text-[${COLORS.classic_blue}]`} />
      <Ideate />
      <ClassicDesign />

      <VisualDesign />
      <Conclusion />
      <div className="screen-center">
        <p className="h4 font-extrabold my-5">Prototype</p>
        <div className="relative pt-[51.53%]">
          <iframe
            src="https://player.vimeo.com/video/830594002?h=a56b2da76b&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
            frameBorder="0"
            width={"100%"}
            height={"auto"}
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
            title="Classic Park Prototype"
            className="absolute top-0 right-0 w-full h-full"
          ></iframe>
        </div>
      </div>
      <Pagination
        prev={`${pages.project}${pages.libraria}`}
        next={`${pages.project}${pages.flet_ride}`}
      />
    </>
  );
};

export default ClassicParkScreen;

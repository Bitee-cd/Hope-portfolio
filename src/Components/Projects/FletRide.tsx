import React from "react";
import Hero from "../FletRide/Hero";
import ProjectOverview from "../Reusable/ProjectOverview";
import { flet_data, flet_style } from "@/utils/data/flet_ride";
import Design from "../Home/Design";
import Understand from "../FletRide/Understand";
import Pagination from "../Reusable/Pagination";
import { pages } from "@/utils/constants";
import Conclusion from "../FletRide/Conclusion";
import Define from "../FletRide/Define";
import Ideate from "../FletRide/Ideate";
import StyleDesign from "../FletRide/Design";
import Mockups from "../FletRide/Mockups";
import FletProjectOverview from "../FletRide/OverView";

const FletRideScreen = () => {
  return (
    <>
      <Hero />
      <FletProjectOverview />
      <Design />
      <Understand />
      <Define />
      <Ideate />
      <StyleDesign />
      <Mockups />
      <Conclusion />
      <div className="screen-center">
        <p className="h4 font-extrabold my-5">Prototype</p>
        <div className="relative pt-[44.66%]">
          <video
            src="https://player.vimeo.com/video/830033055?h=10b55a3c75&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
            width={"100%"}
            height={"auto"}
            // allow="autoplay; fullscreen; picture-in-picture"
            autoPlay
            // allowFullScreen
            title="Flet Ride Prototype"
            className="absolute top-0 right-0 w-full h-full"
          ></video>
        </div>
      </div>
      <Pagination
        prev={`${pages.project}${pages.classic_park}`}
        next={`${pages.project}${pages.ui_design}`}
      />
    </>
  );
};

export default FletRideScreen;

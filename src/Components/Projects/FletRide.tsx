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
      <Conclusion />
      <Define />
      <Ideate />
      <StyleDesign />
      <Mockups />
      <Conclusion />
      <Pagination
        prev={`${pages.project}${pages.classic_park}`}
        next={`${pages.project}${pages.ui_design}`}
      />
    </>
  );
};

export default FletRideScreen;

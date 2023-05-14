import React from "react";
import Hero from "../FletRide/Hero";
import ProjectOverview from "../Reusable/ProjectOverview";
import { flet_data, flet_style } from "@/utils/data/flet_ride";
import Design from "../Home/Design";
import Understand from "../FletRide/Understand";
import Pagination from "../Reusable/Pagination";
import { pages } from "@/utils/constants";
import Conclusion from "../FletRide/Conclusion";

const FletRideScreen = () => {
  return (
    <>
      <Hero />
      <ProjectOverview style={flet_style} data={flet_data} />
      <Design />
      <Understand />
      <Conclusion />
      <Pagination
        prev={`${pages.project}${pages.classic_park}`}
        next={`${pages.project}${pages.ui_design}`}
      />
    </>
  );
};

export default FletRideScreen;

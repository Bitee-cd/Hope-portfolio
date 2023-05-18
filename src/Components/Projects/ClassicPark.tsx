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
      <Pagination
        prev={`${pages.project}${pages.libraria}`}
        next={`${pages.project}${pages.flet_ride}`}
      />
    </>
  );
};

export default ClassicParkScreen;

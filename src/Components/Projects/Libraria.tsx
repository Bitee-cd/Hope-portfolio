import React from "react";
import Hero from "../Libraria/Hero";
import ProjectOverview from "../Reusable/ProjectOverview";
import {
  define,
  ideate,
  libraria_data,
  libraria_style,
  pain_points,
} from "@/utils/data/libraria";
import Design from "../Home/Design";
import Pagination from "../Reusable/Pagination";
import { COLORS, pages } from "@/utils/constants";
import Understand from "../Libraria/Understand";
import Research from "../Libraria/Research";
import PainPoints from "../Reusable/PainPoints";
import Define from "../Reusable/Define";
import Ideate from "../Reusable/Ideate";
import LibrariaDesign from "../Libraria/Design";
import FinalDesign from "../Libraria/FinalDesign";
import Conclusion from "../Libraria/Conclusion";

const LibrariaScreen = () => {
  return (
    <>
      <Hero />
      <ProjectOverview style={libraria_style} data={libraria_data} />
      <Design />
      <Understand />
      <Research />
      <PainPoints pain_points={pain_points} />
      <Define define={define} color={`text-[${COLORS.libraria_green}]`} />
      <Ideate title_color={`text-[${COLORS.libraria_green}]`} ideate={ideate} />
      <LibrariaDesign />
      <FinalDesign />
      <Conclusion />
      <Pagination
        prev={`${pages.project}${pages.snappy_loan}`}
        next={`${pages.project}${pages.classic_park}`}
      />
    </>
  );
};

export default LibrariaScreen;

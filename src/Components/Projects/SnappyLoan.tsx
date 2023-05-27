import Image from "next/image";
import React from "react";
import Overview from "../SnappyLoan/Overview";
import ProjectOverview from "../Reusable/ProjectOverview";
import Design from "../Home/Design";
import {
  define,
  ideate,
  pain_points,
  snappy_data,
  snappy_style,
} from "@/utils/data/snappy";
import Understand from "../SnappyLoan/Understand";
import PainPoints from "../Reusable/PainPoints";
import Define from "../Reusable/Define";
import Ideate from "../Reusable/Ideate";
import SnappyDesign from "../SnappyLoan/Design";
import FinalDesign from "../SnappyLoan/FinalDesign";
import ResponsiveImage from "../Reusable/Image";
import Conclusion from "../SnappyLoan/Conclusion";
import Pagination from "../Reusable/Pagination";
import { COLORS, pages } from "@/utils/constants";
import Proritization from "../SnappyLoan/Proritization";

interface Props {}
const SnappyLoan = (props: Props) => {
  return (
    <>
      <div className="hidden lg:block">
        <ResponsiveImage
          src="/Images/projects/snappy.png"
          alt="Snappy Loan Project"
        />
      </div>
      <div className="lg:hidden">
        <ResponsiveImage
          src="/Images/snappy_loan/snappy_mobile.svg"
          alt="Snappy Loan Project"
        />
      </div>
      <ProjectOverview style={snappy_style} data={snappy_data} />
      <Design />
      <Understand />
      <PainPoints pain_points={pain_points} />
      <Define define={define} color={`text-[${COLORS.green_dark}]`} />
      <Proritization />
      <Ideate title_color={`text-[${COLORS.green_dark}]`} ideate={ideate} />
      <SnappyDesign />
      <FinalDesign />
      <Conclusion />
     
      <Pagination
        prev={`${pages.project}${pages.ui_design}`}
        next={`${pages.project}${pages.libraria}`}
      />
    </>
  );
};

export default SnappyLoan;

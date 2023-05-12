import Image from "next/image";
import React from "react";
import Overview from "../SnappyLoan/Overview";
import ProjectOverview from "../Reusable/ProjectOverview";
import Design from "../Home/Design";
import { snappy_data, snappy_style } from "@/utils/data/snappy";
import Understand from "../SnappyLoan/Understand";
import PainPoints from "../SnappyLoan/PainPoints";
import Define from "../SnappyLoan/Define";
import Ideate from "../SnappyLoan/Ideate";
import SnappyDesign from "../SnappyLoan/Design";
import FinalDesign from "../SnappyLoan/FinalDesign";
import ResponsiveImage from "../Reusable/Image";
import Conclusion from "../SnappyLoan/Conclusion";
import Pagination from "../Reusable/Pagination";
import { pages } from "@/utils/constants";

interface Props {}
const SnappyLoan = (props: Props) => {
  return (
    <>
      <ResponsiveImage
        src="/Images/projects/snappy_loan.png"
        alt="Snappy Loan Project"
      />
      <ProjectOverview style={snappy_style} data={snappy_data} />
      <Design />
      <Understand />
      <PainPoints />
      <Define />
      <Ideate />
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

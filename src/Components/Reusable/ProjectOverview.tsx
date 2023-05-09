import React from "react";
import Lens from "../svg/Overview/1a";
import Book from "../svg/Overview/1b";
import CheckBook from "../svg/Overview/2a";
import { OverViewData } from "@/Interfaces/Projects";
interface Props {
  color: string;
}
const data: OverViewData[] = [
  {
    title: "Overview",
    color: "#21B44A",
    className: "green",
    text: "In order to assist users in achieving their personal and professional goals, Snappy is a digital lending application that employs artificial intelligence to forecast user behaviour on loan offers.",
  },
  { title: "My Role", text: "Solo UI/UX Designer" },
  {
    title: "The problem",
    text: "The loan enrollment procedure is becoming more laborious and time-consuming for users. Users are initially asked to fill out sensitive information, which many find uncomfortable.",
  },
  { title: "Duration", text: "Nov 2022 - Feb 2023" },
  {
    title: "Goal and Objectives",
    text: "The project's objectives include making the app user-friendly, making it easier for users to apply for loans, repay loans, and keep track of their debt. The goals are as follows in the interim.",
    list: [
      "Make the registration process simple, brief and easy.",
      "Users will have the option to add and remove numerous account numbers at any time.",
      "Users will be able to track their loans and view loans that have been granted and denied.",
    ],
  },
  {
    title: "Tools",
    icons: [
      { link: "/svg/figma_colored.svg" },
      { link: "/svg/google_docs.svg" },
      { link: "/svg/google_meet.svg" },
    ],
  },
];
const ProjectOverview = ({ color }: Props) => {
  return (
    <section>
      <div className="screen-center my-10">
        <div className="border-b border-b-black">
          <p className={`text-${color} font-black p-small`}>Project Overview</p>
        </div>
        {/* box  */}
        <div className="flex flex-col lg:flex-row my-10 gap-3">
          <div className="lg:flex-1 flex gap-2">
            {/* over view  */}
            <div className="flex gap-2 mt-5">
              <div className="icon_circle border-[#21b44a]  bg-[#dbf8ea]  ">
                <Book color="#21B44A" />
              </div>
            </div>
            <div className="">
              <p className="h4 font-extrabold">Overview</p>
              <p className="p font-normal">
                In order to assist users in achieving their personal and
                professional goals, Snappy is a digital lending application that
                employs artificial intelligence to forecast user behaviour on
                loan offers.
              </p>
            </div>
          </div>
          {/* my role  */}
          <div className="flex gap-2 w-1/3 justi">
            <div className="flex gap-2 mt-5">
              <div className="icon_circle border-[#21b44a]  bg-[#dbf8ea]  ">
                <CheckBook color="#21B44A" />
              </div>
            </div>
            <div className="">
              <p className="h4 font-extrabold">My Role</p>
              <p className="p font-normal">Solo UI/UX Designer</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectOverview;

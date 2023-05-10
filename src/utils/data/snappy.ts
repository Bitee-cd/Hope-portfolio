import { OverViewData, OverViewStyle } from "@/Interfaces/Projects";

export const snappy_data: OverViewData[] = [
  {
    title: "Overview",

    text: "In order to assist users in achieving their personal and professional goals, Snappy is a digital lending application that employs artificial intelligence to forecast user behaviour on loan offers.",
  },
  {
    title: "The problem",
    text: "The loan enrollment procedure is becoming more laborious and time-consuming for users. Users are initially asked to fill out sensitive information, which many find uncomfortable.",
  },
  {
    title: "Goal and Objectives",
    text: "The project's objectives include making the app user-friendly, making it easier for users to apply for loans, repay loans, and keep track of their debt. The goals are as follows in the interim.",
    list: [
      "Make the registration process simple, brief and easy.",
      "Users will have the option to add and remove numerous account numbers at any time.",
      "Users will be able to track their loans and view loans that have been granted and denied.",
    ],
  },
  { title: "My Role", text: "Solo UI/UX Designer" },
  { title: "Duration", text: "Nov 2022 - Feb 2023" },
  {
    title: "Tools",
    icons: [
      { link: "/svg/figma_colored.svg" },
      { link: "/svg/google_docs.svg" },
      { link: "/svg/google_meet.svg" },
    ],
  },
];
export const snappy_style: OverViewStyle = {
  color: "#21B44A",
  className: "green",
  icon_className: "icon_green",
  bullet_className: "bullet_green",
};

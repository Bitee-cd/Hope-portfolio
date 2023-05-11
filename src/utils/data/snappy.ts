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
  text_color: "text-[#21B44A]",
  className: "green",
  icon_className: "icon_green",
  bullet_className: "bullet_green",
};

export const understand_questions = [
  "Is the registration process tedious?",
  "How often do you use the loan app?",
  "Do you feel secured releasing sensitive information?",
  "Do you feel comfortable releasing your personal information before getting a loan? ",
  "Do you get your loan immediately when you apply ?",
];
export const pain_points = [
  {
    title: "Lack of trust",
    text: "Many users are worried with giving out their sensitive information without knowing if the loan will be granted. This long process of registration discourage users to even attempt to get loans.",
  },
  {
    title: "Complex User Interface",
    text: "Most users complain on how to navigate through the apps and carry out their activities successfully  which frustrate them",
  },
  {
    title: "Late arrival of loans",
    text: "Users complain about loans not disbursed to their account immediately and sometimes loans are not disbursed but the will be notify that their loans are approved.",
  },
  {
    title: "Network issues",
    text: "Most time the app crashes. In some cases the apps does not allow users to repay their loans online rather offline which is frustrating.",
  },
];
export const define = [
  {
    title: "User Persona",
    text: "I made a representatives based on the information I collected from interviewing users and reviews in order to gain a better understanding of their concerns and needs. I can now come up with better concepts.",
    images: [
      "/Images/snappy_loan/user_halima.svg",
      "/Images/snappy_loan/user_mandela.svg",
    ],
  },
  {
    title: "User Journey",
    text: "I designed a user journey map based on the user personas to capture the pertinent situations and pain points users may encounter after chatting with numerous target consumers about their real-life expectations and experiences.",
    images: ["/Images/snappy_loan/journey_halima.svg"],
  },
];

export const prioritization = [
  {
    title: "Sign up process",
    text: [
      "Users will not fill in their information till they explore the app and have need to apply for loans",
    ],
  },
  {
    title: "Improved UI",
    text: [
      "Make sure the User interface is appealing and easy to navigate through",
    ],
  },
  {
    title: "Loan Process",
    text: [
      "Make the loan application process simple and easy.",
      "Implement a loan level feature for users to see their next level of borrowing.",
    ],
  },
  {
    title: "Repayment Process",
    text: [
      "Make the repayment easy by providing either payment with card or bank transfer.",
    ],
  },
  {
    title: "Sign up process",
    text: [
      "Provide customer care support service for users to complain about any glitch that may arise",
    ],
  },
];
export const final_design_impementation = [
  {
    title: "Onboarding, Sign up and Login Screens",
    text: "The onboarding screen(s) are intended to help users get a basic understanding of the application, while the splash screen displays the branding for the app. The registration procedure was intended to be quick and easy, without too many steps. I moved the verification process to when a user needs to apply for a loan after going through the app.",
    image: "onboarding.svg",
  },
  {
    title: "Loan Verification",
    text: "The user is informed about the loan verification procedure form and the time it will take upon registration. This only applies to first-time borrowers who want to apply for a loan. However, it is an important step that must be taken before a user asks for a loa",
    image: "verification.svg",
  },
  {
    title: "Loan Application",
    text: "Upon loan verification, the user successfully apply for loan provided calculated by AI with the information provided by the user.",
    image: "application.svg",
  },
  {
    title: "Repay Loan",
    text: "Users are able to repay their loans with ease. Two repayment options was provided.",
    image: "repay.svg",
  },
  {
    title: "Other Screens",
    image: "other.svg",
  },
  {
    title: "Empty State",
    image: "empty.svg",
  },
];

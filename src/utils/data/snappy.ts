import Ideate from "@/Components/Reusable/Ideate";
import {
  Conclusion,
  OverViewData,
  OverViewStyle,
  TitleTextImage,
} from "@/Interfaces/Projects";

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
  icon_className: "border-[#21b44a] bg-[#dbf8ea]",
  bullet_className: "snappy_bullet",
};

export const understand_questions = [
  "Is the registration process tedious?",
  "How often do you use the loan app?",
  "Do you feel secured releasing sensitive information?",
  "Do you feel comfortable releasing your personal information before getting a loan? ",
  "Do you get your loan immediately when you apply ?",
];
const list: TitleTextImage[] = [
  {
    title: "Lack of trust",
    text: "Many users are worried with giving out their sensitive information without knowing if the loan will be granted. This long process of registration discourage users to even attempt to get loans.",
  },
  {
    title: "Late arrival of loans",
    text: "Users complain about loans not disbursed to their account immediately and sometimes loans are not disbursed but the will be notify that their loans are approved.",
  },
  {
    title: "Complex User Interface",
    text: "Most users complain on how to navigate through the apps and carry out their activities successfully  which frustrate them",
  },

  {
    title: "Network issues",
    text: "Most time the app crashes. In some cases the apps does not allow users to repay their loans online rather offline which is frustrating.",
  },
];
export const pain_points = {
  title:
    "After completing the interview and user reviews on Google play store and apple store, the following are the pain points discovered:",
  list: list,
};

export const define = [
  {
    title: "User Persona",
    text: "I made a representatives based on the information I collected from interviewing users and reviews in order to gain a better understanding of their concerns and needs. I can now come up with better concepts.",
    image: [
      "/Images/snappy_loan/user_halima.png",
      "/Images/snappy_loan/user_mandela.png",
    ],
  },
  {
    title: "User Journey",
    text: "I designed a user journey map based on the user personas to capture the pertinent situations and pain points users may encounter after chatting with numerous target consumers about their real-life expectations and experiences.",
    image: ["/Images/snappy_loan/journey_halima.svg"],
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
    title: "Loan Process",
    text: [
      "Make the loan application process simple and easy.",
      "Implement a loan level feature for users to see their next level of borrowing.",
    ],
  },
  {
    title: "Customer Care",
    text: [
      "Provide customer care support service for users to complain about any glitch that may arise",
    ],
  },
  {
    title: "Improved UI",
    text: [
      "Make sure the User interface is appealing and easy to navigate through",
    ],
  },
  {
    title: "Repayment Process",
    text: [
      "Make the repayment easy by providing either payment with card or bank transfer.",
    ],
  },
];
export const final_design_impementation: TitleTextImage[] = [
  {
    title: "Onboarding, Sign up and Login Screens",
    text: "The onboarding screen(s) are intended to help users get a basic understanding of the application, while the splash screen displays the branding for the app. The registration procedure was intended to be quick and easy, without too many steps. I moved the verification process to when a user needs to apply for a loan after going through the app.",
    image: ["/snappy_loan/onboarding_.png"],
  },
  {
    title: "Loan Verification",
    text: "The user is informed about the loan verification procedure form and the time it will take upon registration. This only applies to first-time borrowers who want to apply for a loan. However, it is an important step that must be taken before a user asks for a loan",
    image: ["/snappy_loan/verification.png"],
  },
  {
    title: "Loan Application",
    text: "Upon loan verification, the user successfully apply for loan provided calculated by AI with the information provided by the user.",
    image: ["/snappy_loan/application.png"],
  },
  {
    title: "Repay Loan",
    text: "Users are able to repay their loans with ease. Two repayment options was provided.",
    image: ["/snappy_loan/repay.png"],
  },
  {
    title: "Other Screens",
    image: ["/snappy_loan/other.svg"],
  },
  {
    title: "Empty State",
    image: ["/snappy_loan/empty.svg"],
  },
];
const impact: TitleTextImage[] = [
  {
    title: "SEQ AVG.",
    text: "A 6.0 Average Score",
  },
  {
    data: [
      {
        title: "NPS Score",
        text: "85% NPS score",
      },
      {
        title: "Completion Rate AVG.",
        text: "A 90 % Average Score",
      },
    ],
  },
  {
    title: "SUS AVG.",
    text: "A 85  Average Score",
  },
  {
    title: "WHAT DOES THIS MEAN",
    text: "Regarding the business concern, these figures showed that a larger group of users could successfully execute difficult activities, enhancing the system's usability and encouraging wider adoption.",
  },
];

const lesson = [
  {
    title: "Lesson Learned",
    texts: [
      "Receiving comments from prospective users and making all the necessary adjustments was a satisfying experience.",
      "The process of developing a product from its first design concept to its finished, functional state is lengthy and exciting.",
      "I gained the capacity to distinguish between my own presumptions and the results of the usability testing and user interviews.",
    ],
  },

  {
    title: "Next Step",
    texts: [
      "To ensure that the users like the product and that the pain points have been properly addressed, more usability studies should be conducted. A design is never final, so I'd like to make the required adjustments based on the results of additional usability tests.",
    ],
  },
];
const data = [
  {
    title: "Onboarding screens",
    text: "After conducting an A/B test with the users, a few modifications to the onboarding page were made in order to simplify it and eliminate repetition. The application's information was designed on a single screen, sliding in at a 400ms rate. Instead of observing or bypassing the entire process, users simply swipe the button to proceed with the application.The majority of prospective users prefered the new design over the previous one.",
    image: ["/snappy_loan/onboarding.png"],
  },
  {
    title: "Home Screen",
    text: "The home screen has undergone a few modifications for convenience. All of the buttons' sizes were changed, and a new, specially made button was made for Transaction history. The majority of prospective users preferred the new design over the previous one.",
    image: ["/snappy_loan/home_screen.png"],
  },
];
export const conclusion: Conclusion = {
  data: data,
  impact: impact,
  lesson: lesson,
};
export const ideate: TitleTextImage[] = [
  {
    title: "Information Architecture",
    image: ["/Images/snappy_loan/information_architecture.png"],
  },
];

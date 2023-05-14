import {
  Conclusion,
  OverViewData,
  OverViewStyle,
  TitleTextImage,
} from "@/Interfaces/Projects";

export const classic_data: OverViewData[] = [
  {
    title: "Overview",

    text: "Nowadays, parking is a major issue. Cities are becoming bigger by the day, and driving seems to be the best way to get around. However, finding a suitable parking space appears to be the most difficult task. We can't locate a good parking spot because there isn't enough, or they're very expensive, especially in city centers. ",
  },
  {
    title: "The problem",
    text: "To create a mobile application that enables users to locate a parking space, book and pay through digital means, and easily track their vehicles.",
  },
  {
    title: "Understanding the Problem",
    list: [
      "Most cities have restricted or unorganized parking spaces.",
      "The majority of vehicles are parked along the road, causing traffic congestion.",
      "Many parking lots use paper tickets.",
      "People frequently miss where they park their vehicles.",
    ],
  },
  { title: "My Role", text: "Solo UI/UX Designer" },
  { title: "Duration", text: "Dec 2021 - Mar 2022" },
  {
    title: "Tools",
    icons: [
      { link: "/svg/figma_colored.svg" },
      { link: "/svg/google_docs.svg" },
      { link: "/svg/google_meet.svg" },
    ],
  },
];
export const classic_style: OverViewStyle = {
  color: "#0157FF",
  text_color: "text-[#0157FF]",
  className: "green",
  icon_className: "bg-[#D9E6FF] border border-[#0157FF]",
  bullet_className: "classic_bullet",
};
export const design_strategy_a: TitleTextImage[] = [
  {
    texts: [
      "What difficulties do you have finding a parking space?",
      "When do you find it difficult to locate a parking space?",
      "What do you spend for parking?",
    ],
  },
];
export const design_strategy_b: TitleTextImage[] = [
  {
    title: "Key insight from the Interviews",
    texts: [
      "It is challenging to find a parking spot.",
      "During peak hours, it is challenging to find a parking space.",
      "The majority of the parking spaces are taken.",
      "Parking spaces are costly in cities.",
    ],
  },
];
export const define = [
  {
    title: "Affinity Mapping",

    image: ["/Images/classic_park/affinity_mapping.png"],
  },
  {
    title: "User Persona",
    text: "I made a representative based on the information I collected from interviewing users in order to gain a better understanding of their concerns and needs. I can now come up with better concepts.",
    image: ["/Images/classic_park/user_ryan.png"],
  },
  {
    title: "Empathy Mapping",
    text: "After identifying the target users, was time to empathize with the users and have a better understandind and helps delve into the minds of the users.",
    image: ["/Images/classic_park/empathy_ryan.png"],
  },
];
export const ideate: TitleTextImage[] = [
  {
    title: "Brainstorming",
    text: "After thoroughly comprehending the problems, it was time to generate a variety of ideas. I brainstorm in order to come up with original and creative solutions to pre-existing issues.",
    image: ["/Images/classic_park/brainstorming.png"],
  },
  {
    title: "MSCW Brainstorming Method",
    image: [
      "/Images/classic_park/mscw_a.png",
      "/Images/classic_park/mscw_b.png",
    ],
  },
  {
    title: "Prioritization",
    image: ["/Images/classic_park/prioritization.png"],
  },
  {
    title: "Information Architecture",
    text: "I designed IA for the best findability and understandability, with a focus on clearly and logically organising information within digital products.",
    image: ["/Images/classic_park/information_architecture.png"],
  },
];
export const classic_design: TitleTextImage[] = [
  {
    title: "Wireframes",
    text: "I am now in the design process. This is where I quickly created the wireframes. Components and elements are designed more clearly and precisely in wireframes. ",
    image: ["/Images/classic_park/wirefranes.png"],
  },
  {
    title: "Moodboard",
    text: "A mood board is a collage of photos, typefaces, features, icons, and UI components used to describe a project's visual vision.",
    image: ["/Images/classic_park/mscw_a.png"],
  },
  {
    title: "App Logo",
    text: "I simply wanted the logo to be basic and visually appealing. So I combined the two essential parts of my brand's design that I designed.",
    image: ["/Images/classic_park/app_logo.png"],
  },
  {
    title: "UI Kits ",

    image: ["/Images/classic_park/mscw_a.png"],
  },
  {
    title: "Illustrations",
    image: ["/Images/classic_park/mscw_a.png"],
  },
  {
    title: "UI Components",
    image: ["/Images/classic_park/ui_components.png"],
  },
];
const impact: TitleTextImage[] = [
  {
    title: "SEQ AVG.",
    text: "A 5.5 Average Score",
  },
  {
    data: [
      {
        title: "NPS Score",
        text: "84% NPS score",
      },
      {
        title: "Completion Rate AVG.",
        text: "A 80 % Average Score",
      },
    ],
  },
  {
    title: "SUS AVG.",
    text: "A 80 Average Score",
  },
  {
    title: "WHAT DOES THIS MEAN",
    text: "Regarding the commercial issue, these numbers demonstrated that a greater number of users could complete challenging tasks with ease, improving the system's usability and promoting more adoption.",
  },
];

const lesson = [
  {
    title: "Lesson Learned",
    texts: [
      "Working on this case study has been challenging and interesting. It was gratifying and thrilling to receive and put into practice feedback from the interview I did. ",
      "The lengthy and exciting process of developing a product to the point where it is finally usable starts with the original design ideas.",
      "I improved at being able to tell my own assumptions from the outcomes of the user interviews.",
    ],
  },
];

export const conclusion: Conclusion = {
  impact: impact,
  lesson: lesson,
};

export const screens: TitleTextImage[] = [
  {
    title: "Splash and Onboarding Screens",
    text: "The splash screen displays the app's branding, whilst the onboarding screens assist users in gaining a basic grasp of the application.",
    image: ["/Images/classic_park/onboarding.png"],
  },
  {
    title: "Login and Signup Screens",
    text: "Simple login page with mobile number verification and driver license uploading for identification and verification.",
    image: ["/Images/classic_park/login.png"],
  },
  {
    title: "Booking process and other Screens",
    image: [
      "/Images/classic_park/booking_a.png",
      "/Images/classic_park/booking_b.png",
    ],
  },
];
export const wireframes: TitleTextImage[] = [
  {
    title: "Wireframe",
    text: " I am now in the design process. This is where I quickly created the  wireframes. Components and elements are designed more clearly and precisely in wireframes",
    image: ["/Images/classic_park/wireframes.png"],
  },
  {
    title: "Moodboard",
    text: "A mood board is a collage of photos, typefaces, features, icons, and UI components used to describe a project's visual vision.",
    image: ["/Images/classic_park/moodboard.png"],
  },
  {
    title: "App Logo",
    text: "I simply wanted the logo to be basic and visually appealing. So I combined the two essential parts of my brand's design that I designed.",
    image: ["/Images/classic_park/app_logo.png"],
  },
];
export const user_interface: TitleTextImage[] = [
  {
    title: "UI Kits",
    image: ["/Images/classic_park/ui_kits.png"],
  },
  {
    title: "UI Components",
    image: ["/Images/classic_park/ui_components.png"],
  },
];

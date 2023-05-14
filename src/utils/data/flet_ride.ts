import {
  Conclusion,
  OverViewData,
  OverViewStyle,
  TitleTextImage,
} from "@/Interfaces/Projects";

export const flet_data: OverViewData[] = [
  { title: "" },
  {
    title: "The problem",
    text: "People always need help with the problem of moving from one place to another. Most people use public transit because few can afford a car. Usually, when people try to use a taxi or cab, there are either no cabs available or extended lineups that may cause a delay. In a different situation, getting a vehicle that will do so right away when individuals need to transfer their rather large objects (furniture, appliances, etc.) cannot be easy. They consequently contact different logistic companies to get a car for that use.",
  },
  {
    title: "Solution",
    text: "Design a mobile app that allows customers to order cabs and other cargo transportation. The mobile application's user interface will be created to be simple, straightforward, and intuitive.",
  },
  { title: "My Role", text: "Solo UI/UX Designer" },
  { title: "Duration", text: "Aug 2021 - Sept 2021" },
  {
    title: "Tools",
    icons: [
      { link: "/svg/figma_colored.svg" },
      { link: "/svg/google_meet.svg" },
    ],
  },
];
export const flet_style: OverViewStyle = {
  color: "#2A00AC",
  text_color: "text-[#2A00AC]",
  className: "green",
  icon_className: "bg-[#dbd5ef] border border-[#2A00AC]",
  bullet_className: "flet_bullet",
};
const list: TitleTextImage[] = [
  {
    title: "1. Unavalaibility of Cargo vehicles",
    text: "Most or all the available apps dont have heavy duty vehicle to carry heavy equiptment",
  },
  {
    title: "2. Delay of Drivers to arrive",
    text: "The drivers dont arrive early most especially on peak hours, which delays customer time",
  },
  {
    title: "3. Rude Drivers",
    text: "The drivers dont arrive early most especially on peak hours, which delays customer time",
  },
  {
    title: "4. Trust",
    text: "The amount agreed on before the ride usually changes after the ride is completed which customers are not comfortable with and stirs distrust",
  },
];
export const pain_points = {
  list: list,
};
const impact: TitleTextImage[] = [
  {
    title: "SEQ AVG.",
    text: "A 5.5 Average Score",
  },
  {
    data: [
      {
        title: "NPS Score",
        text: "80% NPS score",
      },
      {
        title: "Completion Rate AVG.",
        text: "A 85 % Average Score",
      },
    ],
  },
  {
    title: "SUS AVG.",
    text: "A 80 Average Score",
  },
  {
    title: "WHAT DOES THIS MEAN",
    text: "Referring back to the business issue, these figures indicated that a greater number of users could carry out difficult activities with ease, making the system more enjoyable to use and encouraging greater adoption.",
  },
];

const lesson = [
  {
    title: "Lesson Learned",
    texts: [
      "This case study has been tough and interesting to work on. Receiving and putting into practice feedback from the interview I conducted was a satisfying and exciting experience. ",
      "The process of getting a product to the final usable level is a lengthy and exciting procedure that begins with the initial thoughts for its design.",
      "I became better at distinguishing my own beliefs from the findings of the user interviews.",
    ],
  },
];

export const conclusion: Conclusion = {
  impact: impact,
  lesson: lesson,
};
export const define = [
  {
    title: "User Persona",
    image: ["/Images/flet_ride/user_persona.png"],
  },
  {
    title: "Empathy Mapping",

    image: ["/Images/flet_ride/empathy_mapping.png"],
  },
];
export const design = [
  {
    title: "Wireframes",
    image: ["/Images/flet_ride/wireframe.png"],
  },
  {
    title: "Style Guide",

    image: ["/Images/flet_ride/style_guide.png"],
  },
];
export const mockups = [
  {
    title: "Onboarding Screens",
    image: ["/Images/flet_ride/onboarding.png"],
  },
  {
    title: "Login and Sign up Screens",

    image: ["/Images/flet_ride/login.png"],
  },
  {
    title: "Ride Booking",

    image: [
      "/Images/flet_ride/ride_booking_a.png",
      "/Images/flet_ride/ride_booking_b.png",
    ],
  },
  {
    title: "Other Screens",

    image: [
      "/Images/flet_ride/other_a.png",
      "/Images/flet_ride/other_b.png",
      "/Images/flet_ride/other_c.png",
    ],
  },
];

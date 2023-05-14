import {
  Conclusion,
  OverViewData,
  OverViewStyle,
  TitleTextImage,
} from "@/Interfaces/Projects";

export const libraria_data: OverViewData[] = [
  {
    title: "Overview",

    text: "Libraria is an online bookstore platform. It has a number of offline store which enable customers to buy and borrow books.",
  },
  {
    title: "The problem",
    text: "It might be difficult to strike a healthy work-life balance in today's environment of heightened competition. People are travelling, working long hours, and chasing deadlines. They seldom have time throughout this procedure to visit bookshops or libraries to buy or borrow books.",
  },
  {
    title: "Solution",
    text: "E-commerce or a digital solution that can increase presence, Customers may order their favourite online and have them delivered to their homes or offices.",
  },
  { title: "My Role", text: "Solo UI/UX Designer" },
  { title: "Duration", text: "May 2022 - Aug 2023" },
  {
    title: "Tools",
    icons: [
      { link: "/svg/figma_colored.svg" },
      { link: "/svg/google_docs.svg" },
      { link: "/svg/google_meet.svg" },
    ],
  },
];
export const libraria_style: OverViewStyle = {
  color: "#183A1D",
  text_color: "text-[#183A1D]",
  className: "green",
  icon_className: "bg-[#F2F2F2] border border-[#183A1D]",
  bullet_className: "libraria_bullet",
};
export const design_strategy: TitleTextImage[] = [
  {
    title: "Executive Intent",
    text: "This effort aims to encourage individuals to order the books they desire. The user has the option to browse and read the books they choose. They can read about the writers' information concurrently as well. Additionally, the browsing is comparable to looking through books in bookstores and libraries. Users may read book reviews to help them decide before making a purchase.",
  },
  {
    title: "Target Audience",
    text: "Professionals in the workforce, students, stay-at-home moms, and all bookworms. It also applies to children and teenagers who like reading comic books and fantasy.",
  },
  {
    title: "General Task",
    text: "Selling books is the main duty. Users may register and set up accounts to manage everything. Reading fresh articles, blogs, and videos on fresh publications are additional chores. Users get access to author and publisher information.",
  },
  {
    title: "Marketing goals",
    texts: [
      "To improve sales and keep the retention rate.",
      "We may create an app, distribute videos and information, and publish articles to boost our trust.",
      "Referral programmes can be used to raise awareness.",
    ],
  },
];
export const libraria_questions = [
  "How often do you read books?",
  "What type of books do you love reading?",
  "Do you buy or rent books?",
  "How do you buy or rent your books? Online or Offline?",
  "Why do you like buying from that website or vendor?",
  "What difficulties do you experience while buying a book?",
];
export const qualitative_analysis = ["1a", "1b", "1c", "1d", "1e", "1f"];
export const key_insights = [
  "Limited apps for bookstores.",
  "Users have to search and browse for book reviews on different websites. ",
  "Many web stores have limited options to choose from and are mostly out of stock.",
  "It takes longer time for your book to get delivered.",
  "No discounts when buying books in bulk",
];
const list: TitleTextImage[] = [
  {
    title: "Lack of Option",
    text: "Most of the existing websites have limited books and most of them are out of stock. However most of them don’t have mobile app for easy usage.",
  },
  {
    title: "Late Delivery",
    text: "When users order for books, it takes longer time to get to them. This action(s) frustrate the users which discourages them to buy books online.",
  },
  {
    title: "Limited Information",
    text: "The users feel frustrated when they have to check other websites for books information and reviews instead of viewing them in the same website",
  },
  {
    title: "No Discounts",
    text: "Most time the app crashes. In some cases the apps does not allow users to repay their loans online rather offline which is frustrating.",
  },
];
export const pain_points = {
  list: list,
};
export const define = [
  {
    title: "User Persona",
    text: "I made a representatives based on the information I collected from interviewing users and reviews in order to gain a better understanding of their concerns and needs. I can now come up with better concepts.",
    image: [
      "/Images/libraria/user_sarah.svg",
      "/Images/libraria/user_abdullahi.svg",
    ],
  },
  {
    title: "Empathy Mapping",
    text: "After determining who the target users were, it was important to develop empathy for them in order to better understand them and get insight into their thoughts.",
    image: [
      "/Images/libraria/empathy_sarah.svg",
      "/Images/libraria/empathy_abdullahi.svg",
    ],
  },
  {
    title: "User Journey",
    text: "After speaking with several target customers about their actual expectations and experiences, I created a user journey map based on the user personas to capture the essential circumstances and pain points users may experience.",
    image: ["/Images/libraria/journey_sarah.svg"],
  },
];
export const ideate: TitleTextImage[] = [
  {
    title: "How might we Statement",
    text: "The issues have to be fully understood before coming up with a range of solutions. I use brainstorming to generate fresh ideas for problems that already exist. The how might we questions are the best to open up brainstorming  and other ideation sessions.",
    image: ["/Images/libraria/how_might_we.svg"],
  },
  {
    title: "Information Architecture",
    image: ["/Images/libraria/information_architecture.svg"],
  },
];
export const design: TitleTextImage[] = [
  {
    title: "Colors",
    image: ["/libraria/colors.svg"],
  },
  {
    title: "Typography",
    image: ["/libraria/typography.svg"],
  },
  {
    title: "Text Hierarchy",
    image: ["/libraria/text_hierarchy.svg"],
  },
  {
    title: "Grid",
    image: ["/libraria/grid.svg"],
  },
];
export const final_design: TitleTextImage[] = [
  {
    title: "Homepage",
    image: ["/libraria/homepage.png"],
  },
  {
    title: "Catalog",
    image: ["/libraria/Catalogue.png"],
  },
  {
    title: "Product Detail",
    image: ["/libraria/product_detail.png"],
  },
  {
    title: "My Cart",
    image: ["/libraria/my_cart.png"],
  },
  {
    title: "Mobile Application",
    text: "I also developed a Libraria mobile application during the process. MVP (Most Valuable Product) describes it. Statistics show that around 60% of traffic originates from mobile applications.",
    image: ["/libraria/mobile_a.svg"],
  },
  {
    image: ["/libraria/mobile_b.svg"],
  },
  {
    image: ["/libraria/mobile_c.svg"],
  },
  {
    image: ["/libraria/mobile_d.svg"],
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
    text: "A 75 Average Score",
  },
  {
    title: "WHAT DOES THIS MEAN",
    text: "Regarding the business concern, these figures showed that a larger group of users could successfully complete difficult tasks, enhancing the system's usability and encouraging more adoption.",
  },
];

const lesson = [
  {
    title: "Lesson Learned",
    texts: [
      "The case study has been challenging and engaging to work on. Receiving and putting to use comments from my interview was exciting and fulfilling. ",
      "Starting with the first design concepts, a product goes through a long and thrilling process of development until it is eventually functional.",
      "I became better at distinguishing my own beliefs from the findings of the user interviews.",
    ],
  },

  {
    title: "Next Step",
    texts: [
      "To ensure that the users like the product and that the pain points have been properly addressed, more usability studies should be conducted. A design is never final, so I'd like to make the required adjustments based on the results of additional usability tests.",
    ],
  },
];

export const conclusion: Conclusion = {
  impact: impact,
  lesson: lesson,
};

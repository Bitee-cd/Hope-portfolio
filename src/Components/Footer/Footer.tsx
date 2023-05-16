import React from "react";
import Button from "../Reusable/Button";
import Github from "@/Assets/Github";
import Twitter from "@/Assets/Twitter";
import Behance from "@/Assets/Behance";
import LinkedIn from "@/Assets/LinkedIn";
import Tools from "../Reusable/Tools";
import { useRouter } from "next/router";

interface Props {}

const socialIcons = [
  { link: "https://twitter.com/iam_elpis", icon: <Twitter /> },
  {
    link: "https://www.linkedin.com/in/hope-jonah-4b8233173/",
    icon: <LinkedIn />,
  },
  { link: "https://www.behance.net/hopejonah360", icon: <Behance /> },
  { link: "https://github.com/elpis360", icon: <Github /> },
];
const Footer = (props: Props) => {
  const router = useRouter();
  const date = new Date();
  return (
    <>
      <section
        className={`${
          router.pathname === "/" ? "text-ter bg-sec" : "text-black"
        } font-semibold`}
      >
        <Tools />
        <div className="screen-center p-small flex justify-center items-center flex-col my-10 gap-5">
          <p>Clarifying difficult problems and ideas.</p>
          <Button text="Let's Talk" />
          <ul className="flex gap-5 items-center">
            {socialIcons.map((item, index) => (
              <li key={index}>
                <a href={`${item.link}`}>{item.icon}</a>
              </li>
            ))}
          </ul>
          <p>{date.getFullYear()}, hopejonah.co.uk</p>
        </div>
      </section>
    </>
  );
};

export default Footer;

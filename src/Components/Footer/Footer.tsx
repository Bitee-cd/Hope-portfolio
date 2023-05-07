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
  { link: "", icon: <Twitter /> },
  { link: "", icon: <LinkedIn /> },
  { link: "", icon: <Behance /> },
  { link: "", icon: <Github /> },
];
const Footer = (props: Props) => {
  const router = useRouter();
  console.log(router);
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
          <p>2023, hopejonah.co.uk</p>
        </div>
      </section>
    </>
  );
};

export default Footer;

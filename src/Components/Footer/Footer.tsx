import React from "react";
import Button from "../Reusable/Button";
import Github from "@/Assets/Github";
import Twitter from "@/Assets/Twitter";
import Behance from "@/Assets/Behance";
import LinkedIn from "@/Assets/LinkedIn";
interface Props {}
const socialIcons = [
  { link: "", icon: <Twitter /> },
  { link: "", icon: <LinkedIn /> },
  { link: "", icon: <Behance /> },
  { link: "", icon: <Github /> },
];
const Footer = (props: Props) => {
  return (
    <section className="bg-sec text-ter">
      <div className="screen-center flex justify-center items-center flex-col">
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
  );
};

export default Footer;

import React, { useEffect, useRef, useState } from "react";
import Logo from "../svg/Logo";
import Link from "next/link";
import Button from "../Reusable/Button";
import Image from "next/image";
import ResponsiveImage from "../Reusable/Image";
import { email } from "@/utils/constants";

interface Props {
  handleNavHeight: (height: number) => void;
}

const Navbar = ({ handleNavHeight }: Props) => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const navbarRef = useRef<HTMLElement>(null);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  useEffect(() => {
    if (navbarRef.current) {
      const navbarHeight = navbarRef.current?.offsetHeight;
      handleNavHeight(navbarHeight);
    }
  }, [handleNavHeight, navbarRef?.current?.offsetHeight]);

  return (
    <section ref={navbarRef} className="bg-sec fixed top-0 w-full z-50">
      <div className="screen-center text-xl font-semibold lg:flex justify-between items-center py-2 lg:py-0">
        <div className="flex justify-between items-center">
          <div className="w-[40px] md:w-[50px] lg:w-[70px] ">
            <Link href="/">
              <ResponsiveImage src="/logo.png" alt="logo" />
            </Link>
          </div>
          <div
            className="lg:hidden ml-auto w-[40px] md:w-[50px] "
            onClick={toggleMenu}
          >
            <ResponsiveImage
              src={!menuOpen ? " /svg/close.svg" : "/svg/open.svg"}
              alt="logo"
            />
          </div>
        </div>
        <ul
          className={`${
            menuOpen ? "block" : "hidden"
          } flex lg:flex flex-col py-5 p font-medium lg:py-0 items-start lg:items-center lg:flex-row gap-14 gap-y-10 text-ter`}
        >
          <li>
            <Link href="/#projects" scroll={true}>
              Projects
            </Link>
          </li>
          <li>
            <Link href="/about">About me</Link>
          </li>
          <li>
            <a href="https://drive.google.com/file/d/1_lSQMXhFfgXoepoYNa312lLEC0uULHe9/view?usp=share_link">
              Resume
            </a>
          </li>
          <li>
            <a href={`mailto: ${email}`}>
              <Button text="Let's Talk" />
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Navbar;

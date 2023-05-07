import React, { useEffect, useRef, useState } from "react";
import Logo from "../svg/Logo";
import Link from "next/link";
import Button from "../Reusable/Button";
import Image from "next/image";

interface Props {}

const Navbar = (props: Props) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navbarRef = useRef(null);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  useEffect(() => {
    if (navbarRef.current) {
      const navbarHeight = navbarRef.current?.offsetHeight;
      document.body.style.paddingTop = `${navbarHeight}px`;
    }
  }, [navbarRef?.current?.offsetHeight]);
  return (
    <section ref={navbarRef} className="bg-sec fixed top-0 w-full z-50">
      <div className="screen-center text-xl font-semibold lg:flex justify-between items-center py-2 lg:py-0">
        <div className="flex justify-between items-center">
          <Link href="/">
            <Image
              src="/svg/logo.svg"
              alt="logo"
              width={100}
              height={50}
              className="w-full h-auto hidden lg:block"
            />
            <Image
              src="/svg/logo_small.svg"
              alt="logo"
              width={100}
              height={50}
              className="lg:hidden w-full h-auto"
            />
          </Link>

          <div className="lg:hidden ml-auto" onClick={toggleMenu}>
            {!menuOpen ? (
              <svg
                width="30"
                height="30"
                viewBox="0 0 30 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3.75 22.5V20H26.25V22.5H3.75ZM3.75 16.25V13.75H26.25V16.25H3.75ZM3.75 10V7.5H26.25V10H3.75Z"
                  fill="white"
                />
              </svg>
            ) : (
              <svg
                width="30"
                height="29"
                viewBox="0 0 30 29"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.44727 20.8353L15.001 14.5L21.5548 20.8353M21.5548 8.16471L14.9998 14.5L8.44727 8.16471"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            )}
          </div>
        </div>
        <ul
          className={`${
            menuOpen ? "block" : "hidden"
          } flex lg:flex flex-col py-5 lg:py-0 items-start lg:items-center lg:flex-row gap-14 gap-y-10 text-ter`}
        >
          <li>
            <Link href="/projects">Projects</Link>
          </li>
          <li>
            <Link href="/about">About me</Link>
          </li>
          <li>
            <Link href="/projects">Resume</Link>
          </li>
          <li>
            <Link href="/projects">
              <Button text="Let's Talk" />
            </Link>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Navbar;

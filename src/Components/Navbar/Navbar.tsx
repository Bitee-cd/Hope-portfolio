import React from "react";
import Logo from "../svg/Logo";
import Link from "next/link";
interface Props {}
const Navbar = (props: Props) => {
  return (
    <section className="bg-sec">
      <div className="screen-center flex justify-between items-center">
        <Logo />
        <ul className="flex gap-10 text-ter">
          <li>
            <Link href="/projects">Projects</Link>
          </li>
          <li>
            <Link href="/projects">About me</Link>
          </li>
          <li>
            <Link href="/projects">Resume</Link>
          </li>
          <li>
            <Link
              className="bg-pri px-4 py-2 rounded-3xl text-sec"
              href="/projects"
            >
              Let&apos;s Talk
            </Link>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Navbar;

import React, { ReactElement, useState } from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import Head from "next/head";

interface Props {
  children: ReactElement;
  title: string;
}

const Layout = ({ children, title }: Props) => {
  const [nav, setNav] = useState<number>(0);
  const handleNavHeight = (navHeight: number) => {
    setNav(navHeight);
  };
  return (
    <>
      <Head>
        <title>{title ? title + " - Hope Jonah" : "Hope Jonah"}</title>
        <meta name="description" content="Texkoop Logistics Company" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </Head>
      <div
        className="flex flex-col min-h-screen"
        style={{ paddingTop: nav - 8 }}
      >
        <Navbar handleNavHeight={handleNavHeight} />
        <main className="flex-1">{children}</main>
        <Footer />
      </div>
    </>
  );
};

export default Layout;

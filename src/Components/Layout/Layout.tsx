import React, { ReactElement, ReactNode, useCallback, useState } from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import Head from "next/head";

interface Props {
  children: ReactNode;
  title: string;
}

const Layout = ({ children, title }: Props) => {
  const [nav, setNav] = useState<number>(0);

  const handleNavHeight = useCallback((navHeight: number) => {
    setNav(navHeight);
  }, []);

  return (
    <>
      <Head>
        <title>{title ? title + " - Hope Jonah" : "Hope Jonah"}</title>
        <meta name="description" content="Hope Jonah Product Designer" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
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

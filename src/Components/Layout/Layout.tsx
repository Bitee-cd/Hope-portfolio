import React, { ReactElement, useState } from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

interface Props {
  children: ReactElement;
}

const Layout = ({ children }: Props) => {
  const [nav, setNav] = useState<number>(0);
  const handleNavHeight = (navHeight: number) => {
    setNav(navHeight);
  };
  return (
    <div className="flex flex-col min-h-screen" style={{ paddingTop: nav - 8 }}>
      <Navbar handleNavHeight={handleNavHeight} />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;

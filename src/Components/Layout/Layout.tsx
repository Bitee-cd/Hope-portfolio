import React, { ReactElement } from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

interface Props {
  children: ReactElement;
}
const Layout = ({ children }: Props) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;

import AboutHope from "@/Components/About/About";
import Principles from "@/Components/About/Principles";
import Layout from "@/Components/Layout/Layout";
import React from "react";
interface Props {}
const About = (props: Props) => {
  return (
    <Layout>
      <>
        <AboutHope />
        <Principles />
      </>
    </Layout>
  );
};

export default About;

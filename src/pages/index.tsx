import Layout from "@/Components/Layout/Layout";
import Hero from "../Components/Home/Hero";
import Introduction from "../Components/Home/Introduction";
import Project from "@/Components/Projects/Project";
import PeopleSay from "@/Components/Home/PeopleSay";

export default function Home() {
  return (
    <Layout>
      <>
        <Hero />
        <Introduction />
        <Project />
        <PeopleSay />
      </>
    </Layout>
  );
}

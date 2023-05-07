import Layout from "@/Components/Layout/Layout";
import Hero from "../Components/Home/Hero";
import Introduction from "../Components/Home/Introduction";
import Project from "@/Components/Projects/Project";
import PeopleSay from "@/Components/Home/PeopleSay";
import Design from "@/Components/Home/Design";
import Tools from "@/Components/Reusable/Tools";

export default function Home() {
  return (
    <div className="bg-sec">
      <Layout>
        <>
          <Hero />
          <Introduction />
          <Project />
          <PeopleSay />
          <Design />
        </>
      </Layout>
    </div>
  );
}

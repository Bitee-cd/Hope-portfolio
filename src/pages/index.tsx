import Layout from "@/Components/Layout/Layout";
import Hero from "../Components/Home/Hero";
import Introduction from "../Components/Home/Introduction";
import Project from "@/Components/Projects/Project";
import PeopleSay from "@/Components/Home/PeopleSay";
import Design from "@/Components/Home/Design";

export default function Home() {
  return (
    <div className="bg-sec">
      {/* meta data  */}
      {/* <Head>
        <meta property="og:title" content={"Texkoop"} />
        <meta
          property="og:description"
          content="Convenient last-mile delivery for all"
        />
        <meta property="og:image" content="https://www.texkoop.com/logo.jpg" />
        <meta property="og:url" content="texkoop.com" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@TEXKOOP" />
        <meta name="twitter:title" content={"Texkoop"} />
        <meta
          name="twitter:description"
          content="Convenient last-mile delivery for all"
        />
        <meta name="twitter:image" content="https://www.texkoop.com/logo.jpg" />
      </Head> */}
      {/* meta data  */}

      <Layout title="Home">
        <Hero />
        <Introduction />
        <Project />
        <PeopleSay />
        <Design />
      </Layout>
    </div>
  );
}

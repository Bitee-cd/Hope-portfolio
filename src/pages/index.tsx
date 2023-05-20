import Layout from "@/Components/Layout/Layout";
import Hero from "../Components/Home/Hero";
import Introduction from "../Components/Home/Introduction";
import Project from "@/Components/Projects/Project";
import PeopleSay from "@/Components/Home/PeopleSay";
import Design from "@/Components/Home/Design";
import Head from "next/head";

export default function Home() {
  return (
    <div className="bg-sec">
      {/* meta data  */}
      <Head>
        <meta
          property="og:title"
          content={"Hope Jonah- Product Designer-Home"}
        />
        <meta
          property="og:description"
          content="A passionate User-centered
                  Product Designer with a strong background in Architecture.
                  Creating user-friendly and immersive products."
        />
        <meta
          property="og:image"
          content="https://www.hopejonah.live/logo.png"
        />
        <meta property="og:url" content="www.hopejonah.live" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@iam_elpis" />
        <meta name="twitter:title" content={"Hope Jonah- Product Designer"} />

        <meta
          name="twitter:description"
          content="A passionate User-centered
                  Product Designer with a strong background in Architecture.
                  Creating user-friendly and immersive products."
        />
        <meta
          name="twitter:image"
          content="https://www.hopejonah.live/logo.png"
        />
      </Head>
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

import Layout from "@/Components/Layout/Layout";
import LibrariaScreen from "@/Components/Projects/Libraria";
import Head from "next/head";
import React from "react";

const Libraria = () => {
  return (
    <>
      {/* meta data  */}
      <Head>
        <meta
          property="og:title"
          content={"Hope Jonah- Product Designer-Libraria"}
        />
        <meta
          property="og:description"
          content="Convenient last-mile delivery for all"
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

      <Layout title="Libraria ">
        <LibrariaScreen />
      </Layout>
    </>
  );
};

export default Libraria;

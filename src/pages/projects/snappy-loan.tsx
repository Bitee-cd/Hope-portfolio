import Layout from "@/Components/Layout/Layout";
import SnappyLoan from "@/Components/Projects/SnappyLoan";
import Head from "next/head";
import React from "react";
interface Props {}
const SnappyLoanPage = (props: Props) => {
  return (
    <>
      {/* meta data  */}
      <Head>
        <meta
          property="og:title"
          content={"Hope Jonah- Product Designer- Snappy Loan"}
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

      <Layout title="Snappy Loan">
        <SnappyLoan />
      </Layout>
    </>
  );
};

export default SnappyLoanPage;

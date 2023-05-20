import Button from "@/Components/Reusable/Button";
import Logo from "@/Components/svg/Logo";
import Head from "next/head";
import Link from "next/link";
import React from "react";
interface Props {}
const ErrorPage = (props: Props) => {
  return (
    <>
      {/* meta data  */}
      <Head>
        <meta
          property="og:title"
          content={"Hope Jonah- Product Designer-Error"}
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
      <section className="min-h-screen bg-sec text-ter">
        <div className="screen-center h-screen flex justify-center items-center">
          <div className="flex justify-center flex-col gap-5 items-center">
            <Logo />
            <h2 className="text-3xl ">Page Not Found</h2>

            <Link href="/">
              <Button text="Go to Home" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default ErrorPage;

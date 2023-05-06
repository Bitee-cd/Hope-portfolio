import Image from "next/image";
import React from "react";
interface Props {}
const Introduction = (props: Props) => {
  return (
    <section className="bg-sec">
      <div className="screen-center items-center md:grid grid-cols-2 text-ter">
        <div className="">
          <p>Hello, I&apos;m Hope</p>
          <p className="text-pri">Product designer</p>
          <p>
            I am a Product Designer with 3 years experience. I work at the
            intersection of inquisitive, reasoning, and imagination to uncover
            perception, analyze problems, and create meaningful, future-oriented
            solutions. I have in design for B2B and B2C experiences on iOS,
            Android, and the web. I am a great advocate of user centered design.
            I am currently learning Mobile Development.
          </p>
        </div>
        <div className="mx-auto">
          <Image
            alt="Hope Jonah"
            src="/Images/profile__.png"
            placeholder="blur"
            blurDataURL="/images/profile__.png"
            width={700}
            height={475}
            priority
            sizes="100vw"
            style={{
              width: "100%",
              height: "auto",
            }}
            className=""
          />
        </div>
      </div>
    </section>
  );
};

export default Introduction;

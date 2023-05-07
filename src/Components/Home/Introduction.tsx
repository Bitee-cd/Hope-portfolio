import Image from "next/image";
import React from "react";
import Typewriter from "typewriter-effect";
interface Props {}
const Introduction = (props: Props) => {
  return (
    <section className="relative">
      {/* <div className="w-1/2 right-0 top-0 background absolute h-full"></div> */}
      <div className="screen-center items-center grid lg:grid-cols-2 text-ter">
        <div className="mx-auto lg:col-start-2 lg:row-start-1 w-full">
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
        <div className="lg:col-start-1 lg:row-start-1">
          <div className="flex h2 ">
            <div className="italic font-normal">
              <Typewriter
                options={{
                  strings: ["Hello", "Bonjour", "Hola", "Olá", "Holla"],
                  autoStart: true,
                  loop: true,
                }}
              />
            </div>
            , I&apos;m Hope
          </div>
          <p className="my-2 lg:my-4 text-pri text-sm lg:text-2xl">
            Product designer
          </p>
          <p className="text-base md:text-xl lg:text-xl 2xl:text-2xl">
            I am a Product Designer with 3 years experience. I work at the
            intersection of inquisitive, reasoning, and imagination to uncover
            perception, analyze problems, and create meaningful, future-oriented
            solutions. I have in design for B2B and B2C experiences on iOS,
            Android, and the web. I am a great advocate of user centered design.
            I am currently learning Mobile Development.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Introduction;

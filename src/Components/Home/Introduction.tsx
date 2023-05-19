import Image from "next/image";
import React from "react";
import { Fade, Zoom } from "react-awesome-reveal";
import Typewriter from "typewriter-effect";
interface Props {}
const Introduction = (props: Props) => {
  return (
    <section className="relative my-10 lg:my-20 min-h-[50vh]">
      {/* <div className="w-1/2 right-0 top-0 background absolute h-full"></div> */}
      <div className="screen-center  items-center grid gap-y-10 lg:grid-cols-2 text-ter ">
        <Zoom duration={3000} delay={1500} triggerOnce>
          <div className="mx-auto lg:col-start-2 lg:row-start-1 w-full">
            <Image
              alt="Hope Jonah"
              src="/Images/hope_black.png"
              placeholder="blur"
              blurDataURL="/images/profile__.png"
              width={700}
              height={475}
              priority
              sizes="100vw"
              style={{
                width: "50%",
                height: "auto",
              }}
              className="rounded-full mx-auto"
            />
          </div>
        </Zoom>

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
          <Fade delay={2500} direction="up" cascade damping={1} triggerOnce>
            <Fade direction="up" duration={2000} triggerOnce>
              <p className="my-2 lg:my-4 text-pri text-sm lg:text-2xl">
                Product designer
              </p>
            </Fade>
            <Fade direction="up" duration={2000} delay={1500} triggerOnce>
              <p className="text-base md:text-xl lg:text-xl 2xl:text-2xl">
                I am a self thought Product Designer with 3 years experience. I
                work at the intersection of inquisitive, reasoning, and
                imagination to uncover perception, analyze problems, and create
                meaningful, future-oriented solutions. I have worked for B2B and
                B2C experiences on iOS, Android, and the web. I am a great
                advocate of user centered design. I am currently learning Mobile
                Development.
              </p>
            </Fade>
          </Fade>
        </div>
      </div>
    </section>
  );
};

export default Introduction;

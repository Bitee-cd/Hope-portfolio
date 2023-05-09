import Image from "next/image";
import React from "react";
import Hope from "../../../public/Images/hope.png";
interface Props {}
const AboutHope = (props: Props) => {
  return (
    <section className="my-10">
      <div className="screen-center rounded-[10px] lg:rounded-[60px] border border-sec grid lg:grid-cols-2">
        <div className="relative border-b border-sec lg:border-0 lg:border-r ">
          <Image
            src="/Images/hope_white.png"
            placeholder="blur"
            blurDataURL="/Images/profile__.png"
            width={700}
            height={475}
            priority
            sizes="100vw"
            style={{
              width: "100%",
              height: "100%",
            }}
            alt="Hope Jonah"
            className="object-cover lg:rounded-tl-[60px] lg:rounded-bl-[60px] rounded-tl-[10px] rounded-tr-[10px] lg:rounded-tr-0 "
          />
        </div>
        <div className="p-5 md:p-10 lg:py-20">
          <p className="h4 text-black font-semibold">About Hope</p>
          <p className="my-2 text-opacity-50 text-black  lg:my-4  text-sm lg:text-2xl">
            Product designer
          </p>
          <div className="flex flex-col gap-5">
            <p className="leading-relaxed  p">
              Hello! I am Jonah Hope Stanley. A passionate User-centered Product
              Designerrwith a strong background in Architecture. Creating
              user-friendly and immersive products has long been my goal. I
              specialize in designing multifaceted and functional web and mobile
              products for B2C and B2B organizations.It is important to me to
              find ways to communicate with users in a visually and cohesively
              inviting manner.
            </p>
            <p className="text-base md:text-xl lg:text-xl 2xl:text-2xl">
              For the past three years, I&lsquo;ve worked with a handful of
              corporations such as ZuPago (Nigeria) and startups such as Texkoop
              (France), assisting them in delivering better experiences across
              the web, android, and iOS. Aside from apps, I&lsquo;ve also
              designed a variety of websites and landing pages.
            </p>
            <p className="text-base md:text-xl lg:text-xl 2xl:text-2xl">
              Before now, I was an Architect with 2 years of experience. I
              transitioned into UI/UX design because of the passion I have for
              creating both aesthetically pleasing and usable products for
              clients. I live in Lagos, Nigeria. Hanging out with friends and
              making memories with people are things I enjoy and value. My
              insatiable curiosity drives me to explore other fields such as
              political and sport analysis, currently I am learning Mobile
              development. I enjoy traveling, watching soccer, listening to
              music, playing video games and cooking.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHope;

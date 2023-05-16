import React from "react";
import Lens from "../svg/Overview/1a";
import Book from "../svg/Overview/1b";
import CheckBook from "../svg/Overview/2a";
import { OverViewData, OverViewStyle } from "@/Interfaces/Projects";
import Image from "next/image";
import Bulb from "../svg/Overview/1c";
import Clock from "../svg/Overview/2b";
import Spanner from "../svg/Overview/2c";

import { flet_data, flet_style } from "@/utils/data/flet_ride";
import Title from "../Reusable/Title";
interface Props {}

const FletProjectOverview = (props: Props) => {
  const icons = [
    { link: "/svg/figma_colored.svg" },
    { link: "/svg/google_meet.svg" },
  ];
  const color = "#2A00AC";
  return (
    <section>
      <div className="screen-center my-10">
        <Title color="text-[#2A00AC]" text="Project Overview" />
        {/* box  */}
        <div className="flex flex-col lg:flex-row lg:flex-wrap lg:justify-between my-10 lg:my-20 gap-y-10">
          {/* first */}
          <div className={` lg:w-[65%] gap-1 lg:gap-2 `}>
            <div className="">
              <div className="flex gap-1 lg:gap-2 items-center  ">
                <div
                  className={`icon_circle bg-[#dbd5ef] border border-[#2A00AC] `}
                >
                  <Book key="book" color={color} />
                </div>
                <p className="h4 font-extrabold">The problem</p>
              </div>
              <p className="ml-[20px] lg:ml-[40px] p font-normal">
                People always need help with the problem of moving from one
                place to another. Most people use public transit because few can
                afford a car. Usually, when people try to use a taxi or cab,
                there are either no cabs available or extended lineups that may
                cause a delay. In a different situation, getting a vehicle that
                will do so right away when individuals need to transfer their
                rather large objects (furniture, appliances, etc.) cannot be
                easy. They consequently contact different logistic companies to
                get a car for that use.
              </p>
            </div>
          </div>

          {/* second  */}
          <div className={`lg:order-3 lg:w-[65%] gap-1 lg:gap-2 `}>
            <div className="">
              <div className="flex gap-1 lg:gap-2 items-center  ">
                <div
                  className={`icon_circle bg-[#dbd5ef] border border-[#2A00AC] `}
                >
                  <Book key="book" color={color} />
                </div>
                <p className="h4 font-extrabold">Solution</p>
              </div>
              <p className="p ml-[20px] lg:ml-[40px] font-normal">
                Design a mobile app that allows customers to order cabs and
                other cargo transportation. The mobile application&#39;s user
                interface will be created to be simple, straightforward, and
                intuitive.
              </p>
            </div>
          </div>
          {/* third */}
          <div className="flex flex-col gap-10 lg:w-[30%] lg:order-2">
            {/* a */}
            <div className={` gap-1 lg:gap-2 `}>
              <div className="">
                <div className="flex gap-1 lg:gap-2 items-center  ">
                  <div
                    className={`icon_circle bg-[#dbd5ef] border border-[#2A00AC] `}
                  >
                    <Bulb key="book" color={color} />
                  </div>
                  <p className="h4 font-extrabold">My Role</p>
                </div>
                <p className="ml-[20px] lg:ml-[40px] p font-normal">
                  Solo UI/UX Designer
                </p>
              </div>
            </div>
            {/* b  */}
            <div className={`  gap-1 lg:gap-2 `}>
              <div className="">
                <div className="flex gap-1 lg:gap-2 items-center  ">
                  <div
                    className={`icon_circle bg-[#dbd5ef] border border-[#2A00AC] `}
                  >
                    <Clock key="book" color={color} />
                  </div>
                  <p className="h4 font-extrabold">Duration</p>
                </div>
                <p className=" ml-[20px] lg:ml-[40px] p font-normal">
                  Aug 2021 - Sept 2021
                </p>
              </div>
            </div>
          </div>
          {/* fourth */}

          <div className={`lg:w-[30%] gap-1 lg:gap-2 lg:order-4`}>
            <div className="">
              <div className="flex gap-1 lg:gap-2 items-center  ">
                <div
                  className={`icon_circle bg-[#dbd5ef] border border-[#2A00AC] `}
                >
                  <Spanner key="book" color={color} />
                </div>
                <p className="h4 font-extrabold">My Role</p>
              </div>
              <ul className=" ml-[20px] lg:ml-[40px] flex gap-3 items-center">
                {icons.map((item, index) => (
                  <li key={index} className="w-[25px] lg:w-[50px] ">
                    <Image
                      alt="social icons"
                      src={item.link}
                      placeholder="blur"
                      blurDataURL="/Images/profile__.png"
                      width={700}
                      height={475}
                      priority
                      sizes="100vw"
                      style={{
                        width: "100%",
                      }}
                      className="object-contain h-[25px] lg:h-[50px]"
                    />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FletProjectOverview;

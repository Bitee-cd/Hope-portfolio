import Five from "@/Assets/Processes/Five";
import Four from "@/Assets/Processes/Four";
import One from "@/Assets/Processes/One";
import Six from "@/Assets/Processes/Six";
import Three from "@/Assets/Processes/Three";
import Two from "@/Assets/Processes/Two";
import React from "react";
import { Fade } from "react-awesome-reveal";
interface Props {}

const Design = (props: Props) => {
  return (
    <section className="bg-sec_dark">
      <div className="screen-center py-10 lg:py-20 text-ter">
        <Fade cascade damping={1} triggerOnce>
          <Fade direction="up" duration={1500} triggerOnce>
            <p className="h2 font-bold my-5">My Design Process</p>
          </Fade>
          <Fade>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-y-16">
              <Fade damping={1} cascade delay={1000} triggerOnce>
                {processes.map((process, index) => (
                  <div
                    key={index}
                    className="text-ter rounded-[30px] border-[0.5px] border-sec_light bg-sec p-[10px]"
                  >
                    <div
                      className={`border-[0.5px] flex flex-col gap-3 rounded-[20px] h-full ${process.border_color} p-5`}
                    >
                      <div className="flex gap-2 items-center ">
                        <Fade cascade delay={1000 * index} triggerOnce>
                          <div
                            className={`w-[40px] h-[40px] ${process.bg_color} rounded-full flex justify-center items-center`}
                          >
                            {process.icon}
                          </div>
                          <p className="text-base font-normal lg:text-lg">
                            Step {process.step}
                          </p>
                        </Fade>
                      </div>

                      <div className="flex-1">
                        <Fade cascade delay={1200 * index} triggerOnce>
                          <p className="p font-semibold">{process.title}</p>
                        </Fade>
                      </div>
                      <Fade cascade delay={1500 * index} triggerOnce>
                        <p className="p-small font-normal">{process.body}</p>
                      </Fade>
                    </div>
                  </div>
                ))}
              </Fade>
            </div>
          </Fade>
        </Fade>
      </div>
    </section>
  );
};

export default Design;
const processes = [
  {
    step: 1,
    icon: <One />,
    title: "Understand",
    body: "Understanding the problem better, considering various solutions, and understanding about the users and corporate goals.",
    border_color: "one_border",
    bg_color: "one_bg",
  },
  {
    step: 2,
    icon: <Two />,
    title: "Define",
    body: "I diligently observe the brand's target audience and users, uncover their pain points, and discover their needs.",
    border_color: "two_border",
    bg_color: "two_bg",
  },
  {
    step: 3,
    icon: <Three />,
    title: "Ideate",
    body: "To crystallize the product vision, prioritize features and functionalities, I Create user flows to highlight potential pitfalls and critical moments.",
    border_color: "grad1",
    bg_color: "three_bg",
  },
  {
    step: 4,
    icon: <Four />,
    title: "Design",
    body: "Diverging widely and investigating a variety of potential options. Testing, iterating, discussing, gathering input, and working through the issue are all part of the process.",
    border_color: "four_border",
    bg_color: "four_bg",
  },
  {
    step: 5,
    icon: <Five />,
    title: "Testing/Refinement",
    body: "I diligently observe the brand's target audience and users, uncover their pain points, and discover their needs.",
    border_color: "five_border",
    bg_color: "five_bg",
  },
  {
    step: 6,
    icon: <Six />,
    title: "Handoff & Monitoring",
    body: "Working closely with engineering and product to achieve a smooth transition. The task is not finished! I keep an eye on the product's performance.",
    border_color: "six_border",
    bg_color: "six_bg",
  },
];

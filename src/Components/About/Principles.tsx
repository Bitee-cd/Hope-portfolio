import { Qualities } from "@/Interfaces/Qualities";
import React from "react";
import { Fade } from "react-awesome-reveal";
import CustomSlider from "./CustomSlider";
interface Props {}

const different: Qualities[] = [
  { text: "I am obsessed with design.", number: "01" },
  { text: "I believe in personal development.", number: "02" },
  { text: "Complexities excite me.", number: "03" },
  { text: "I am a team player.", number: "04" },
];
const principles: Qualities[] = [
  { text: "Integrity", number: "01" },
  { text: "Commitment", number: "02" },
  { text: "Passion", number: "03" },
  { text: "Diligence", number: "04" },
];
const Principles = (props: Props) => {
  return (
    <section className="my-10 lg:my-20">
      <div className="screen-center  rounded-[10px] lg:rounded-[60px] border border-sec py-10">
        <div className="w-[90%] mx-auto flex flex-col md:flex-row justify-between ">
          <Fade cascade delay={1000} damping={1} triggerOnce>
            <Fade triggerOnce>
              <div className="">
                <Fade cascade damping={1} triggerOnce>
                  <p className="h4 text-black font-semibold">
                    Why I am Different
                  </p>
                  <ul>
                    {different.map((item) => (
                      <li key={item.number}>
                        <Fade cascade damping={1}>
                          <p className="my-2 text-opacity-50 text-black  lg:my-4  text-sm lg:text-2xl">
                            <span className="font-bold mr-2">
                              {item.number}
                            </span>{" "}
                            {item.text}
                          </p>
                        </Fade>
                      </li>
                    ))}
                  </ul>
                </Fade>
              </div>
            </Fade>

            <Fade triggerOnce>
              <div className="">
                <Fade cascade damping={1} triggerOnce delay={4000}>
                  <p className="h4 text-black font-semibold">My principles</p>
                  <ul>
                    {principles.map((item) => (
                      <li key={item.number}>
                        <p className="my-2 text-opacity-50 text-black  lg:my-4  text-sm lg:text-2xl">
                          <span className="font-bold mr-2">{item.number}</span>{" "}
                          {item.text}
                        </p>
                      </li>
                    ))}
                  </ul>
                </Fade>
              </div>
            </Fade>
          </Fade>
        </div>
      </div>
    </section>
  );
};

export default Principles;

import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
interface Props {}

const Tools = (props: Props) => {
  const router = useRouter();
  const tools = [
    { id: "figma" },
    { id: "photoshop" },
    { id: "ai" },
    { id: "firebase" },
    { id: "oho1" },
    { id: "openai" },
    { id: "oho2" },
    { id: "oho3" },
    { id: "oho4" },
    { id: "oho5" },
    { id: "figma" },
    { id: "photoshop" },
    { id: "ai" },
    { id: "firebase" },
    { id: "oho1" },
    { id: "openai" },
    { id: "oho2" },
    { id: "oho3" },
    { id: "oho4" },
    { id: "oho5" },
  ];
  return (
    <section className="pt-10">
      <div className="">
        <div className="screen-center text-ter my-10">
          <p
            className={`  ${
              router.pathname === "/" ? "text-ter" : "text-black"
            } h2 font-bold`}
          >
            My Tools
          </p>
        </div>
        <div className="slider bg-sec_dark py-5 lg:py-10">
          <div className="slide-track gap-10">
            {tools?.map((tool, index) => (
              <div
                key={index}
                className="slide p-1 lg:p-0 bg-[#000] max-w-[50px] max-h-[50px] lg:min-w-[122px] lg:min-h-[122px] rounded-full flex justify-center items-center "
              >
                <Image
                  src={`/svg/${tool.id}.svg`}
                  alt={tool.id}
                  width={72}
                  height={32}
                />
              </div>
            ))}
            {tools?.map((tool, index) => (
              <div
                key={index}
                className="bg-[#000] p-1 lg:p-0 max-w-[50px] max-h-[50px] lg:min-w-[122px] lg:min-h-[122px] rounded-full flex justify-center items-center "
              >
                <Image
                  src={`/svg/${tool.id}.svg`}
                  alt={tool.id}
                  width={72}
                  height={32}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tools;

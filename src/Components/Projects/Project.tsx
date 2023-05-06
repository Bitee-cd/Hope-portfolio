import Link from "next/link";
import React from "react";
import Button from "../Reusable/Button";
import { projects } from "@/utils/data";
import Image from "next/image";
interface Props {}

const Project = (props: Props) => {
  return (
    <section className="bg-sec ">
      <div className="screen-center text-ter flex flex-col gap-10 h-full py-10">
        <h2 className="text-center">Featured Projects</h2>
        {projects.map((project, index) => (
          <div
            key={index}
            className="border-[0.4px] md:border border-ter rounded-[15px] md:rounded-[60px] "
          >
            <div className="w-[90%] mx-auto py-5 md:py-10 ">
              <p>{project.title}</p>
              <div className="my-5 mb-10">
                <Image
                  alt={project.title}
                  src={project.image}
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
              <div className="mt-10">
                <Link href={project.link}>
                  <Button text="View Case Study" />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Project;

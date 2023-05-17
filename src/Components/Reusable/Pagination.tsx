import React from "react";
import ResponsiveImage from "./Image";
import Link from "next/link";
import { Slide } from "react-awesome-reveal";
interface Props {
  prev: string;
  next: string;
}
const Pagination = ({ prev, next }: Props) => {
  return (
    <section className="my-10 overflow-hidden">
      <div className="screen-center flex justify-between items-center">
        {/* previous button  */}
        <Slide direction="left" triggerOnce>
          <Link href={prev}>
            <div className="inline-flex items-center gap-2 lg:gap-5">
              <div className="rotate-180 w-[20px] lg:w-[50px]">
                <ResponsiveImage src="/svg/next.svg" alt="previous" />
              </div>
              <p className="p-small">Previous Project</p>
            </div>
          </Link>
        </Slide>

        {/* next button  */}
        <Slide direction="right" triggerOnce>
          <Link href={next}>
            <div className="inline-flex items-center gap-2 lg:gap-5">
              <p className="p-small">Next Project</p>
              <div className="w-[20px] lg:w-[50px]">
                <ResponsiveImage src="/svg/next.svg" alt="previous" />
              </div>
            </div>
          </Link>
        </Slide>
      </div>
    </section>
  );
};

export default Pagination;

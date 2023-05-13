import React from "react";
import ResponsiveImage from "./Image";
import Link from "next/link";
interface Props {
  prev: string;
  next: string;
}
const Pagination = ({ prev, next }: Props) => {
  return (
    <section className="my-10">
      <div className="screen-center flex justify-between items-center">
        {/* previous button  */}
        <Link href={prev}>
          <div className="inline-flex items-center gap-2 lg:gap-5">
            <div className="rotate-180 w-[20px] lg:w-[50px]">
              <ResponsiveImage src="/svg/next.svg" alt="previous" />
            </div>
            <p className="p-small">Previous Project</p>
          </div>
        </Link>

        {/* next button  */}
        <Link href={next}>
          <div className="inline-flex items-center gap-2 lg:gap-5">
            <p className="p-small">Next Project</p>
            <div className="w-[20px] lg:w-[50px]">
              <ResponsiveImage src="/svg/next.svg" alt="previous" />
            </div>
          </div>
        </Link>
      </div>
    </section>
  );
};

export default Pagination;

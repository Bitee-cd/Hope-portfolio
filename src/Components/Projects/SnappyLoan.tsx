import Image from "next/image";
import React from "react";
import Overview from "../SnappyLoan/Overview";
import ProjectOverview from "../Reusable/ProjectOverview";

interface Props {}
const SnappyLoan = (props: Props) => {
  return (
    <>
      <section className="w-full">
        <Image
          src="/Images/projects/snappy_loan.png"
          alt="Snappy Loan Project"
          placeholder="blur"
          blurDataURL="/Images/profile__.png"
          width={700}
          height={475}
          priority
          sizes="100vw"
          style={{
            width: "100%",
            height: "auto",
          }}
        />
      </section>
      <ProjectOverview color="pri_200" />
    </>
  );
};

export default SnappyLoan;

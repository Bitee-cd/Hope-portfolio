import React from "react";
import Title from "../Reusable/Title";
import { COLORS } from "@/utils/constants";
import ReusableConclusion from "../Reusable/ReusableConculsion";
import { conclusion } from "@/utils/data/libraria";

const Conclusion = () => {
  return (
    <>
      <section className="my-2">
        <div className="screen-center">
          <Title
            text="Conclusion: Test"
            color={`text-[${COLORS.libraria_green}]`}
          />
        </div>
      </section>
      <ReusableConclusion conclusion={conclusion} />
    </>
  );
};

export default Conclusion;

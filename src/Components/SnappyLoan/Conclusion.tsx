import React from "react";
import Title from "../Reusable/Title";
import { COLORS } from "@/utils/constants";
import { conclusion } from "@/utils/data/snappy";
import ReusableConclusion from "../Reusable/ReusableConculsion";
interface Props {}
const Conclusion = (props: Props) => {
  return (
    <>
      <section className="my-2">
        <div className="screen-center">
          <Title
            text="Conclusion: Test"
            color={`text-[${COLORS.green_dark}]`}
          />
          <div className="my-5 lg:my-10">
            <p className="h4 font-extrabold">Usability testing</p>
            <p className="p">
              I conducted many moderated usability tests with a sizable number
              of individuals of various ages and gender. My research results
              showed what needs to be changed in the prototype to provide users
              with a seamless experience—sessions meetings for testing with
              users who represent the intended market. Unmoderated concept
              testing were also carried out.
            </p>
          </div>
        </div>
      </section>
      <ReusableConclusion conclusion={conclusion} />
    </>
  );
};

export default Conclusion;

import React from "react";
import Title from "../Reusable/Title";
import { COLORS } from "@/utils/constants";
import { understand_questions } from "@/utils/data/snappy";
import List from "../Reusable/List";
interface Props {}
const Understand = (props: Props) => {
  return (
    <section>
      <div className="screen-center my-10 xl:my-20">
        <div>
          <Title text="Understand" color={`text-[${COLORS.green_dark}]`} />
          <p className="my-2 p">
            I wanted to have an in-depth experience of how users feel and pass
            through so i conducted qualitative analysis
          </p>
        </div>
        <div className="my-10">
          <p className="my-10 h4 font-extrabold">Qualitative Research</p>
          <p className="p">
            In order to better understand where they were having trouble with
            the several loan apps that were already available, I conducted
            interviews with consumers ranging in age from 18 to 45.
          </p>
          <div className="my-5">
            <p className="p">Some of the following questions were asked:</p>
            <ul className="unordered snappy_bullet flex flex-col gap-2 my-5 ">
              {understand_questions.map((item) => (
                <List key={item} text={item} />
              ))}
            </ul>
          </div>

          <p className="p my-2">
            How ever these questions helped me to know some of the users pain
            points during registration. I also get to know how to improve on the
            existing loan apps. However i was not satisfy with the result so i
            went to google playstore and apple store to get some reviews of
            users on the the various existing loans apps
          </p>
        </div>
      </div>
    </section>
  );
};

export default Understand;

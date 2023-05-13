import {
  key_insights,
  libraria_questions,
  qualitative_analysis,
} from "@/utils/data/libraria";
import React from "react";
import List from "../Reusable/List";
import ResponsiveImage from "../Reusable/Image";
interface Props {}
const Research = (props: Props) => {
  return (
    <section>
      <div className="screen-center my-10 xl:my-20">
        {/* quantitative research  */}
        <div className="my-10">
          <p className="my-10 h4 font-extrabold">Qualitative Research</p>
          <p className="p">
            I spoke with students, close associates who love to read books and
            passive readers in order to better understand where they were
            experiencing problems with the various online book stores that were
            currently available. I successfully interviewed 15 prospective
            users.
          </p>
          <div className="my-5">
            <p className="p">
              The following questions were a few that was asked:
            </p>
            <ul className="unordered libraria_bullet flex flex-col gap-2 my-5 ">
              {libraria_questions.map((item) => (
                <List key={item} text={item} />
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* qualitative_research  */}
      <div className="screen-center my-10 xl:my-20">
        <div className="my-10">
          <p className="my-10 h4 font-extrabold">Quantitative Research</p>

          <div className="grid grid-cols-2 lg:grid-cols-3 gap-y-5 lg:gap-y-10">
            {qualitative_analysis.map((item, index) => (
              <ResponsiveImage
                key={index}
                alt={`Libraria Qualitative Analysis ${item}`}
                src={`/Images/libraria/qualitative_${item}.svg`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* key insights  */}
      <div className="screen-center my-10 xl:my-20">
        {/* quantitative research  */}
        <div className="my-10">
          <p className="my-10 h4 font-extrabold">
            Key insight from the Research
          </p>

          <div className="my-5">
            <ul className="unordered libraria_bullet flex flex-col gap-2 my-5 ">
              {key_insights.map((item) => (
                <List key={item} text={item} />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Research;

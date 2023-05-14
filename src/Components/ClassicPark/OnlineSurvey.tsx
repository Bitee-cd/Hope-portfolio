import React from "react";
import ResponsiveImage from "../Reusable/Image";

const OnlineSurvey = () => {
  return (
    <>
      {/* online survey  */}
      <div className="my-5 lg:my-10">
        <p className="my-5 lg:my-10 h4 font-extrabold">Online Survey</p>
        <p className="p">
          Following the user interview, I chose to learn more about user models.
          First, a questionnaire was created and distributed to the intended
          audience. The online poll provided me with additional information. The
          number of members is 70.
        </p>
        <div className="hidden lg:block">
          <ResponsiveImage
            src="/Images/classic_park/survey_desktop.svg"
            alt="Classic Park Online Survey"
          />
        </div>
        <div className="lg:hidden">
          <ResponsiveImage
            src="/Images/classic_park/survey_mobile.svg"
            alt="Classic Park Online Survey"
          />
        </div>
      </div>

      {/* competitive analysis  */}
      <div className="my-5 lg:my-10">
        <p className="my-5 lg:my-10 h4 font-extrabold">Competitive Analysis</p>
        <p className="p">
          After identifying users problems, I moved on to comparable products to
          analyse competitors. This will assist me in understanding user empathy
          to grasp key aspects of the model.
        </p>
        <div className="my-5 lg:my-10">
          <ResponsiveImage
            src="/Images/classic_park/competitive_analysis.png"
            alt="Classic Park Competitive Analysis"
          />
        </div>
      </div>
    </>
  );
};

export default OnlineSurvey;

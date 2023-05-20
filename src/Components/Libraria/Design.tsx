import React from "react";
import Title from "../Reusable/Title";
import { COLORS } from "@/utils/constants";
import ResponsiveImage from "../Reusable/Image";
import { design } from "@/utils/data/libraria";
import HeaderTextImageGroup from "../Reusable/HeaderTextImageGroup";
interface Props {}
const LibrariaDesign = (props: Props) => {
  return (
    <>
      <section className="my-5 lg:my-10">
        <div className="screen-center my-5 lg:my-10">
          <Title text="Design" color={`text-[${COLORS.libraria_green}]`} />
          <p className="h4 my-5 lg:mb-10 font-extrabold">Wireframe</p>
          <p className="p">
            The desired design solutions are shown in these low quality
            wireframe displays. However, this design aims to address the
            problems identified by user experience research.
          </p>
        </div>
        <ResponsiveImage
          src="/Images/libraria/wireframe.svg"
          alt="LIbraria  Wireframe"
        />
      </section>
      <section className="screen-center my-5 lg:my-10">
        <p className="h4 my-5 lg:mb-10 font-extrabold">Design System</p>
        {design.map((item, index) => (
          <HeaderTextImageGroup item={item} key={index} />
        ))}
      </section>
    </>
  );
};

export default LibrariaDesign;

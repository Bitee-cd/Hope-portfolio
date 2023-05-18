import React from "react";
import { motion } from "framer-motion";
import { Fade, Slide } from "react-awesome-reveal";
interface Props {
  color: string;
  text: string;
}
const Title = ({ color, text }: Props) => {
  return (
    <div className="">
      <Fade cascade damping={1} direction="up" triggerOnce>
        <Fade direction="up">
          <p className={`${color} font-black p`}>{text}</p>
        </Fade>
        <Slide direction="left">
          <div className="w-full border-t border-black"></div>
        </Slide>
      </Fade>
    </div>
  );
};

export default Title;

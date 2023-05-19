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
      <Fade direction="up" triggerOnce>
        <p className={`${color} font-black p`}>{text}</p>
      </Fade>
      <Slide triggerOnce>
        <motion.div
          // initial={{ x: 0 }}
          // animate={{ x: "100%", transition: { duration: 2 } }}
          className="w-full border-t border-black"
        ></motion.div>
      </Slide>
    </div>
  );
};

export default Title;

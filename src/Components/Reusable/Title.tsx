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
      <Fade direction="up">
        <p className={`${color} font-black p`}>{text}</p>
      </Fade>
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: "100%" }}
        exit={{ width: 0 }}
        transition={{ duration: 3 }}
        style={{ originX: "center" }}
        className="w-full border-t bg-black h-[1px]"
      ></motion.div>
    </div>
  );
};

export default Title;

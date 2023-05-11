import React from "react";
interface Props {
  color: string;
  text: string;
}
const Title = ({ color, text }: Props) => {
  return (
    <div className="border-b border-b-black pb-2">
      <p className={`${color} font-black p`}>{text}</p>
    </div>
  );
};

export default Title;

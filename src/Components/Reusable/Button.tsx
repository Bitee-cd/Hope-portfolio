import React from "react";
interface Props {
  text: string;
}
const Button = ({ text }: Props) => {
  return (
    <button className="bg-pri px-4 py-2 rounded-3xl text-sec">{text}</button>
  );
};

export default Button;

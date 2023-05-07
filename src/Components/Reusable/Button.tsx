import React from "react";
interface Props {
  text: string;
}
const Button = ({ text }: Props) => {
  return (
    <button className="bg-pri  border border-pri duration-300 hover:bg-ter px-4 py-2 lg:px-5 lg:py-3 font-semibold rounded-3xl text-base lg:text-xl text-sec">
      {text}
    </button>
  );
};

export default Button;

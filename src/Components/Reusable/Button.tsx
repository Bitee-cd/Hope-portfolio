import React from "react";
interface Props {
  text: string;
}
const Button = ({ text }: Props) => {
  return (
    <button className="bg-pri  border border-pri duration-300 hover:bg-ter w-[165px] h-[55px] p font-semibold rounded-[40px] flex items-center justify-center  text-sec">
      {text}
    </button>
  );
};

export default Button;

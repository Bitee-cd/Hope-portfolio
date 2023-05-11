import React from "react";
interface Props {
  text: string;
}
const List = ({ text }: Props) => {
  return <li className={`list p font-normal mb-2 leading-relaxed `}>{text}</li>;
};

export default List;

import { IconProps } from "@/Interfaces/Icon";
import * as React from "react";
const CheckBook = ({ color }: IconProps) => (
  <svg
    width={25}
    height={24}
    viewBox="0 0 25 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M8.7647 15H15.821M8.7647 18H12.2928M19.3491 2H5.23656C4.96921 2 4.71281 2.10536 4.52376 2.29289C4.33472 2.48043 4.22852 2.73478 4.22852 3V21C4.22852 21.2652 4.33472 21.5196 4.52376 21.7071C4.71281 21.8946 4.96921 22 5.23656 22H19.3491C19.6165 22 19.8729 21.8946 20.0619 21.7071C20.251 21.5196 20.3572 21.2652 20.3572 21V3C20.3572 2.73478 20.251 2.48043 20.0619 2.29289C19.8729 2.10536 19.6165 2 19.3491 2Z"
      stroke={color}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M15.3168 6.5L11.2846 10.5L9.26855 8.5"
      stroke={color}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default CheckBook;

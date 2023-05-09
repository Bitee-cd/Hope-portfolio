import { IconProps } from "@/Interfaces/Icon";
import * as React from "react";
const Book = ({ color }: IconProps) => (
  <svg
    width={26}
    height={24}
    viewBox="0 0 26 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M8.01628 16C8.30189 16 8.54147 15.904 8.73502 15.712C8.92856 15.52 9.025 15.2827 9.02432 15C9.02432 14.7167 8.92755 14.479 8.73401 14.287C8.54046 14.095 8.30122 13.9993 8.01628 14C7.73067 14 7.49109 14.096 7.29755 14.288C7.10401 14.48 7.00757 14.7173 7.00824 15C7.00824 15.2833 7.10501 15.521 7.29856 15.713C7.4921 15.905 7.73134 16.0007 8.01628 16ZM8.01628 13C8.30189 13 8.54147 12.904 8.73502 12.712C8.92856 12.52 9.025 12.2827 9.02432 12V9C9.02432 8.71667 8.92755 8.479 8.73401 8.287C8.54046 8.095 8.30122 7.99934 8.01628 8C7.73067 8 7.49109 8.096 7.29755 8.288C7.10401 8.48 7.00757 8.71734 7.00824 9V12C7.00824 12.2833 7.10501 12.521 7.29856 12.713C7.4921 12.905 7.73134 13.0007 8.01628 13ZM12.0484 15H18.0967C18.3823 15 18.6219 14.904 18.8154 14.712C19.009 14.52 19.1054 14.2827 19.1047 14C19.1047 13.7167 19.008 13.479 18.8144 13.287C18.6209 13.095 18.3816 12.9993 18.0967 13H12.0484C11.7628 13 11.5233 13.096 11.3297 13.288C11.1362 13.48 11.0397 13.7173 11.0404 14C11.0404 14.2833 11.1372 14.521 11.3307 14.713C11.5243 14.905 11.7635 15.0007 12.0484 15ZM12.0484 11H18.0967C18.3823 11 18.6219 10.904 18.8154 10.712C19.009 10.52 19.1054 10.2827 19.1047 10C19.1047 9.71667 19.008 9.479 18.8144 9.287C18.6209 9.095 18.3816 8.99934 18.0967 9H12.0484C11.7628 9 11.5233 9.096 11.3297 9.288C11.1362 9.48 11.0397 9.71734 11.0404 10C11.0404 10.2833 11.1372 10.521 11.3307 10.713C11.5243 10.905 11.7635 11.0007 12.0484 11ZM4.99216 20C4.43774 20 3.96295 19.804 3.5678 19.412C3.17264 19.02 2.9754 18.5493 2.97608 18V6C2.97608 5.45 3.17365 4.979 3.5688 4.587C3.96396 4.195 4.43841 3.99934 4.99216 4H21.1208C21.6752 4 22.15 4.196 22.5452 4.588C22.9403 4.98 23.1376 5.45067 23.1369 6V18C23.1369 18.55 22.9393 19.021 22.5442 19.413C22.149 19.805 21.6746 20.0007 21.1208 20H4.99216ZM4.99216 18H21.1208V6H4.99216V18Z"
      fill={color}
    />
  </svg>
);
export default Book;

import { IconProps } from "@/Interfaces/Icon";
import * as React from "react";

const Lens = ({ color }: IconProps) => (
  <svg
    width={"100%"}
    height={"auto"}
    viewBox="0 0 25 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clipPath="url(#clip0_107_252)">
      <path
        d="M10.1573 7H14.1895M1.58898 14.5C1.58898 14.5 5.62115 5 6.12517 4C6.62919 3 7.63723 3 8.14125 3C8.64527 3 10.1573 3 10.1573 5V16H14.1895V5C14.1895 3 15.7016 3 16.2056 3C16.7096 3 17.7176 3 18.2217 4C18.7257 5 22.7579 14.5 22.7579 14.5M18.7257 21C19.3214 21 19.9113 20.8836 20.4616 20.6575C21.012 20.4313 21.512 20.0998 21.9333 19.682C22.3545 19.2641 22.6886 18.768 22.9166 18.2221C23.1445 17.6761 23.2619 17.0909 23.2619 16.5C23.2619 15.9091 23.1445 15.3239 22.9166 14.7779C22.6886 14.232 22.3545 13.7359 21.9333 13.318C21.512 12.9002 21.012 12.5687 20.4616 12.3425C19.9113 12.1164 19.3214 12 18.7257 12C17.5226 12 16.3688 12.4741 15.5181 13.318C14.6674 14.1619 14.1895 15.3065 14.1895 16.5C14.1895 17.6935 14.6674 18.8381 15.5181 19.682C16.3688 20.5259 17.5226 21 18.7257 21ZM5.62115 21C5.02545 21 4.43558 20.8836 3.88522 20.6575C3.33487 20.4313 2.8348 20.0998 2.41358 19.682C1.99236 19.2641 1.65822 18.768 1.43026 18.2221C1.20229 17.6761 1.08496 17.0909 1.08496 16.5C1.08496 15.9091 1.20229 15.3239 1.43026 14.7779C1.65822 14.232 1.99236 13.7359 2.41358 13.318C2.8348 12.9002 3.33487 12.5687 3.88522 12.3425C4.43558 12.1164 5.02545 12 5.62115 12C6.82422 12 7.97801 12.4741 8.82871 13.318C9.67941 14.1619 10.1573 15.3065 10.1573 16.5C10.1573 17.6935 9.67941 18.8381 8.82871 19.682C7.97801 20.5259 6.82422 21 5.62115 21Z"
        stroke={color}
        strokeWidth={2}
      />
    </g>
    <defs>
      <clipPath id="clip0_107_252">
        <rect
          width={24.193}
          height={24}
          fill="white"
          transform="translate(0.0771484)"
        />
      </clipPath>
    </defs>
  </svg>
);
export default Lens;

import { IconProps } from "@/Interfaces/Icon";
import * as React from "react";
const Clock = ({ color }: IconProps) => (
  <svg width={26} height={24} viewBox="0 0 26 24" fill="none">
    <path
      d="M7.00781 2H19.1043V8L15.0721 12L19.1043 16V22H7.00781V16L11.04 12L7.00781 8V2ZM17.0882 16.5L13.0561 12.5L9.0239 16.5V20H17.0882V16.5ZM13.0561 11.5L17.0882 7.5V4H9.0239V7.5L13.0561 11.5ZM11.04 6H15.0721V6.75L13.0561 8.75L11.04 6.75V6Z"
      fill={color}
    />
  </svg>
);
export default Clock;

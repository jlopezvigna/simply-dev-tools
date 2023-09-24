import { IconProps } from "@/constants";
import React from "react";

export const ArrowSwitchIcon: React.FC<IconProps> = ({
  size = 24,
  strokeWidth = 1.5,
  width,
  height,
  className = "",
  ...props
}) => {
  return (
    <svg
      height={height || size}
      width={width || size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M10 6L7 3M7 3L4 6M7 3V17M14 18L17 21M17 21L20 18M17 21V7"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

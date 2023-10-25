import { IconProps } from "@/constants";
import React from "react";

export const ChevronRightIcon: React.FC<IconProps> = ({
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
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      fill="none"
    >
      <path
        d="M10 7L15 12L10 17"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

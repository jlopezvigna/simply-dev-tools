import { IconProps } from "@/constants";
import React from "react";

export const HamburgerIcon: React.FC<IconProps> = ({
  size = 24,
  strokeWidth = 1.5,
  width,
  height,
  ...props
}) => {
  return (
    <svg
      height={height || size}
      width={width || size}
      viewBox="0 0 72 72"
      id="emoji"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="color" />
      <g id="hair" />
      <g id="skin" />
      <g id="skin-shadow" />
      <g id="line">
        <line
          x1="16"
          x2="56"
          y1="26"
          y2="26"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
          strokeWidth={strokeWidth}
        />
        <line
          x1="16"
          x2="56"
          y1="36"
          y2="36"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
          strokeWidth={strokeWidth}
        />
        <line
          x1="16"
          x2="56"
          y1="46"
          y2="46"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
          strokeWidth={strokeWidth}
        />
      </g>
    </svg>
  );
};

import React from "react";

interface IconProps {
  size?: number;
  strokeWidth?: number;
  width?: number;
  height?: number;
  className?: string;
}

export const EmailIcon: React.FC<IconProps> = ({
  size = 24,
  width,
  height,
  className = "",
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
        d="M4 7.00005L10.2 11.65C11.2667 12.45 12.7333 12.45 13.8 11.65L20 7"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <rect
        x="3"
        y="5"
        width="18"
        height="14"
        rx="2"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
};

import React from "react";

interface IconProps {
  size?: number;
  strokeWidth?: number;
  width?: number;
  height?: number;
  className?: string;
}

export const RefreshIcon: React.FC<IconProps> = ({
  size = 24,
  strokeWidth = 2,
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
        d="M21 3V8M21 8H16M21 8L18 5.29168C16.4077 3.86656 14.3051 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21C16.2832 21 19.8675 18.008 20.777 14"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

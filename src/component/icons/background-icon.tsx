import React from "react";

interface IconProps {
  size?: number;
  strokeWidth?: number;
  width?: number;
  height?: number;
  className?: string;
}

export const BackgrounIcon: React.FC<IconProps> = ({
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
      viewBox="0 0 200 200"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        fill="#4641A4"
        d="M37.1,-68.1C46.2,-59,50.5,-45.3,57.3,-33.2C64.1,-21.1,73.5,-10.5,76.3,1.6C79.2,13.8,75.5,27.6,69.8,41.7C64.1,55.8,56.4,70.1,44.4,76.9C32.5,83.7,16.2,83,-0.2,83.4C-16.7,83.8,-33.3,85.2,-41,75.9C-48.8,66.6,-47.6,46.7,-54.8,32.3C-62.1,17.8,-77.8,8.9,-84.1,-3.6C-90.3,-16.1,-87,-32.2,-78.1,-43.8C-69.2,-55.4,-54.7,-62.5,-40.7,-68.8C-26.8,-75.2,-13.4,-80.8,0.3,-81.3C14,-81.9,28,-77.3,37.1,-68.1Z"
        transform="translate(100 100)"
      />
    </svg>
  );
};

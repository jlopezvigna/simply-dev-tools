import React from "react";

interface IconProps {
  size?: number;
  strokeWidth?: number;
  width?: number;
  height?: number;
}

export const TextIcon: React.FC<IconProps> = ({
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
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title />

      <g id="Complete">
        <g id="F-File">
          <g id="Text">
            <g>
              <path
                d="M18,22H6a2,2,0,0,1-2-2V4A2,2,0,0,1,6,2h7.1a2,2,0,0,1,1.5.6l4.9,5.2A2,2,0,0,1,20,9.2V20A2,2,0,0,1,18,22Z"
                fill="none"
                id="File"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
              />

              <line
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                x1="7.9"
                x2="16.1"
                y1="17.5"
                y2="17.5"
              />

              <line
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                x1="7.9"
                x2="16.1"
                y1="13.5"
                y2="13.5"
              />

              <line
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                x1="8"
                x2="13"
                y1="9.5"
                y2="9.5"
              />
            </g>
          </g>
        </g>
      </g>
    </svg>
  );
};
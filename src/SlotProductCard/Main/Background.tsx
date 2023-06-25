import React from "react";

interface BackgroundProps {
  className?: string;
  fill?: string;
  size?: string;
  height?: string;
}

const Background: React.FC<BackgroundProps> = ({ fill = "#422178", className, size = "100" }) => {
  return (
    <div className={className}>
      <svg
        width={size}
        height={(Number(size) + 100).toString()}
        viewBox="0 0 193 387"
        fill={fill}
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="157.794"
          y="-3.58887"
          width="231.178"
          height="322.455"
          rx="12"
          transform="rotate(30 157.794 -3.58887)"
        />
        <defs>
          <linearGradient
            id="paint0_linear_7_243"
            x1="273.383"
            y1="-3.58887"
            x2="273.383"
            y2="318.866"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#4232A4" />
            <stop offset="1" stopColor="#7852C9" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

export default Background;

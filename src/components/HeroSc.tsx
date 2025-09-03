import React from "react";

const HeroSc = () => {
  return (
    <div className="mt-[70px]">
      <Bg />
      <h1>Hi am mohamed Saeed</h1>
      <h1 className="text-4xl font-bold">I am a software engineer BBBBBBB</h1>
    </div>
  );
};

export default HeroSc;

const Bg = () => {
  return (
    <>
      <svg
        className="absolute top-0 left-0 w-full h-full -z-30"
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox="0 0 800 450"
        opacity="0.66"
      >
        <defs>
          <filter
            id="bbblurry-filter"
            x="-100%"
            y="-100%"
            width="400%"
            height="400%"
            filterUnits="objectBoundingBox"
            primitiveUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feGaussianBlur
              stdDeviation="75"
              x="0%"
              y="0%"
              width="100%"
              height="100%"
              in="SourceGraphic"
              edgeMode="none"
              result="blur"
            ></feGaussianBlur>
          </filter>
        </defs>
        <g filter="url(#bbblurry-filter)">
          <ellipse
            rx="101"
            ry="103"
            cx="409.06647652775644"
            cy="253.3515791536778"
            fill="#7af298"
          ></ellipse>
        </g>
      </svg>
    </>
  );
};

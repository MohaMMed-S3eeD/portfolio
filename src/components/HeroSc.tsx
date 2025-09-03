"use client";
import React from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import Image from "next/image";

const HeroSc = () => {
  useGSAP(() => {
    gsap.to(".hero-text", {
      opacity: 1,
      duration: 1,
      delay: 0.8,
      ease: "power2.inOut",
    });
  }, []);
  return (
    <div className="mt-[70px] px-8 hero-text opacity-0 ">
      <Bg />
      <h1 className="text-4xl font-bold ]">
        Hey, 👋 I&apos;m a Full Stack Developer
      </h1>
      <h1 className="text-9xl font-bold mt-3 text-[#7AF298] ">MOHAMED SAEED</h1>
      <div className="absolute bottom-[10%] left-[50%] transform -translate-x-1/2  drop-shadow-2xl rounded-full">
        <Image
          src="/img2.png"
          alt="hero"
          width={300}
          height={300}
          className="rounded-full"
        />
      </div>
      <div className="absolute bottom-0 left-0 p-5">
        <h1>E info@brunosimon.com </h1>
        <h1>T +39 03 463 853 02</h1>
      </div>
      <div className="absolute bottom-0 right-0 max-w-[330px] p-5">
        <p>
          I craft fast, scalable, and user-friendly web applications with modern
          JavaScript frameworks — combining React on the frontend with robust
          server-side solutions using Node.js.
        </p>
        <div className="pt-14">/ Twitter / Github / LinkedIn / Youtube </div>
      </div>
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

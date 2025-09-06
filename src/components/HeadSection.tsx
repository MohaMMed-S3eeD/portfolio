"use client";
import React from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";

const HeadSection = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  useGSAP(() => {
    gsap.fromTo(
      `.head-section-${title.replace(/\s+/g, '-').toLowerCase()} .b-border`,
      {
        width: 0,
      },
      {
        width: "100%",
        duration: 1,
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: `.head-section-${title.replace(/\s+/g, '-').toLowerCase()} .b-border`,
          start: "top 70%",
        },
      }
    );
    gsap.from(
      `.head-section-${title.replace(/\s+/g, '-').toLowerCase()} h1`,
      {
        xPercent: -100,
        duration: 1,
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: `.head-section-${title.replace(/\s+/g, '-').toLowerCase()} .b-border`,
          start: "top 70%",
        },
      }
    );
    gsap.fromTo(
      `.head-section-${title.replace(/\s+/g, '-').toLowerCase()} .arrow-div, .head-section-${title.replace(/\s+/g, '-').toLowerCase()} p`,
      {
        opacity: 0,
      },
      {
        opacity: 1,
        duration: 1,
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: `.head-section-${title.replace(/\s+/g, '-').toLowerCase()} .arrow-div`,
          start: "top 70%",
        },
      }
    );
  }, [title]);
  return (
    <div className={`head-section head-section-${title.replace(/\s+/g, '-').toLowerCase()} overflow-hidden`}>
      <div className=" flex w-full justify-between">
        <h1 className=" text-[#7AF298] mb-5 font-bold">{"// " + title}</h1>
        <p className="text-xl">{description}</p>
      </div>
      <div className="arrow-div flex gap-2 items-center mb-3">
        <span className=" text-[#7AF298]">{"</"}</span>
        <span className="b-border w-full border-b-2 border-[#3e3e3e] h-0"></span>
        <span className="text-[#7AF298]">{">"}</span>
      </div>
    </div>
  );
};

export default HeadSection;

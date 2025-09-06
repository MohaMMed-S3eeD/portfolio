import React from "react";
import HeadSection from "./HeadSection";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";

const Process = () => {
  return (
    <div className="max-w-[1200px] px-8 mx-auto h-[60vh] flex flex-col justify-center mb-10 ">
      <HeadSection title="Process" description="My Development work Process" />
      <div className="flex gap-5 justify-between ">
        <ProcessItem
          title="Plan & Architect"
          description="Before writing a single line of code, I dive deep into understanding the project goals, user needs, and technical constraints."
          number="1"
          hr
        />
        <ProcessItem
          title="Build & Develop"
          description="Build pixel-perfect user interfaces and robust backend systems in parallel. I ensure that every component—UI or API—is maintainable."
          number="2"
          hr
        />
        <ProcessItem
          title="Launch & Support"
          description="I also provide post-launch monitoring, performance optimization, and ongoing iteration support to keep your product growing."
          number="3"
        />
      </div>
    </div>
  );
};

export default Process;

const ProcessItem = ({
  title,
  description,
  number,
  hr,
}: {
  title: string;
  description: string;
  number: string;
  hr?: boolean;
}) => {
  useGSAP(() => {
    gsap.from(".num", {
      x: "-15%",
      duration: 1,
      ease: "power2.out",
    });
  }, []);
  return (
    <div
      className={` flex-1 flex flex-col  ${
        hr ? "border-r" : ""
      } overflow-hidden`}
    >
      <span className="num text-[150px] font-bold text-[#7AF298]  ">
        0{number}
      </span>
      <h1 className="text-2xl font-bold mb-3">{title}</h1>
      <p className="text-md opacity-70">{description}</p>
    </div>
  );
};

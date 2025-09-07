"use client";
import React from "react";
import HeadSection from "./HeadSection";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Process = () => {
  useGSAP(() => {
    // Title animate
    gsap.fromTo(
      "#process-section .section-title",
      {
        opacity: 0,
      },
      {
        opacity: 1,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: "#process-section .section-title",
          start: "top 95%",
          end: "top 90%",
        },
      }
    );

    // Description box animate
    gsap.fromTo(
      "#process-section #description-box2",
      {
        opacity: 0,
      },
      {
        opacity: 1,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: "#process-section #description-box2",
          start: "top 95%",
          end: "top 90%",
        },
      }
    );

    // Process items animate
    const processItems = gsap.utils.toArray<HTMLElement>(
      "#process-section .process-item"
    );
    processItems.forEach((item) => {
      gsap.fromTo(
        item,
        {
          opacity: 0,
        },
        {
          opacity: 1,
          duration: 1.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: item,
            start: "top 95%",
            end: "top 90%",
          },
        }
      );
    });
  }, []);

  return (
    <div
      id="process-section"
      className="max-w-[1200px] px-4 md:px-8 mx-auto my-10 flex flex-col justify-center mb-10 "
    >
      <HeadSection title="Process" description="My Development work Process" />
      <div className="flex flex-col md:flex-row gap-5 justify-between ">
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
    gsap.fromTo(
      `.num-${number}`,
      {
        opacity: 0,
        xPercent: -30,
      },
      {
        opacity: 1,
        xPercent: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: `.process-item-${number}`,
          start: "top 95%",
          end: "top 90%",
        },
      }
    );

    gsap.fromTo(
      `.title-${number}`,
      {
        opacity: 0,
      },
      {
        opacity: 1,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: `.process-item-${number}`,
          start: "top 95%",
          end: "top 90%",
        },
      }
    );

    gsap.fromTo(
      `.description-${number}`,
      {
        opacity: 0,
      },
      {
        opacity: 1,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: `.process-item-${number}`,
          start: "top 95%",
          end: "top 90%",
        },
      }
    );
  }, []);

  return (
    <div
      className={`process-item process-item-${number} flex-1 flex flex-col items-center md:items-start justify-center md:justify-start ${
        hr ? "border-r" : ""
      } overflow-hidden`}
    >
      <span
        className={`num num-${number} text-[150px] font-bold text-[#7AF298]`}
      >
        0{number}
      </span>
      <h1 className={`title-${number} text-2xl font-bold mb-3`}>{title}</h1>
      <p className={`description-${number} text-md opacity-70`}>
        {description}
      </p>
    </div>
  );
};

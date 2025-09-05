import React from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import HoverCom from "./HoverCom";

const Skills = () => {
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    // Title animate
    gsap.from("#skills-section .section-title", {
      opacity: 0,
      yPercent: -30,
      duration: 1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: "#skills-section .section-title",
        start: "top 70%",
      },
    });
    // Description box animate
    gsap.from("#skills-section #description-box2", {
      opacity: 0,
      xPercent: -40,
      duration: 1.5,
      ease: "power2.out",
      scrollTrigger: {
        trigger: "#skills-section #description-box2",
        start: "top 70%",
      },
    });
    // Cards animate
    const cards = gsap.utils.toArray<HTMLElement>(
      "#skills-section .skills-card"
    );
    cards.forEach((card) => {
      gsap.from(card, {
        opacity: 0,
        x: 40,
        duration: 1.5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: card,
          start: "top 70%",
        },
      });

      const chips = card.querySelectorAll(".skills-chip");
      if (chips.length) {
        gsap.from(chips, {
          opacity: 0,
          y: 20,
          stagger: 0.06,
          duration: 0.5,
          ease: "power2.out",
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
          },
        });
      }
    });
    // Experience numbers animate
    const expNums = gsap.utils.toArray<HTMLElement>("#skills-section .exp-num");
    expNums.forEach((el) => {
      const target = Number(el.dataset.target || 0);
      const counter = { value: 0 } as { value: number };
      gsap.to(counter, {
        value: target,
        duration: 1.8,
        ease: "power2.out",
        onUpdate: () => {
          el.textContent = Math.round(counter.value).toString();
        },
        scrollTrigger: {
          trigger: el.closest(".exp-item") || el,
          start: "top 90%",
          once: true,
        },
      });
    });
    // Hr animate
    gsap.from("#hr", {
      xPercent: -100,
      duration: 2,
      ease: "power2.out",
      scrollTrigger: {
        trigger: "#hr",
        start: "top 90%",
        markers: true,
      },
    });
  }, []);
  return (
    <div
      id="skills-section"
      className="max-w-[1200px] px-8 mx-auto h-screen flex flex-col justify-center mb-10"
    >
      <h1 className=" text-[#7AF298] section-title">{"// Skills"}</h1>
      <div className="flex gap-10 flex-col md:flex-row">
        <div className="flex-1">
          <Card
            title="Frontend development"
            skills={["HTML", "CSS", "JavaScript", "React", "Next.js"]}
          />
          <Card
            title="Server-side development"
            skills={["Node.js", "Express", "MongoDB", "PostgreSQL", "MySQL"]}
          />
          <Card
            title="Tools"
            skills={["Git", "Docker", "CI/CD", "AWS", "Azure"]}
          />
        </div>
        <div className="flex-1">
          <div className="overflow-hidden">
            <p id="description-box2">
              I thrive on solving real-world problems, turning ideas into clean,
              maintainable code, and learning through experimentation. You’ll
              find me building side projects, diving into new tech stacks, or
              simply exploring what’s next in the world of web development.
            </p>
          </div>
          <div>
            <button className="bg-[#7AF298] text-black px-4 py-2 rounded-full mt-10">
              <HoverCom>My Resume</HoverCom>
            </button>
          </div>
        </div>
      </div>
      <div className="flex gap-10 w-full justify-center px-2">
        <Experience years="6+" title="Years of Experience" />
        <Experience years="16+" title="Clients Worldwide" />
        <Experience years="97+" title="Completed Projects " />
      </div>
    </div>
  );
};

export default Skills;

const Card = ({ title, skills }: { title: string; skills: string[] }) => {
  return (
    <div className="border-b-2 mb-5 border-[#7AF298] pb-4 overflow-scroll md:overflow-hidden skills-card">
      <div className="flex justify-between pb-4">
        <h1>{title}</h1>
        <span>{"</>"}</span>
      </div>
      <div className="flex gap-2 opacity-70 ">
        {skills.map((skill) => (
          <span className="skills-chip" key={skill}>
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};

const Experience = ({ years, title }: { years: string; title: string }) => {
  const target = Number((years || "").replace(/\D/g, ""));
  return (
    <div className="flex-1 text-left mt-10 exp-item overflow-hidden">
      <h1 className="text-4xl font-bold">
        <span className="exp-num" data-target={target}>
          0
        </span>
        +
      </h1>
      <p className="text-md opacity-70 text-[#7AF298] mt-2 mb-5  ">{title}</p>
      <hr id="hr" className="border-[#7AF298]" />
    </div>
  );
};

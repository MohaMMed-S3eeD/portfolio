import React from "react";
import HoverCom from "./HoverCom";

const Skills = () => {
  return (
    <div className="max-w-[1200px] mx-auto h-screen flex flex-col justify-center">
      <h1 className="mb-10 text-[#7AF298]">{"// Skills"}</h1>
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
          <div>
            <p>
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
    </div>
  );
};

export default Skills;

const Card = ({ title, skills }: { title: string; skills: string[] }) => {
  return (
    <div className="border-b-2 mb-5 border-[#7AF298] pb-4">
      <div className="flex justify-between pb-4">
        <h1>{title}</h1>
        <span>{"</>"}</span>
      </div>
      <div className="flex gap-2 opacity-70 ">
        {skills.map((skill) => (
          <span key={skill}>{skill}</span>
        ))}
        {/* <span>CSS</span>
        <span>JavaScript</span>
        <span>React</span>
        <span>Next.js</span> */}
      </div>
    </div>
  );
};

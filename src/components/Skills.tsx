import React from "react";
import HoverCom from "./HoverCom";

const Skills = () => {
  return (
    <div>
      <h1>{"// Skills"}</h1>
      <div>
        <div>
          <div>Frontend</div>
          <div>Server-side development</div>
          <div>Tools</div>
        </div>
        <div>
          <div>
            <p>
              I thrive on solving real-world problems, turning ideas into clean,
              maintainable code, and learning through experimentation. You’ll
              find me building side projects, diving into new tech stacks, or
              simply exploring what’s next in the world of web development.
            </p>
          </div>
          <div>
            <HoverCom>My Resume</HoverCom>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;

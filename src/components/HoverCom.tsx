"use client";
import React from "react";

import { gsap } from "gsap";
import SplitText from "gsap/SplitText";
import { TextPlugin } from "gsap/TextPlugin";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(SplitText, TextPlugin);

const HoverCom = ({ children }: { children: React.ReactNode }) => {
  useGSAP(() => {
    gsap.to(".hover-com", {
      duration: 1,
      text: {
        value: "test",
        newClass: "class2",
        delimiter: " ",
      },
    });
  }, []);

  return (
    <div className="overflow-hidden">
      <div className="hover-com">{children}</div>
      <div className="hover-com">{children}</div>
    </div>
  );
};

export default HoverCom;

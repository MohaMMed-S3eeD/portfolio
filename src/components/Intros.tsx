"use client";
import React from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";

const Intros = () => {
  useGSAP(() => {
    gsap.to(".intro-box", {
      x: gsap.utils.wrap(["-100%", "100%"]),
      stagger: 0.1,
      duration: 1,
      ease: "power2.inOut",
    });
  }, []);

  return (
    <div className="fixed inset-0 h-[100vh] w-full z-50 flex flex-col">
      <div className="intro-box flex-1 bg-[#7AF298]"></div>
      <div className="intro-box flex-1 bg-[#172E1D]"></div>
      <div className="intro-box flex-1 bg-[#7AF298]"></div>
      <div className="intro-box flex-1 bg-[#172E1D]"></div>
    </div>
  );
};

export default Intros;

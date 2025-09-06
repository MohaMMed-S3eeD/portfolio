"use client";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ArrowRightIcon } from "lucide-react";
import React, { useEffect } from "react";

const Mouse = () => {
  useGSAP(() => {
    gsap.set("#mouse-follower-inner", {
      xPercent: -50,
      yPercent: -50,
    });
    const xTo = gsap.quickTo("#mouse-follower-inner", "x", {
        duration: 0.1,
        ease: "power2.out",
      }),
      yTo = gsap.quickTo("#mouse-follower-inner", "y", {
        duration: 0.1,
        ease: "power2.out",
      });

    window.addEventListener("mousemove", (e) => {
      xTo(e.clientX);
      yTo(e.clientY);
    });

    // handle hover links
    const links = document.querySelectorAll("a"); // كل اللينكات
    links.forEach((link) => {
      link.addEventListener("mouseenter", () => {
        gsap.to("#arrow-right-icon", {
          opacity: 1,
          rotate: -45,
          duration: 0.3,
          ease: "power3.out",
        });
        gsap.to("#mouse-follower-inner", {
          scale: 2.3,
          backgroundColor: "#000",
          duration: 0.7,
          ease: "power3.out",
        });
      });
      link.addEventListener("mouseleave", () => {
        gsap.to("#arrow-right-icon", {
          opacity: 0,
          duration: 0.3,
          ease: "power3.out",
        });
        gsap.to("#mouse-follower-inner", {
          scale: 1,
          backgroundColor: "#7AF298",
          duration: 0.3,
          ease: "power3.out",
        });
      });
    });
  }, []);

  return (
    <div
      id="mouse-follower"
      className="hidden md:block fixed top-0 left-0 pointer-events-none z-50"
    >
      <div
        id="mouse-follower-inner"
        className="w-[25px] h-[25px] bg-[#7AF298] rounded-full mix-blend-difference flex items-center justify-center"
      >
        <ArrowRightIcon
          id="arrow-right-icon"
          className=" w-4 h-4 text-[#7AF298] opacity-0"
        />
      </div>
    </div>
  );
};

export default Mouse;

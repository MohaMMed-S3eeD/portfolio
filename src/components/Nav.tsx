"use client";
import React, { useRef, useState } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

import { GSDevTools } from "gsap/GSDevTools";
import HoverCom from "./HoverCom";

gsap.registerPlugin(useGSAP, GSDevTools);
const Nav = () => {
  useGSAP(() => {
    gsap.fromTo(
      "#nav-box",
      {
        yPercent: -100,
        opacity: 0,
      },
      {
        delay: 0.5,
        yPercent: 0,
        opacity: 1,
        duration: 1,
        ease: "power2.inOut",
      }
    );
  }, []);
  return (
    <div
      id="nav-box"
      className="fixed top-0 left-0 right-0   flex justify-between p-2 py-5 font-bold text-xl z-50 "
    >
      <div>MOHAMED SAEED </div>
      <Menu />
    </div>
  );
};

export default Nav;

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const MenuRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  useGSAP(() => {
    gsap.set(contentRef.current, { height: 0, overflow: "hidden" });
  }, []);
  useGSAP(() => {
    gsap.to(MenuRef.current, {
      borderRadius: isOpen ? "12px" : "30px",
      duration: 0.5,
      ease: "power2.inOut",
    });
    gsap.to(contentRef.current, {
      height: isOpen ? "auto" : 0,
      duration: 0.6,
      ease: "power2.inOut",
    });
  }, [isOpen]);
  return (
    <div
      className={` w-fit font-light md:font-medium bg-white rounded-xl overflow-hidden ${
        isOpen ? "" : "hover:bg-[#7DDFB4]"
      }`}
      ref={MenuRef}
    >
      <button
        className={` w-full text-black px-4 md:px-6 py-2 flex items-center justify-around ${
          isOpen ? "rounded-t-xl" : "rounded-full"
        }`}
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        <h1 className="">Menu</h1>
        <span> {isOpen ? "</>" : "<>"}</span>
      </button>
      <div ref={contentRef}>
        <div className=" text-black px-4 md:px-8 pb-2 ">
          <HoverCom>Home</HoverCom>
          <HoverCom>About</HoverCom>
          <HoverCom>Contact</HoverCom>
          <HoverCom>Blog</HoverCom>
        </div>
      </div>
    </div>
  );
};

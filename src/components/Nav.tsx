"use client";
import React, { useRef, useState } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

import { GSDevTools } from "gsap/GSDevTools";

gsap.registerPlugin(useGSAP, GSDevTools);
const Nav = () => {
  return (
    <div className="fixed top-0 left-0 right-0   flex justify-between p-2 py-5 font-bold text-xl ">
      <div>Mohamed Saeed</div>
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
      className={`w-[200px] font-medium bg-white rounded-xl overflow-hidden ${
        isOpen ? "" : "hover:bg-[#7DDFB4]"
      }`}
      ref={MenuRef}
    >
      <button
        className={` w-full text-black px-8 py-2 flex items-center justify-between ${
          isOpen ? "rounded-t-xl" : "rounded-full"
        }`}
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        <h1>Menu</h1>
        <span> {isOpen ? "</>" : "<>"}</span>
      </button>
      <div ref={contentRef}>
        <div className=" text-black px-8 pb-2 ">
          <div>Home</div>
          <div>About</div>
          <div>Contact</div>
          <div>Home</div>
          <div>Home</div>
        </div>
      </div>
    </div>
  );
};

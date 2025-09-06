"use client";
import React from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Magnet from "./Magnet";

const Footer = () => {
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Main title animate
    gsap.from("#footer-section .footer-title", {
      opacity: 0,
      yPercent: -30,
      duration: 1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: "#footer-section .footer-title",
        start: "top 70%",
      },
    });

    // Start project button animate
    gsap.from("#footer-section .start-project", {
      opacity: 0,
      scale: 0.8,
      duration: 1.2,
      ease: "power2.out",
      scrollTrigger: {
        trigger: "#footer-section .start-project",
        start: "top 70%",
      },
      delay: 0.3,
    });

    // Divider animate
    gsap.from("#footer-section .footer-divider", {
      opacity: 0,
      scaleX: 0,
      duration: 1.5,
      ease: "power2.out",
      scrollTrigger: {
        trigger: "#footer-section .footer-divider",
        start: "top 80%",
      },
    });

    // Footer cards animate
    const footerCards = gsap.utils.toArray<HTMLElement>(
      "#footer-section .footer-card"
    );
    footerCards.forEach((card, index) => {
      gsap.from(card, {
        opacity: 0,
        y: 40,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: card,
          start: "top 80%",
        },
        delay: index * 0.1,
      });
    });
  }, []);

  return (
    <div
      id="footer-section"
      className="relative px-8 mx-auto h-screen flex flex-col justify-center pb-10 items-center "
    >
      <h1 className="footer-title flex flex-col justify-center items-center text-[20px] sm:text-[30px] md:text-[50px] lg:text-[70px] text-center font-bold max-w-full sm:max-w-[80%] md:max-w-[60%] lg:max-w-[40%] md:flex-1 px-4">
        Ready to take your idea to the next level?
        <Magnet padding={100} disabled={false} magnetStrength={15}>
          <p className="start-project text-black bg-[#7AF298] rounded-full w-[100px] h-[100px] sm:w-[120px] sm:h-[120px] md:w-[130px] md:h-[130px] flex items-center justify-center text-sm sm:text-lg md:text-xl font-semibold m-6 sm:m-8 md:m-10">
            Start Project
          </p>
        </Magnet>
      </h1>
      <div className="footer-divider flex gap-2 items-center mb-3 w-full ">
        <span className=" text-[#7AF298]">{"</"}</span>
        <span className="w-full border-b-2 border-[#3e3e3e] h-0"></span>
        <span className="text-[#7AF298]">{">"}</span>
      </div>
      <div className="w-full flex justify-between md:flex-1">
        <CardFooter
          title="Quick links"
          links={["Home", "About", "Contact", "Blog"]}
        />
        <CardFooter title="Protfolio" links={["Github", "Codepen"]} />
        <CardFooter
          title="Socials Links"
          links={["Linkedin", "Instagram", "Twitter (X)"]}
        />
      </div>
      <div className="flex flex-col md:flex-row justify-between w-full absolute bottom-0 left-0 p-5 ">
        <h3>mosaeed7888@gmail.com</h3>
        <h3>© 2025 Mohamed Saeed. All rights reserved.</h3>
      </div>
    </div>
  );
};

export default Footer;

const CardFooter = ({ title, links }: { title: string; links: string[] }) => {
  return (
    <div className="footer-card flex flex-col gap-5 text-xl">
      <h1 className="footer-card-title font-bold text-[#7AF298]">{title}</h1>
      {links.map((link) => (
        <h3 key={link} className="footer-card-link">
          {link}
        </h3>
      ))}
    </div>
  );
};

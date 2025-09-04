"use client";
import React from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { SplitText } from "gsap/SplitText";
import { GSDevTools } from "gsap/GSDevTools";
gsap.registerPlugin(SplitText, ScrollTrigger, GSDevTools);
const HeroSc = ({ Tl }: { Tl: GSAPTimeline }) => {
  useGSAP(() => {
    const split_top_text = SplitText.create("#top-text", {
      type: "words, chars",
    });
    const split_des_text = SplitText.create("#description-box", {
      type: "words",
    });
    const split_name_text = SplitText.create("#name-text", {
      type: "chars",
    });

    // Image box animate
    Tl.fromTo(
      "#image-box",
      {
        opacity: 0,
      },
      {
        opacity: 1,
        duration: 1.5,
        ease: "power2.inOut",
      }
    );
    // Top Text animate
    Tl.fromTo(
      split_top_text.words,
      {
        opacity: 0,
        yPercent: 100,
      },
      {
        yPercent: 0,
        opacity: 1,
        stagger: 0.1,
        duration: 1,
        ease: "expo.out",
      },
      "<0.5"
    );
    // Hand wave animate
    Tl.fromTo(
      "#hand-wave",
      {},
      {
        rotation: -15,
        yoyo: true,
        repeat: 1,
        transformOrigin: "bottom center",
        duration: 0.8,
        ease: "power2.inOut",
      },
      "<0.2"
    );
    // Name text animate
    Tl.fromTo(
      split_name_text.chars,
      {
        opacity: 0,
        xPercent: -100,
      },
      {
        stagger: 0.01,
        opacity: 1,
        xPercent: 0,
        duration: 1,
        ease: "power2.inOut",
      }
    );
    // description text animate
    Tl.fromTo(
      split_des_text.words,
      {
        opacity: 0.6,
      },
      {
        color: "#7AF298",
        stagger: 1,
        opacity: 1,
        duration: 2,
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: "body",
          start: "top top",
          end: "+=250",
          scrub: true,
        },
      }
    );
    // Contact box animate
    Tl.fromTo(
      "#contact-box",
      {
        opacity: 0,
        yPercent: 100,
      },
      {
        opacity: 1,
        yPercent: 0,
        duration: 1,
        ease: "power2.inOut",
      }
    );
    // Description box animate
    Tl.fromTo(
      "#des-box",
      {
        opacity: 0,
        yPercent: 100,
      },
      {
        opacity: 1,
        yPercent: 0,
        duration: 1,
        ease: "power2.inOut",
      },
      "<0"
    );
  }, []);
  return (
    <div className="mt-[70px] px-8 hero-text ">
      <Bg />
      <h1 id="top-text" className="text-4xl font-bold overflow-hidden">
        Hey,
        <span className="inline-block" id="hand-wave">
          👋
        </span>
        I&apos;m a Full Stack Developer
      </h1>
      <h1 id="name-text" className="text-9xl font-bold mt-3 text-[#7AF298]">
        MOHAMED SAEED
      </h1>
      <div
        id="image-box"
        className="absolute bottom-[10%] left-[50%] transform -translate-x-1/2  drop-shadow-2xl rounded-full overflow-hidden"
      >
        <Image
          src="/img2.png"
          alt="hero"
          width={300}
          height={300}
          className="rounded-full"
        />
      </div>
      <div id="contact-box" className="absolute bottom-0 left-0 p-5">
        <h1>E info@brunosimon.com </h1>
        <h1>T +39 03 463 853 02</h1>
      </div>
      <div id="des-box" className="absolute bottom-0 right-0 max-w-[330px] p-5">
        <p id="description-box">
          I craft fast, scalable, and user-friendly web applications with modern
          JavaScript frameworks — combining React on the frontend with robust
          server-side solutions using Node.js.
        </p>
        <div className="pt-14">/ Twitter / Github / LinkedIn / Youtube </div>
      </div>
    </div>
  );
};

export default HeroSc;

const Bg = () => {
  return (
    <>
      <svg
        className="absolute top-0 left-0 w-full h-full -z-30"
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox="0 0 800 450"
        opacity="0.66"
      >
        <defs>
          <filter
            id="bbblurry-filter"
            x="-100%"
            y="-100%"
            width="400%"
            height="400%"
            filterUnits="objectBoundingBox"
            primitiveUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feGaussianBlur
              stdDeviation="75"
              x="0%"
              y="0%"
              width="100%"
              height="100%"
              in="SourceGraphic"
              edgeMode="none"
              result="blur"
            ></feGaussianBlur>
          </filter>
        </defs>
        <g filter="url(#bbblurry-filter)">
          <ellipse
            rx="101"
            ry="103"
            cx="409.06647652775644"
            cy="253.3515791536778"
            fill="#7af298"
          ></ellipse>
        </g>
      </svg>
    </>
  );
};

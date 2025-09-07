"use client";
import React from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Magnet from "./Magnet";
gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  return (
    <div
      id="footer-section"
      className="relative px-8 mx-auto h-screen flex flex-col justify-center  items-center "
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox="0 0 800 450"
        opacity="1"
        className="absolute top-0 left-0 w-full h-full -z-30 blur-3xl"
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
              stdDeviation="130"
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
            rx="79.5"
            ry="150"
            cx="767.6839031221473"
            cy="40.31921001076856"
            fill="hsla(135, 100%, 42%, 1.00)"
          ></ellipse>
          <ellipse
            rx="79.5"
            ry="150"
            cx="52.57568917330485"
            cy="408.6973704350272"
            fill="hsla(119, 100%, 40%, 1.00)"
          ></ellipse>
        </g>
      </svg>
      <h1 className="footer-title flex flex-col justify-center items-center text-[20px] sm:text-[30px] md:text-[50px] lg:text-[70px] text-center font-bold max-w-full sm:max-w-[80%] md:max-w-[60%] lg:max-w-[40%] md:flex-1 px-4">
        Ready to take your idea to the next level?
        <Magnet padding={100} disabled={false} magnetStrength={15}>
          <a
            target="_blank"
            href="https://wa.link/7q4teq"
            rel="noopener"
            className="start-project text-black bg-[#7AF298] rounded-full w-[100px] h-[100px] sm:w-[120px] sm:h-[120px] md:w-[130px] md:h-[130px] flex items-center justify-center text-sm sm:text-lg md:text-xl font-semibold m-6 sm:m-8 md:m-10"
          >
            Start Project
          </a>
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
          links={[
            { title: "Home", link: "/" },
            { title: "About", link: "/about" },
            { title: "Contact", link: "/contact" },
            { title: "Blog", link: "/blog" },
          ]}
        />
        <CardFooter
          title="Protfolio"
          links={[
            { title: "Github", link: "https://github.com/MohaMMed-S3eeD" },
            {
              title: "Linkedin",
              link: "https://www.linkedin.com/in/mohamed-saeed-3b3118263",
            },
          ]}
        />
        <CardFooter
          title="Socials Links"
          links={[
            {
              title: "Linkedin",
              link: "https://www.linkedin.com/in/mohamed-saeed-3b3118263",
            },
            {
              title: "Whatsapp",
              link: "https://wa.link/7q4teq",
            },
            {
              title: "Codepen",
              link: "https://codepen.io/geuwjkvb-the-sans/",
            },
          ]}
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

const CardFooter = ({
  title,
  links,
}: {
  title: string;
  links: { title: string; link: string }[];
}) => {
  return (
    <div className="footer-card flex flex-col gap-5 text-xl">
      <h1 className="footer-card-title font-bold text-[#7AF298]">{title}</h1>
      {links.map((link: { title: string; link: string }) => (
        <a
          key={link.title}
          className="footer-card-link"
          target="_blank"
          href={link.link}
          rel="noopener"
        >
          {link.title}
        </a>
      ))}
    </div>
  );
};

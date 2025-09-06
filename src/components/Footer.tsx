"use client";
import React from "react";
import Magnet from "./Magnet";

const Footer = () => {
  return (
    <div className="relative px-8 mx-auto h-screen flex flex-col justify-center pb-10 items-center ">
      <h1 className="flex flex-col justify-center items-center text-[20px] sm:text-[30px] md:text-[50px] lg:text-[70px] text-center font-bold max-w-full sm:max-w-[80%] md:max-w-[60%] lg:max-w-[40%] md:flex-1 px-4">
        Ready to take your idea to
        the next level?
        <Magnet padding={100} disabled={false} magnetStrength={15}>
          <p className="text-black bg-[#7AF298] rounded-full w-[100px] h-[100px] sm:w-[120px] sm:h-[120px] md:w-[130px] md:h-[130px] flex items-center justify-center text-sm sm:text-lg md:text-xl font-semibold m-6 sm:m-8 md:m-10">
            Start Project
          </p>
        </Magnet>
      </h1>
      <div className="flex gap-2 items-center mb-3 w-full ">
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
    <div className="flex flex-col gap-5 text-xl">
      <h1 className="font-bold text-[#7AF298]">{title}</h1>
      {links.map((link) => (
        <h3 key={link}>{link}</h3>
      ))}
    </div>
  );
};

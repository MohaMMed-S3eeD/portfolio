"use client";
import React from "react";
import Magnet from "./Magnet";

const Footer = () => {
  return (
    <div className=" px-8 mx-auto h-screen flex flex-col justify-center pb-10 items-center ">
      <h1 className="text-[70px] text-center font-bold max-w-[40%] flex-1 ">
        Ready to take your idea to
        <Magnet padding={100} disabled={false} magnetStrength={15}>
          <p className="text-black bg-[#7AF298] rounded-full w-[130px] h-[130px] flex items-center justify-center text-xl font-semibold m-10">
            Start Project
          </p>
        </Magnet>
        the next level?
      </h1>
      <div className="flex gap-2 items-center mb-3 w-full ">
        <span className=" text-[#7AF298]">{"</"}</span>
        <span className="w-full border-b-2 border-[#3e3e3e] h-0"></span>
        <span className="text-[#7AF298]">{">"}</span>
      </div>
      <div className="w-full flex justify-between flex-1">
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
      <div className="flex justify-between w-full ">
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

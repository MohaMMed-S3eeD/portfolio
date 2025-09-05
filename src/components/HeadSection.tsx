import React from "react";

const HeadSection = ({ title, description }: { title: string; description: string }) => {
  return (
    <>
      <div className=" flex w-full justify-between">
        <h1 className=" text-[#7AF298] mb-5 font-bold">{"// " + title}</h1>
        <p className="text-xl">{description}</p>
      </div>
      <div className="flex gap-2 items-center mb-3">
        <span className=" text-[#7AF298]">{"</"}</span>
        <span className="w-full border-b-2 border-[#3e3e3e] h-0"></span>
        <span className="text-[#7AF298]">{">"}</span>
      </div>
    </>
  );
};

export default HeadSection;

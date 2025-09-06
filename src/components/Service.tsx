import React from "react";
import HeadSection from "./HeadSection";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { MoveUpRight } from "lucide-react";
import Image from "next/image";
const Service = () => {
  return (
    <div className="max-w-[1200px] px-4 md:px-8 mx-auto h-screen flex flex-col justify-center mb-10">
      <HeadSection title="Services" description=" Web Development Services " />
      <div className="flex flex-col xl:flex-row items-center gap-10">
        <Image
          className="flex-1 w-full h-full"
          src="/image.png"
          alt="service"
          width={100}
          height={100}
        />
        <Accordion
          defaultValue="item-1"
          className="flex flex-col flex-1 w-full h-full"
          type="single"
        >
          <ServiceItem
            index="item-1"
            title="Custom Web Development"
            description="Build complete web applications from scratch — frontend to backend — optimized for speed, security, and scalability."
            buttonText="Hire Me"
          />
          <ServiceItem
            index="item-2"
            title="Frontend Engineering"
            description="Build complete web applications from scratch — frontend to backend — optimized for speed, security, and scalability."
            buttonText="Hire Me"
          />
          <ServiceItem
            index="item-3"
            title="Server logic & API Development"
            description="Build complete web applications from scratch — frontend to backend — optimized for speed, security, and scalability."
            buttonText="Hire Me"
          />
          <ServiceItem
            index="item-4"
            title="Full Stack Application Development"
            description="Build complete web applications from scratch — frontend to backend — optimized for speed, security, and scalability."
            buttonText="Hire Me"
          />
        </Accordion>
      </div>
    </div>
  );
};

export default Service;

const ServiceItem = ({
  title,
  description,
  buttonText,
  index,
}: {
  title: string;
  description: string;
  buttonText: string;
  index: string;
}) => {
  return (
    <AccordionItem className="flex-1" value={index}>
      <AccordionTrigger className="text-2xl font-bold">
        {title}
      </AccordionTrigger>
      <AccordionContent>
        <p className="text-md">{description}</p>
        <button className=" BTN group flex flex-col items-center gap-2 text-[#7AF298]  pb-1 my-2">
          <div className="flex items-center gap-2">
            <h1 className="text-lg font-light"> {buttonText}</h1>
            <span className="transition-transform duration-300 ease-out group-hover:rotate-45">
              <MoveUpRight />
            </span>
          </div>
          <hr className="w-full  border-[#7AF298] opacity-60 transition-opacity duration-300 ease-out group-hover:opacity-100" />
        </button>
      </AccordionContent>
    </AccordionItem>
  );
};

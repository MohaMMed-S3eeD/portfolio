"use client";
import React from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import HeadSection from "./HeadSection";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { MoveUpRight } from "lucide-react";
import Image from "next/image";
gsap.registerPlugin(ScrollTrigger);

const Service = () => {
  useGSAP(() => {
    // Service items animate
    const serviceItems = gsap.utils.toArray<HTMLElement>(
      "#services-section .service-item"
    );
    serviceItems.forEach((item) => {
      gsap.from(item, {
        opacity: 0,
        yPercent: 30,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: item,
          start: "top 90%",
          end: "top 60%",
        },
      });
    });
  }, []);

  return (
    <div
      id="services-section"
      className="max-w-[1200px] px-4 md:px-8 mx-auto  flex flex-col justify-center mb-10 h-screen"
    >
      <HeadSection title="Services" description=" Web Development Services " />
      <div className="flex flex-col xl:flex-row items-center gap-10">
        <Image
          className="service-image max-w-[50%] flex-1 "
          src="/img.jpeg"
          alt="service"
          width={1000}
          height={1000}
          loading="lazy"
        />
        <Accordion
          defaultValue="item-1"
          className="accordion-container flex flex-col flex-1 w-full h-full"
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
    <AccordionItem className="service-item flex-1" value={index}>
      <AccordionTrigger className="text-2xl font-bold">
        {title}
      </AccordionTrigger>
      <AccordionContent>
        <p className="text-md">{description}</p>
        <button className=" BTN group flex flex-col items-center gap-2 text-[#7AF298]  pb-1 my-2 ">
          <div className="flex items-center gap-2">
            <h1 className="text-lg font-light"> {buttonText}</h1>
            <span className=" transition-transform duration-300 ease-out group-hover:rotate-45">
              <MoveUpRight />
            </span>
          </div>
          <hr className="w-full  border-[#7AF298] opacity-60 transition-opacity duration-300 ease-out group-hover:opacity-100" />
        </button>
      </AccordionContent>
    </AccordionItem>
  );
};

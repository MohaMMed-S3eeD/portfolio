"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import HeadSection from "./HeadSection";

const ExploreWork = () => {
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    // Title animate
    gsap.from("#explore-work-section .section-title", {
      opacity: 0,
      yPercent: -30,
      duration: 1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: "#explore-work-section .section-title",
        start: "top 70%",
      },
    });
    
    // Description box animate
    gsap.from("#explore-work-section #description-box2", {
      opacity: 0,
      xPercent: -40,
      duration: 1.5,
      ease: "power2.out",
      scrollTrigger: {
        trigger: "#explore-work-section #description-box2",
        start: "top 70%",
      },
    });
    
    // Work cards animate
    const workCards = gsap.utils.toArray<HTMLElement>(
      "#explore-work-section .work-card"
    );
    workCards.forEach((card, index) => {
      gsap.from(card, {
        opacity: 0,
        y: 60,
        duration: 1.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: card,
          start: "top 80%",
        },
        delay: index * 0.1,
      });
      
      // Animate card image
      const cardImage = card.querySelector(".work-card-image");
      if (cardImage) {
        gsap.from(cardImage, {
          scale: 1.1,
          duration: 1.5,
          ease: "power2.out",
          scrollTrigger: {
            trigger: card,
            start: "top 80%",
          },
        });
      }
      
      // Animate category chips
      const chips = card.querySelectorAll(".category-chip");
      if (chips.length) {
        gsap.from(chips, {
          opacity: 0,
          y: 20,
          stagger: 0.05,
          duration: 0.6,
          ease: "power2.out",
          scrollTrigger: {
            trigger: card,
            start: "top 70%",
          },
          delay: 0.3,
        });
      }
    });
  }, []);

  return (
    <div id="explore-work-section" className="max-w-[1200px] px-4 md:px-8 mx-auto  flex flex-col justify-center my-10">
      <HeadSection
        title="Explore Work"
        description=" My Latest Projects"
      />

      <div className="grid grid-cols-2 gap-16">
        <WorkCard
          title="WorkCard"
          description="Techzo is a cutting-edge design agency template built to showcase innovation, digital expertise, and a bold creative presence online"
          image="/image.png"
          categorys={["WorkCard", "WorkCard", "WorkCard"]}
          link="WorkCard"
        />
        <WorkCard
          title="WorkCard"
          description="Techzo is a cutting-edge design agency template built to showcase innovation, digital expertise, and a bold creative presence online"
          image="/image.png"
          categorys={["WorkCard", "WorkCard", "WorkCard"]}
          link="WorkCard"
        />
        <WorkCard
          title="WorkCard"
          description="Techzo is a cutting-edge design agency template built to showcase innovation, digital expertise, and a bold creative presence online"
          image="/image.png"
          categorys={["WorkCard", "WorkCard", "WorkCard"]}
          link="WorkCard"
        />
        <WorkCard
          title="WorkCard"
          description="Techzo is a cutting-edge design agency template built to showcase innovation, digital expertise, and a bold creative presence online"
          image="/image.png"
          categorys={["WorkCard", "WorkCard", "WorkCard"]}
          link="WorkCard"
        />
      </div>
    </div>
  );
};

export default ExploreWork;

const WorkCard = ({
  title,
  description,
  image,
  categorys,
  link,
}: {
  title: string;
  description: string;
  image: string;
  categorys: string[];
  link: string;
}) => {
  
  return (
    <Link href={link} className="work-card flex flex-col gap-2 my-3 overflow-hidden">
      <Image
        className="work-card-image w-full h-full max-h-[400px] object-cover"
        width={100}
        height={100}
        src={image}
        alt={title}
      />
      <h1 className="text-2xl my-3 font-bold">{title}</h1>
      <p className="text-sm opacity-70">{description}</p>
      <ul className="flex flex-wrap  gap-2 my-3 ">
        {categorys.map((category, index) => (
          <li
            className="category-chip text-[#7AF298] text-xs font-medium bg-[#3b3b3b] rounded-full px-3 py-1.5"
            key={index}
          >
            {category}
          </li>
        ))}
      </ul>
    </Link>
  );
};

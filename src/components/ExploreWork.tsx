"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import HeadSection from "./HeadSection";

const data = [
  {
    title: "Ehgezly",
    description:
      "Ehgezly – Booking System 🚀 Ehgezly is an integrated booking system that allows service providers to add services and appointments, and customers to easily book and track the status of their requests.",
    image: "/ehgezly.png",
    categorys: [
      "Next.js",
      "Tailwind",
      "Shadcn",
      "TypeScript",
      "PostgreSQL",
      "Supabase",
    ],
    link: "https://ehgezly.com",
  },
  {
    title: "Food Ordering App",
    description:
      "An advanced food ordering system demonstrating enterprise-level architecture patterns, complex state management, and robust internationalization. Built for scalability, maintainability, and real-world production deployment.",
    image: "/Food.png",
    categorys: [
      "Next.js",
      "Tailwind",
      "Shadcn",
      "TypeScript",
      "PostgreSQL",
      "Supabase",
    ],
    link: "https://food-ordering-app.vercel.app/",
  },
  {
    title: "Solar Company Landing Page",
    description:
      "This project is a modern, responsive landing page for a solar energy company. Built with HTML5, CSS3, it aims to attract customers. Key features include a clean UI, responsive design, and interactive elements. It adapts to various screen sizes and includes a mobile navigation menu.",
    image: "/Solar.png",
    categorys: ["HTML", "CSS", "JavaScript"],
    link: "https://solar-company-landing-page.vercel.app/",
  },
  {
    title: "X Clone UI",
    description:
      "A user interface (UI) project inspired by X (formerly Twitter), developed using Next.js, TypeScript, and Tailwind CSS. The project aims to recreate the core user experience of the X platform, focusing on interface design and content display. It includes key components like a feed, content sharing, profile page, and utilizes ImageKit for image",
    image: "/X.png",
    categorys: ["Next.js", "TypeScript", "Tailwind"],
    link: "https://x-clone-ui.vercel.app/",
  },
];
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
    <div
      id="explore-work-section"
      className="max-w-[1200px] px-4 md:px-8 mx-auto  flex flex-col justify-center my-10"
    >
      <HeadSection title="Explore Work" description=" My Latest Projects" />

      <div className="grid grid-cols-2 md:gap-16 gap-4">
        {data.map((item, index) => (
          <WorkCard
            key={index}
            title={item.title}
            description={item.description}
            image={item.image}
            categorys={item.categorys}
            link={item.link}
          />
        ))}
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
    <Link
      href={link}
      className="work-card flex flex-col gap-2 my-3 overflow-hidden w-full h-full   "
    >
      <Image
        className="work-card-image w-full object-cover"
        width={1000}
        height={1000}
        src={image}
        alt={title}
      />
      <h1 className="text-2xl my-3 font-bold line-clamp-1">{title}</h1>
      <p className="text-sm opacity-70 line-clamp-3 md:line-clamp-none">
        {description}
      </p>
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

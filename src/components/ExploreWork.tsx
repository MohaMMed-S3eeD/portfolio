"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import HeadSection from "./HeadSection";
gsap.registerPlugin(ScrollTrigger);

const data = [
  {
    title: "Ehgezly",
    description:
      "Ehgezly – Booking System 🚀 Ehgezly is an integrated booking system that allows service providers to add services and appointments, and customers to easily book and track the status of their requests.",
    image:
      "https://res.cloudinary.com/dtvr83fb3/image/upload/v1757216385/ehgezly_itxvys.png",
    categorys: [
      "Next.js",
      "Tailwind",
      "Shadcn",
      "TypeScript",
      "PostgreSQL",
      "Supabase",
    ],
    link: "https://ehgezly.vercel.app",
  },
  {
    title: "Food Ordering App",
    description:
      "An advanced food ordering system demonstrating enterprise-level architecture patterns, complex state management, and robust internationalization. Built for scalability, maintainability, and real-world production deployment.",
    image:
      "https://res.cloudinary.com/dtvr83fb3/image/upload/v1757216370/Food_zz7oai.png",
    categorys: [
      "Next.js",
      "Tailwind",
      "Shadcn",
      "TypeScript",
      "PostgreSQL",
      "Supabase",
    ],
    link: "https://food-ordering-mo.vercel.app",
  },

  {
    title: "X Clone UI",
    description:
      "A user interface (UI) project inspired by X (formerly Twitter), developed using Next.js, TypeScript, and Tailwind CSS. The project aims to recreate the core user experience of the X platform, focusing on interface design and content display. It includes key components like a feed, content sharing, profile page, and utilizes ImageKit for image",
    image:
      "https://res.cloudinary.com/dtvr83fb3/image/upload/v1757216428/X_mpg3a3.png",
    categorys: ["Next.js", "TypeScript", "Tailwind"],
    link: "https://x-clone-ui.vercel.app/",
  },
  {
    title: "V7-COLADA",
    description:
      "A visually engaging landing page featuring smooth scroll-based animations powered by GSAP (GreenSock Animation Platform), showcasing a fictional V7-COLADA drink.",
    image:
      "https://res.cloudinary.com/dtvr83fb3/image/upload/v1757216476/V7-COLADA_dccxlk.png",
    categorys: ["HTML", "CSS", "JavaScript", "GSAP"],
    link: "https://v7-gsap.vercel.app/",
  },
  {
    title: "Gaming Mo 🎮",
    description:
      "This project was created to serve as a modern gaming platform while also being a learning journey in web development. Gaming Mo aims to bring gamers together through a sleek, user-friendly interface where they can stay updated with the latest gaming news and share their experiences.",
    image:
      "https://res.cloudinary.com/dtvr83fb3/image/upload/v1757216482/Gaming_ecphhn.png",
    categorys: ["Next.js", "TypeScript", "Tailwind"],
    link: "https://gaming-mo.vercel.app",
  },
  {
    title: "Burger King",
    description:
      "A modern, responsive website for Burger King restaurant built with Next.js 15, featuring a beautiful UI, menu display, and contact functionality.",
    image:
      "https://res.cloudinary.com/dtvr83fb3/image/upload/v1757216339/Burger_cjwm1p.png",
    categorys: ["Next.js", "TypeScript", "Shadcn", "prisma", "Tailwind"],
    link: "https://burger-king-mo.vercel.app/",
  },
  {
    title: "Static Movie Site",
    description:
      "A simple static website for displaying movies, upcoming releases, and a newsletter subscription option.",
    image:
      "https://res.cloudinary.com/dtvr83fb3/image/upload/v1757216497/Movie_d1ls75.png",
    categorys: ["html", "css", "javascript"],
    link: "https://static-movie-site.vercel.app",
  },
  {
    title: "Solar Company Landing Page",
    description:
      "This project is a modern, responsive landing page for a solar energy company. Built with HTML5, CSS3, it aims to attract customers. Key features include a clean UI, responsive design, and interactive elements. It adapts to various screen sizes and includes a mobile navigation menu.",
    image:
      "https://res.cloudinary.com/dtvr83fb3/image/upload/v1757216469/Solar_fiomxf.png",
    categorys: ["HTML", "CSS", "JavaScript"],
    link: "https://solar-cpy.netlify.app/",
  },
];
const ExploreWork = () => {
  useGSAP(() => {
    // Title animate
    gsap.fromTo(
      "#explore-work-section .section-title",
      {
        opacity: 0,
      },
      {
        opacity: 1,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: "#explore-work-section .section-title",
          start: "top 95%",
        },
      }
    );

    // Description box animate
    gsap.fromTo(
      "#explore-work-section #description-box2",
      {
        opacity: 0,
      },
      {
        opacity: 1,
        duration: 1.5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: "#explore-work-section #description-box2",
          start: "top 95%",
        },
      }
    );

    // Work cards animate
    const workCards = gsap.utils.toArray<HTMLElement>(
      "#explore-work-section .work-card"
    );
    workCards.forEach((card) => {
      gsap.fromTo(
        card,
        {
          opacity: 0,
          duration: 1.2,
          ease: "power2.out",
        },
        {
          opacity: 1,
          duration: 1.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: card,
            start: "top 95%",
            end: "top 90%",
          },
        }
      );

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
    <section
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
    </section>
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
        loading="lazy"
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

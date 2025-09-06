import React from "react";
import Image from "next/image";
import Link from "next/link";
import HeadSection from "./HeadSection";

const ExploreWork = () => {
  return (
    <div className="max-w-[1200px] px-8 mx-auto  flex flex-col justify-center mb-10">
      <HeadSection
        title="Explore Work"
        description="A Showcase of My Latest Projects"
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
    <Link href={link} className="flex flex-col gap-2 my-3">
      <Image
        className="w-full h-full max-h-[400px] object-cover"
        width={100}
        height={100}
        src={image}
        alt={title}
      />
      <h1 className="text-2xl my-3 font-bold">{title}</h1>
      <p className="text-sm opacity-70">{description}</p>
      <ul className="flex gap-2 my-3">
        {categorys.map((category, index) => (
          <li
            className="text-[#7AF298] text-xs  font-medium bg-[#3b3b3b] rounded-full px-3 py-1.5"
            key={index}
          >
            {category}
          </li>
        ))}
      </ul>
    </Link>
  );
};

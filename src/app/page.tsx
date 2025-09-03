"use client";
import { useState } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import HeroSc from "@/components/HeroSc";
import Intros from "@/components/Intros";
gsap.registerPlugin(useGSAP);

export default function Home() {
  const tl = gsap.timeline({
    defaults: {
      duration: 1,
      ease: "power2.inOut",
    },
  });
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [Tl, setTl] = useState(tl);
  return (
    <div>
      <Intros Tl={Tl} />
      <HeroSc Tl={Tl} />
      <div className="h-[1000px]"></div>
    </div>
  );
}

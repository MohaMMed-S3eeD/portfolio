"use client";
import { useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { gsap } from "gsap";

gsap.registerPlugin(ScrollTrigger);

export default function ScrollTriggerRefresher() {
  useEffect(() => {
    window.addEventListener("load", () => {
      ScrollTrigger.refresh();
    });
  }, []);

  return null; // مش محتاج يرندر أي UI
}

"use client";
import React, { useRef } from "react";

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import SplitText from "gsap/SplitText";

gsap.registerPlugin(SplitText);

const HoverCom = ({ children }: { children: React.ReactNode }) => {
  const rootRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const tweenRef = useRef<gsap.core.Tween | null>(null);
  const splitRefs = useRef<SplitText[] | null>(null);

  useGSAP(() => {
    if (!rootRef.current || !trackRef.current) return;

    const firstLine = trackRef.current.children[0] as HTMLElement | undefined;
    if (firstLine) {
      gsap.set(rootRef.current, { height: firstLine.offsetHeight });
    }

    gsap.set(trackRef.current, { yPercent: 0 });
    tweenRef.current = gsap.to(trackRef.current, {
      yPercent: -50,
      duration: 0.5,
      ease: "power3.out",
      paused: true,
    });

    const lines = Array.from(
      trackRef.current.querySelectorAll<HTMLElement>(".hover-line")
    );
    splitRefs.current = lines.map(
      (line) => new SplitText(line, { type: "chars" })
    );

    if (splitRefs.current[0]) {
      gsap.set(splitRefs.current[0].chars, { yPercent: 0, opacity: 1 });
    }
    if (splitRefs.current[1]) {
      gsap.set(splitRefs.current[1].chars, { yPercent: 120, opacity: 0 });
    }

    return () => {
      if (splitRefs.current) {
        splitRefs.current.forEach((s) => s.revert());
      }
    };
  }, []);

  const handleEnter = () => {
    if (tweenRef.current) {
      tweenRef.current.play();
    }
    const splits = splitRefs.current || [];
    const first = splits[0];
    const second = splits[1];
    if (second) {
      gsap.to(second.chars, {
        yPercent: 0,
        opacity: 1,
        duration: 0.6,
        ease: "power3.out",
        stagger: 0.1,
      });
    }
    if (first) {
      gsap.to(first.chars, {
        yPercent: -120,
        opacity: 0,
        duration: 0.5,
        ease: "power3.in",
        stagger: 0.1,
      });
    }
  };

  const handleLeave = () => {
    if (tweenRef.current) {
      tweenRef.current.reverse();
    }
    const splits = splitRefs.current || [];
    const first = splits[0];
    const second = splits[1];
    if (second) {
      gsap.to(second.chars, {
        yPercent: 120,
        opacity: 0,
        duration: 0.5,
        ease: "power3.in",
        stagger: 0.1,
      });
    }
    if (first) {
      gsap.to(first.chars, {
        yPercent: 0,
        opacity: 1,
        duration: 0.6,
        ease: "power3.out",
        stagger: 0.1,
      });
    }
  };

  return (
    <div
      ref={rootRef}
      className=" overflow-hidden"
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
    >
      <div ref={trackRef} className="will-change-transform">
        <div className="hover-line">{children}</div>
        <div className="hover-line">{children}</div>
      </div>
    </div>
  );
};

export default HoverCom;

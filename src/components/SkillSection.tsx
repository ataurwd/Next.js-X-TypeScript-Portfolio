"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";


const content = [
  {
    title: "WordPress Master Development",
    description:
      "Build and customize high-performance WordPress themes and plugins tailored to your brand’s unique needs. From lightweight UI frameworks to powerful backend integrations, we deliver scalable and secure WordPress solutions that enhance speed, SEO, and usability.",
    content: (
      <div className="flex text-center h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--blue-500),var(--indigo-500))] text-white">
        WordPress Master Theme <br></br> & Plugin Development
      </div>
    ),
  },
  {
    title: "Building Modern Websites with React",
    description:
      "We create fast, interactive, and user-friendly websites using React.js — the most powerful frontend library in the modern web ecosystem. From single-page applications to complex dashboards, every interface is optimized for performance and seamless user experience.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--emerald-500),var(--teal-500))] text-white">
        Building Modern Websites with React
      </div>
    ),
  },
  {
    title: "Custom JavaScript Code & Widget Building",
    description:
      "Enhance your website functionality with custom JavaScript components, tools, and interactive widgets. Whether it’s advanced animations, data visualization, or user interaction logic — we write clean, efficient code that brings ideas to life with precision.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--rose-500))] text-white">
        Custom JavaScript Code & Widget Building
      </div>
    ),
  },
  {
    title: "Team Collaboration & Leadership",
    description:
      "Strong teamwork drives great results. We focus on building collaborative environments where ideas flow freely and progress happens faster. With effective leadership and communication, we ensure every project stays on track and every team member performs at their best.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] text-white">
        Team Collaboration & Leadership
      </div>
    ),
  },
  {
    title: "UI/UX Design & Interactive Prototyping",
    description:
      "Design meets functionality in our approach to UI/UX. We craft clean, engaging, and intuitive user interfaces backed by thoughtful user experience strategy. Every element is designed to tell a story and keep users engaged from the first click.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--purple-500),var(--fuchsia-500))] text-white">
        UI/UX Design & Interactive Prototyping
      </div>
    ),
  },
  {
    title: "Full-Stack Web Application Development",
    description:
      "From frontend to backend, we deliver complete web applications built with modern stacks like React, Node.js, and MongoDB. Our solutions are fast, secure, and scalable — empowering businesses to operate efficiently and grow digitally.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--yellow-500),var(--amber-500))] text-white">
        Full-Stack Web Application Development
      </div>
    ),
  },
];

export function SkillSection() {
  return (
    <div className="w-full" id="expertise">
      <StickyScroll content={content} />
    </div>
  );
}

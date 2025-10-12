import React from "react";
import {
  DraggableCardBody,
  DraggableCardContainer,
} from "@/components/ui/draggable-card";

export function Portfolio() {
  const items = [
    {
      title: "Next.js-Powered Educational Portal for Engineering Excellence",
      image: "https://next-js-portfolio-five-omega.vercel.app/assets/learning.png",
      liveLink: "https://learning-zone-with-next-js.vercel.app/",
      className: "absolute top-10 left-[20%] rotate-[-5deg]",
    },
    {
      title: "User-Friendly Platform for Tour Planning and Booking",
      image: "https://next-js-portfolio-five-omega.vercel.app/assets/treva.png",
      liveLink: "https://tourism-management-1e7fd.web.app/",
      className: "absolute top-40 left-[25%] rotate-[-7deg]",
    },
    {
      title: "BookQuill- A user-friendly Library Management System",
      image: "https://next-js-portfolio-five-omega.vercel.app/assets/book.png",
      liveLink: "https://book-shop-7a4d6.web.app/",
      className: "absolute top-32 left-[55%] rotate-[10deg]",
    },
    {
      title: "Vocable- A Better Way to Teach Words Meanings",
      image: "https://next-js-portfolio-five-omega.vercel.app/assets/vocable.png",
      liveLink: "https://vocabulary-learning-c0cb4.web.app/",
      className: "absolute top-20 right-[35%] rotate-[2deg]",
    },
    {
      title: "ElectroMart- A Tech Accessory Dynamic Website",
      image: "https://next-js-portfolio-five-omega.vercel.app/assets/electro.png",
      liveLink: "https://electromart-bd.netlify.app/",
      className: "absolute top-24 left-[45%] rotate-[-7deg]",
    },
    {
      title: "Cricket Player Marketplace",
      image: "https://next-js-portfolio-five-omega.vercel.app/assets/cricket.png",
      liveLink: "https://ataurwd-b10a7.netlify.app/",
      className: "absolute top-8 left-[30%] rotate-[4deg]",
      },
        {
      title: "VisaGo- Visa Create And Applied Visa Application",
      image: "https://next-js-portfolio-five-omega.vercel.app/assets/visago.png",
      liveLink: "https://visago-with-mongodb.web.app/",
      className: "absolute top-5 left-[40%] rotate-[8deg]",
    },
  ];

  return (
    <DraggableCardContainer className="relative flex min-h-screen w-full items-center justify-center overflow-clip md:my-10 py-10">
      <p className="absolute top-1/2 mx-auto max-w-sm -translate-y-3/4 text-center text-2xl font-black text-neutral-400 md:text-4xl dark:text-neutral-800">
        Explore My Projects
      </p>
      {items.map((item) => (
        <DraggableCardBody className={item.className}>
          <img
            src={item.image}
            alt={item.title}
            className="pointer-events-none relative z-10 h-[400px] w-[800px] object-cover rounded-lg"
          />
          <h3 className="mt-4 text-center text-2xl font-bold text-neutral-700 dark:text-neutral-300">
            {item.title}
          </h3>
          <div className="mt-4 text-center">
            <a
              href={item.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white bg-[#23C5F5] hover:bg-[#0c6f8d] px-4 py-2 rounded-md transition-all"
            >
              Live Demo
            </a>
          </div>
        </DraggableCardBody>
      ))}
    </DraggableCardContainer>
  );
}

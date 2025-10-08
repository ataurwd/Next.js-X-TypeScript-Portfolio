"use client";
import React from "react";
import { TextHoverEffect } from "./ui/text-hover-effect";
import { BackgroundGradientAnimation } from "./ui/background-gradient-animation";
import { AuroraBackground } from "./ui/aurora-background";
import { motion } from "motion/react";

const HeroSection = () => {
  return (
    <AuroraBackground>
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="relative flex flex-col gap-4 items-center justify-center px-4"
      >
        <div className="md:h-[80vh] flex justify-center items-center">
          <TextHoverEffect text="DEV ATAUR" />
        </div>
      </motion.div>
    </AuroraBackground>
  );
};

export default HeroSection;

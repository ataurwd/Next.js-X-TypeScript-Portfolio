import React from "react";
import { TextHoverEffect } from "./ui/text-hover-effect";
import { BackgroundGradientAnimation } from "./ui/background-gradient-animation";

const HeroSection = () => {
  return (
    <BackgroundGradientAnimation
  gradientBackgroundStart="rgb(0, 0, 50)"
  gradientBackgroundEnd="rgb(0, 30, 80)"
  firstColor="20, 100, 180" 
  secondColor="0, 200, 255"
  thirdColor="100, 255, 100"
  fourthColor="255, 100, 0" // Keeping fourth and fifth for variation
  fifthColor="255, 220, 120"
  pointerColor="180, 200, 255"
>
      <div className="md:h-[80vh] flex justify-center items-center md:pt-32">
        <TextHoverEffect text="DEV ATAUR" />
      </div>
    </BackgroundGradientAnimation>
  );
};

export default HeroSection;

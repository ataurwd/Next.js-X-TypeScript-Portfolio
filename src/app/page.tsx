import { About } from "@/components/About";
import HeroSection from "@/components/HeroSection";
import { Skill } from "@/components/Skill";
import { SkillSection } from "@/components/SkillSection";
import { Portfolio } from "./../components/Portfolio";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <About />
      <SkillSection />
      <Skill />
      {/* <SmoothCursor /> */}
      <h1 className="text-black md:py-10 pt-5 text-center md:text-5xl text-xl font-bold">
        Featured Projects
      </h1>
      <Portfolio />
    </div>
  );
}

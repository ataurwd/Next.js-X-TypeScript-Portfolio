import { About } from "@/components/About";
import HeroSection from "@/components/HeroSection";
import { Skill } from "@/components/Skill";
import { SkillSection } from "@/components/SkillSection";
import { Portfolio } from "./../components/Portfolio";
import TimelinePage2 from "@/components/Education";

export default function Home() {
  return (
    <div>
      <div  className="flex justify-center items-center block md:hidden h-screen bg-black text-white">
        <h1 className="text-4xl text-center">This Website Not Made For Mobile Version.<br></br> <span className="text-green-400">Please Open on Desktop Version</span></h1>
      </div>
      <div className="hidden md:block">
        <HeroSection />
      <About />
      <SkillSection />
      <Skill />
      {/* <SmoothCursor /> */}
      <h1 id="Projects" className="text-black md:py-10 pt-5 text-center md:text-5xl text-xl font-bold">
        Featured Projects
      </h1>
      <Portfolio />
      <TimelinePage2/>
      </div>
    </div>
  );
}

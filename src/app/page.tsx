import { About } from "@/components/About";
import HeroSection from "@/components/HeroSection";
import New from "@/components/New";
import { Skill } from "@/components/Skill";
import { SkillSection } from "@/components/SkillSection";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <About />
      <SkillSection />
      <Skill/>
    </div>
  );
}

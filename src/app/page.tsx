import { About } from "@/components/About";
import HeroSection from "@/components/HeroSection";
import New from "@/components/New";
import { SkillSection } from "@/components/SkillSection";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <About />
       <SkillSection/>
    </div>
  );
}

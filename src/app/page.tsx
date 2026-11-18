import AboutSection from "@/components/sections/AboutSection";
import ContactSection from "@/components/sections/ContactSection";
import EducationSection from "@/components/sections/EducationSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import ExpertiseSection from "@/components/sections/ExpertiseSection";
import HeroSection from "@/components/sections/HeroSection";
import OverviewSection from "@/components/sections/OverviewSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import Marquee from "@/components/ui/Marquee";
import { skillGroups } from "@/data/skills";

const toolbox = Array.from(
  new Set(skillGroups.flatMap((group) => group.skills.map((skill) => skill.name))),
);

function StackStrip() {
  return (
    <div className="relative border-b border-line bg-surface/20">
      <div className="mx-auto flex w-full max-w-[1440px] items-center gap-6 px-5 py-4 sm:px-8 lg:px-12">
        <span className="mono-label hidden shrink-0 items-center gap-2 text-[0.58rem] sm:inline-flex">
          <span className="status-dot" aria-hidden="true" />
          Toolbox
        </span>
        <Marquee items={toolbox} className="min-w-0 flex-1" />
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <>
      <HeroSection />
      <OverviewSection />
      <StackStrip />
      <ProjectsSection />
      <ExperienceSection />
      <AboutSection />
      <ExpertiseSection />
      <EducationSection />
      <ContactSection />
    </>
  );
}

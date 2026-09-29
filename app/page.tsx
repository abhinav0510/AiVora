import { OuterFrame } from "@/components/canvas/OuterFrame";
import { Navbar } from "@/components/navigation/Navbar";
import { HeroSection } from "@/components/sections/HeroSection";
import { PromiseSection } from "@/components/sections/PromiseSection";
import { CapabilityCards } from "@/components/sections/CapabilityCards";
import { ProjectGallery } from "@/components/sections/ProjectGallery";
import { ServicesList } from "@/components/sections/ServicesList";
import { AISystemFlow } from "@/components/sections/AISystemFlow";
import { ProcessTimeline } from "@/components/sections/ProcessTimeline";
import { TechStack } from "@/components/sections/TechStack";
import { AboutSection } from "@/components/sections/AboutSection";
import { ClientMarquee } from "@/components/sections/ClientMarquee";
import { Testimonials } from "@/components/sections/Testimonials";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <OuterFrame>
      <Navbar />
      <main>
        <HeroSection />
        <PromiseSection />
        <CapabilityCards />
        <ProjectGallery />
        <ServicesList />
        <AISystemFlow />
        <ProcessTimeline />
        <TechStack />
        <AboutSection />
        <ClientMarquee />
        <Testimonials />
        <FinalCTA />
      </main>
      <Footer />
    </OuterFrame>
  );
}

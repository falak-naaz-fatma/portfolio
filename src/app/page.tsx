import { Nav } from "@/components/Nav";
import { Hero } from "@/sections/HeroSection";
import { Experience } from "@/sections/ExperienceSection";
import { Projects } from "@/sections/Projects";
import { Skills } from "@/sections/Skills";
import { Contact } from "@/sections/Contact";
import { Footer } from "@/sections/Footer";
import { navItems } from "@/lib/data";

export default function Home() {
  return (
    <>
      <Nav items={navItems} />
      <main id="main">
        <Hero />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
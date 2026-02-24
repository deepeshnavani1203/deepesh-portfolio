import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Projects from "@/components/Projects";
import Awards from "@/components/Awards";
import Contact from "@/components/Contact";
import Community from "@/components/Community";
import Publication from "@/components/Publication";
import { useTheme } from "@/hooks/useTheme";

const Index = () => {
  const { theme } = useTheme();

  return (
    <div
      className={`pt-16 bg-background text-foreground transition-colors duration-500 grid-bg`}
    >
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Education />
        <Projects />
        <Awards />
        <Community />
        <Publication />
        <Contact />
      </main>
    </div>
  );
};

export default Index;

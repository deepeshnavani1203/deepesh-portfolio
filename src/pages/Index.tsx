import { useState } from "react";
import { motion } from "framer-motion";
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
  const [heroDone, setHeroDone] = useState(false);

  return (
    <div
      className={`pt-16 bg-background text-foreground transition-colors duration-500 grid-bg`}
    >
      <Header />
      <main>
        <Hero onComplete={() => setHeroDone(true)} />
        {heroDone && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <About />
            <Projects />
            <Experience />
            <Education />
            <Skills />
            <Awards />
            <Community />
            <Publication />
            <Contact />
          </motion.div>
        )}
      </main>
    </div>
  );
};

export default Index;

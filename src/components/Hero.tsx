import { Github, Linkedin, ArrowRight } from "lucide-react";
import { useTypewriter } from "@/hooks/useTypewriter";
import { motion } from "framer-motion";
import profileImg from "@/assets/profile.jpg";
import { useSpotlight } from "@/hooks/useSpotlight";

const Hero = () => {
  const { displayed, done } = useTypewriter("Hi, I'm Deepesh", 90, 300);
  const { onMouseMove } = useSpotlight();

  return (
    <section className="min-h-screen flex items-center section-padding pt-28 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto w-full grid lg:grid-cols-2 gap-12 lg:gap-16 items-center relative z-10">
        {/* Left */}
        <div>
          <h1 className="text-5xl md:text-6xl font-semibold text-foreground leading-tight font-display min-h-[1.2em]">
            {displayed}
            {!done && <span className="animate-blink text-primary">|</span>}
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.8, duration: 0.6 }}
            className="mt-5 text-lg md:text-xl text-muted-foreground max-w-lg"
          >
            Full Stack Developer crafting AI-powered web platforms.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.2, duration: 0.6 }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-primary-foreground font-medium text-sm hover:shadow-lg hover:shadow-primary/25 transition-all duration-300"
            >
              View Projects
              <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
            </a>
            <a
              href="#contact"
              className="px-6 py-3 rounded-xl border border-border text-foreground font-medium text-sm hover:bg-secondary/60 transition-colors duration-300"
            >
              Contact Me
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.6, duration: 0.6 }}
            className="mt-6 flex items-center gap-4"
          >
            <a href="https://github.com/deepesh" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors duration-300" aria-label="GitHub">
              <Github size={20} />
            </a>
            <a href="https://linkedin.com/in/deepesh" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors duration-300" aria-label="LinkedIn">
              <Linkedin size={20} />
            </a>
          </motion.div>
        </div>

        {/* Right — floating card with image + about preview */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8, ease: "easeOut" }}
          className="flex justify-center lg:justify-end"
        >
          <div
            onMouseMove={onMouseMove}
            className="spotlight-card glass-card glow-border p-8 w-full max-w-sm"
          >
            <div className="flex flex-col items-center text-center">
              <div className="w-28 h-28 rounded-2xl overflow-hidden border-2 border-primary/20 shadow-lg shadow-primary/10 mb-6">
                <img
                  src={profileImg}
                  alt="Deepesh - Full Stack Developer"
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Passionate about building clean, performant, and user-centric digital products at the intersection of design and engineering.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

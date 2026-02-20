import { Github, Linkedin, ArrowDown } from "lucide-react";
import { useTypewriter } from "@/hooks/useTypewriter";
import { motion } from "framer-motion";
import profileImg from "@/assets/profile.jpg";

const Hero = () => {
  const { displayed, done } = useTypewriter("Hi, I'm Deepesh", 90, 300);

  return (
    <section className="min-h-screen flex flex-col items-center justify-center section-padding pt-28 relative">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="mb-8"
      >
        <div className="w-36 h-36 md:w-44 md:h-44 rounded-full overflow-hidden border-4 border-primary/30 shadow-lg">
          <img
            src={profileImg}
            alt="Deepesh - Full Stack Developer"
            className="w-full h-full object-cover"
          />
        </div>
      </motion.div>

      <h1 className="text-4xl md:text-6xl font-bold font-serif text-foreground text-center min-h-[1.2em]">
        {displayed}
        {!done && <span className="animate-blink text-primary">|</span>}
      </h1>

      <motion.p
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.8, duration: 0.6 }}
        className="mt-5 text-lg md:text-xl text-muted-foreground text-center max-w-xl"
      >
        I design and build scalable web experiences.
      </motion.p>

      <motion.p
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2.2, duration: 0.6 }}
        className="mt-3 text-sm text-muted-foreground text-center tracking-widest uppercase"
      >
        Full Stack Developer · React · Node · Supabase
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2.6, duration: 0.6 }}
        className="mt-8 flex flex-col sm:flex-row items-center gap-4"
      >
        <a
          href="#projects"
          className="px-7 py-3 rounded-lg bg-primary text-primary-foreground font-medium text-sm hover:opacity-90 transition-opacity duration-300"
        >
          View Projects
        </a>
        <a
          href="#contact"
          className="px-7 py-3 rounded-lg border border-border text-foreground font-medium text-sm hover:bg-secondary transition-colors duration-300"
        >
          Contact Me
        </a>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3, duration: 0.6 }}
        className="mt-8 flex items-center gap-5"
      >
        <a
          href="https://github.com/deepesh"
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted-foreground hover:text-foreground transition-colors duration-300"
          aria-label="GitHub"
        >
          <Github size={22} />
        </a>
        <a
          href="https://linkedin.com/in/deepesh"
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted-foreground hover:text-foreground transition-colors duration-300"
          aria-label="LinkedIn"
        >
          <Linkedin size={22} />
        </a>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3.4, duration: 0.6 }}
        className="absolute bottom-10"
      >
        <ArrowDown size={20} className="text-muted-foreground animate-bounce" />
      </motion.div>
    </section>
  );
};

export default Hero;

import { useState, useEffect } from "react";
import { Github, Linkedin, ArrowRight, Code, ChevronDown } from "lucide-react";
import { useTypewriter } from "@/hooks/useTypewriter";
import { motion, AnimatePresence } from "framer-motion";
import profileImg from "@/assets/profile-cropped.jpg";
import { useTheme } from "@/hooks/useTheme";

interface HeroProps {
  onComplete?: () => void;
}

const Hero = ({ onComplete }: HeroProps) => {
  const { displayed, done } = useTypewriter("Hi, I'm Deepesh", 110, 2100);
  const { theme } = useTheme();

  useEffect(() => {
    if (done && onComplete) {
      const timer = setTimeout(() => {
        onComplete();
      }, 400); // Wait for description and buttons to animate in
      return () => clearTimeout(timer);
    }
  }, [done, onComplete]);

  return (
    <section className="min-h-[60vh] md:min-h-[75vh] flex flex-col items-center justify-start section-padding pt-20 md:pt-24 pb-4 md:pb-10 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] rounded-full blur-3xl pointer-events-none opacity-50 transition-colors duration-500 bg-primary/5 dark:bg-black" />

      <div className="max-w-4xl mx-auto w-full flex flex-col items-center text-center relative z-10 min-h-[320px]">
        {/* Profile Image Container with Scanning/Unrolling Animation */}
        <div className="mb-14 relative w-32 h-32 md:w-36 md:h-36 overflow-visible">
          {/* 1. Glowing outer shadow / aura */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1.15 }}
            transition={{ duration: 1.5, delay: 0.5, ease: "easeInOut" }}
            className="absolute inset-0 rounded-full bg-primary/20 blur-xl pointer-events-none"
          />

          {/* 2. Outer border ring */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="absolute inset-0 rounded-full ring-2 ring-primary/30 dark:ring-primary/30 z-20 pointer-events-none"
          />

          {/* 3. Scanning Laser Line (moves from top to bottom matching reveal percentages) */}
          <motion.div
            initial={{ top: "0%", opacity: 0 }}
            animate={{ 
              top: ["0%", "30%", "50%", "80%", "100%"], 
              opacity: [0, 1, 1, 1, 0] 
            }}
            transition={{ 
              duration: 1.5, 
              delay: 0.5, 
              times: [0, 0.25, 0.5, 0.75, 1], 
              ease: "easeInOut" 
            }}
            className="absolute left-[-4px] right-[-4px] h-[2px] bg-primary shadow-[0_0_12px_hsl(var(--primary))] z-30 rounded-full"
          />

          {/* 4. The actual Profile Image (revealing/unrolling from top to bottom) */}
          <motion.div
            initial={{ clipPath: "inset(0% 0% 100% 0%)" }}
            animate={{
              clipPath: [
                "inset(0% 0% 100% 0%)", // 0% revealed
                "inset(0% 0% 70% 0%)",  // 30% revealed
                "inset(0% 0% 50% 0%)",  // 50% revealed
                "inset(0% 0% 20% 0%)",  // 80% revealed
                "inset(0% 0% 0% 0%)"    // 100% revealed
              ]
            }}
            transition={{ 
              duration: 1.5, 
              delay: 0.5, 
              times: [0, 0.25, 0.5, 0.75, 1], 
              ease: "easeInOut" 
            }}
            className="w-full h-full rounded-full overflow-hidden z-10 relative dark:border-0 border border-black/20"
          >
            <img
              src={profileImg}
              alt="Deepesh - Full Stack Developer"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>

        {/* Text Content */}
        <div className="h-[64px] flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground leading-tight font-display">
            {displayed}
            {!done && <span className="animate-blink text-primary">|</span>}
          </h1>
        </div>

        <AnimatePresence>
          {done && (
            <motion.div
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.3,
                    delayChildren: 0.2,
                  },
                },
              }}
              className="flex flex-col items-center"
            >
              <motion.p
                variants={{
                  hidden: { opacity: 0, y: 15 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
                className="mt-4 text-lg md:text-xl text-muted-foreground max-w-lg"
              >
                Full Stack & Mobile Developer building intelligent, scalable
                AI-powered products
              </motion.p>

              {/* Buttons */}
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 15 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 1.0, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
                className="mt-10 flex flex-wrap items-center justify-center gap-4"
              >
                <a
                  href="#projects"
                  className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-primary text-primary-foreground font-medium text-sm hover:shadow-lg hover:shadow-primary/25 transition-all duration-300 dark:border-0 border border-primary/70"
                >
                  View Projects
                </a>
                <a
                  href="#contact"
                  className="px-7 py-3.5 rounded-xl border border-black/15 dark:border-white/10 text-foreground font-medium text-sm hover:bg-secondary/60 transition-colors duration-300 backdrop-blur-sm"
                >
                  Contact Me
                </a>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Hero;

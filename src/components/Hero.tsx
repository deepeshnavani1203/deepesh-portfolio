import { ArrowDown } from "lucide-react";
import { motion } from "framer-motion";
import profileImg from "@/assets/profile.jpg";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center section-padding pt-32 pb-16 relative overflow-hidden">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary/3 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto w-full grid lg:grid-cols-2 gap-12 lg:gap-16 items-center relative z-10">
        {/* Left side */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="order-2 lg:order-1"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="relative">
              <div className="w-14 h-14 rounded-full overflow-hidden ring-2 ring-primary/20 relative z-10">
                <img src={profileImg} alt="Deepesh" className="w-full h-full object-cover" />
              </div>
              <div className="absolute inset-0 rounded-full bg-primary/15 animate-glow-pulse blur-md" />
            </div>
            <div className="h-px flex-1 bg-gradient-to-r from-border to-transparent max-w-[100px]" />
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-semibold text-foreground leading-[1.1] tracking-tight">
            Hi, I'm{" "}
            <span className="text-primary">Deepesh</span>
          </h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="mt-4 text-lg md:text-xl text-muted-foreground font-light leading-relaxed max-w-lg"
          >
            Full Stack & React Native Developer crafting scalable, beautiful web experiences.
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="mt-3 text-sm text-muted-foreground/70 tracking-widest uppercase"
          >
            React · Node · Supabase
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <a
              href="#projects"
              className="px-6 py-2.5 rounded-xl bg-primary text-primary-foreground font-medium text-sm hover:opacity-90 transition-opacity duration-300"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="px-6 py-2.5 rounded-xl border border-border text-foreground font-medium text-sm hover:bg-secondary/50 transition-colors duration-300"
            >
              Contact Me
            </a>
          </motion.div>
        </motion.div>

        {/* Right side — floating device mockup */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="order-1 lg:order-2 flex justify-center"
        >
          <div className="animate-float relative">
            {/* Laptop frame */}
            <div className="relative w-[320px] md:w-[420px]">
              {/* Screen */}
              <div className="bg-card border border-border/60 rounded-xl overflow-hidden shadow-2xl shadow-primary/5">
                <div className="flex items-center gap-1.5 px-3 py-2 border-b border-border/40">
                  <div className="w-2.5 h-2.5 rounded-full bg-destructive/60" />
                  <div className="w-2.5 h-2.5 rounded-full bg-accent/60" />
                  <div className="w-2.5 h-2.5 rounded-full bg-primary/60" />
                  <div className="flex-1 mx-6">
                    <div className="h-4 bg-secondary/80 rounded-md flex items-center justify-center">
                      <span className="text-[9px] text-muted-foreground/60">cloudsync-dashboard.vercel.app</span>
                    </div>
                  </div>
                </div>
                {/* Mock UI */}
                <div className="p-4 space-y-3 bg-gradient-to-br from-card to-secondary/30 min-h-[200px] md:min-h-[260px]">
                  <div className="flex items-center justify-between">
                    <div className="h-3 w-24 bg-foreground/10 rounded" />
                    <div className="h-3 w-16 bg-primary/20 rounded" />
                  </div>
                  <div className="grid grid-cols-3 gap-2">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="bg-secondary/60 rounded-lg p-3 space-y-2">
                        <div className="h-2 w-full bg-foreground/5 rounded" />
                        <div className="h-6 w-8 bg-primary/20 rounded font-display text-[10px] text-primary flex items-center justify-center">
                          {i * 12}K
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="bg-secondary/40 rounded-lg p-3 space-y-1.5">
                    <div className="h-2 w-full bg-primary/15 rounded-full" />
                    <div className="h-2 w-3/4 bg-primary/10 rounded-full" />
                    <div className="h-2 w-1/2 bg-primary/8 rounded-full" />
                  </div>
                  <div className="flex gap-2">
                    <div className="h-6 flex-1 bg-primary/15 rounded-md" />
                    <div className="h-6 flex-1 bg-secondary/60 rounded-md" />
                  </div>
                </div>
              </div>
              {/* Laptop base */}
              <div className="mx-auto w-[110%] h-3 bg-card border border-border/40 border-t-0 rounded-b-xl -mt-px relative left-[-5%]" />
            </div>
            {/* Ambient glow */}
            <div className="absolute -inset-8 bg-primary/5 rounded-3xl blur-3xl -z-10 animate-glow-pulse" />
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <ArrowDown size={18} className="text-muted-foreground/50 animate-bounce" />
      </motion.div>
    </section>
  );
};

export default Hero;
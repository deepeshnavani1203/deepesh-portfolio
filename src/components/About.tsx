import { motion } from "framer-motion";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Sparkles, Target, Rocket } from "lucide-react";

const values = [
  { icon: Sparkles, title: "Craftsmanship", desc: "Every line of code is intentional. I care deeply about quality and maintainability." },
  { icon: Target, title: "Continuous Growth", desc: "Always exploring new tools, patterns, and ideas to stay ahead." },
  { icon: Rocket, title: "Impact", desc: "Building products that solve real problems for real people." },
];

const About = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="about" className="section-padding">
      <div className="max-w-4xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <h2 className="section-title font-display">About Me</h2>
          <p className="text-muted-foreground leading-relaxed text-base md:text-lg mt-6 max-w-2xl">
            I'm a Full Stack Developer passionate about building clean, performant, and user-centric 
            digital products. I thrive at the intersection of design and engineering — where thoughtful 
            architecture meets delightful user experience.
          </p>
        </motion.div>

        <div className="mt-14 grid sm:grid-cols-3 gap-5">
          {values.map((v, i) => (
            <motion.div
              key={v.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="glass-card p-6 group hover:border-primary/20 transition-colors duration-500"
            >
              <v.icon size={20} className="text-primary mb-3" />
              <h4 className="font-display font-medium text-foreground mb-2 text-sm">{v.title}</h4>
              <p className="text-muted-foreground text-sm leading-relaxed">{v.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
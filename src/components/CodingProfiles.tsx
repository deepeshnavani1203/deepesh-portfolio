import { motion } from "framer-motion";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Github, Linkedin, Code2 } from "lucide-react";

const profiles = [
  {
    name: "GitHub",
    username: "@deepesh",
    url: "https://github.com/deepesh",
    icon: Github,
    desc: "Open source contributions & projects",
  },
  {
    name: "LinkedIn",
    username: "in/deepesh",
    url: "https://linkedin.com/in/deepesh",
    icon: Linkedin,
    desc: "Professional network & experience",
  },
  {
    name: "LeetCode",
    username: "deepesh",
    url: "https://leetcode.com/deepesh",
    icon: Code2,
    desc: "Problem solving & algorithms",
  },
];

const CodingProfiles = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="profiles" className="section-padding">
      <div className="max-w-4xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <h2 className="section-title font-display">Coding Profiles</h2>
          <p className="section-subtitle">Where I code and connect.</p>
        </motion.div>

        <div className="mt-12 grid sm:grid-cols-3 gap-5">
          {profiles.map((p, i) => (
            <motion.a
              key={p.name}
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
              className="glass-card p-6 group hover:border-primary/30 transition-all duration-500 block"
            >
              <p.icon size={24} className="text-primary mb-4 group-hover:text-primary transition-colors" />
              <h3 className="font-display font-medium text-foreground text-sm mb-1">{p.name}</h3>
              <p className="text-xs text-primary/70 mb-2">{p.username}</p>
              <p className="text-xs text-muted-foreground">{p.desc}</p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CodingProfiles;
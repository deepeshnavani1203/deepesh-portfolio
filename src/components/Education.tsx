import { motion } from "framer-motion";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { GraduationCap } from "lucide-react";

const education = [
  {
    degree: "Bachelor of Engineering in Information Technology",
    institution: "VES Institute of Technology",
    duration: "2022 – 2026",
  },
  {
    degree: "Higher Secondary Certificate (HSC)",
    institution: "XYZ Junior College",
    duration: "2020 – 2022",
  },
];

const Education = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="education" className="section-padding">
      <div className="max-w-3xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Education</h2>
          <p className="section-subtitle">My academic background.</p>
        </motion.div>

        <div className="mt-12 relative">
          <div className="absolute left-4 top-2 bottom-2 w-px bg-gradient-to-b from-primary/40 via-primary/20 to-transparent" />

          <div className="space-y-8">
            {education.map((edu, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={isVisible ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className="relative pl-12 group"
              >
                <div className="absolute left-2.5 top-1.5 w-3 h-3 rounded-full bg-primary shadow-[0_0_8px_hsl(270_80%_60%/0.4)] border-2 border-background" />

                <div className="glass-card glow-border p-5 group-hover:shadow-lg group-hover:shadow-primary/5 transition-shadow duration-300">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-1">
                    <h3 className="font-semibold text-foreground font-display text-base">{edu.degree}</h3>
                    <span className="text-xs text-muted-foreground mt-1 sm:mt-0 font-mono">{edu.duration}</span>
                  </div>
                  <p className="text-sm text-primary font-medium flex items-center gap-1.5">
                    <GraduationCap size={14} />
                    {edu.institution}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;

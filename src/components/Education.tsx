import { motion } from "framer-motion";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { GraduationCap } from "lucide-react";

const education = [
  {
    degree: "B.Tech in Computer Engineering",
    institution: "VES Institute of Technology",
    duration: "2024 - 2027",
  },
  {
    degree: "Diploma in Computer Engineering",
    institution: "VES Polytechnic",
    duration: "2021 - 2024",
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

        <div className="mt-16 relative">
          <div className="timeline-v2">
            <div className="timeline-v2-streak" />
          </div>

          <div className="space-y-8">
            {education.map((edu, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={isVisible ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className="relative pl-12 group"
              >

                <div className="futuristic-card p-6 group-hover:shadow-[0_0_30px_hsl(var(--primary)/0.1)] transition-all duration-300 border border-white/5">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                    <h3 className="font-bold text-white font-display text-lg">
                      {edu.degree}
                    </h3>
                    <span className="text-xs text-muted-foreground mt-1 sm:mt-0 font-mono">
                      {edu.duration}
                    </span>
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

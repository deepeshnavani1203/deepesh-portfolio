import { motion } from "framer-motion";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const experiences = [
  {
    role: "Senior Full Stack Developer",
    company: "TechCorp Inc.",
    duration: "2023 — Present",
    description: "Leading development of a SaaS analytics platform serving 50K+ users. Architected microservices backend reducing response times by 40%.",
  },
  {
    role: "Full Stack Developer",
    company: "InnovateLabs",
    duration: "2021 — 2023",
    description: "Built and shipped 3 customer-facing products from scratch. Introduced CI/CD pipelines that reduced deployment time by 60%.",
  },
  {
    role: "Frontend Developer",
    company: "DesignStudio",
    duration: "2020 — 2021",
    description: "Developed responsive web applications with React and TypeScript. Collaborated closely with designers to deliver pixel-perfect UIs.",
  },
  {
    role: "Software Engineering Intern",
    company: "StartupXYZ",
    duration: "2019 — 2020",
    description: "Contributed to the core product's backend in Node.js. Implemented real-time notification system using WebSockets.",
  },
];

const Experience = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="experience" className="section-padding">
      <div className="max-w-3xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Experience</h2>
          <p className="section-subtitle">My professional journey so far.</p>
        </motion.div>

        <div className="mt-12 relative">
          {/* Timeline line */}
          <div className="absolute left-4 top-2 bottom-2 w-px bg-border" />

          <div className="space-y-10">
            {experiences.map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={isVisible ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="relative pl-12"
              >
                {/* Dot */}
                <div className="absolute left-2.5 top-1.5 w-3 h-3 rounded-full bg-primary border-2 border-background" />

                <div className="glass-card p-5">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-1">
                    <h3 className="font-semibold text-foreground font-sans">{exp.role}</h3>
                    <span className="text-xs text-muted-foreground mt-1 sm:mt-0">{exp.duration}</span>
                  </div>
                  <p className="text-sm text-primary font-medium mb-2">{exp.company}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{exp.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;

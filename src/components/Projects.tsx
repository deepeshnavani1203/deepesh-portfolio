import { motion } from "framer-motion";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    name: "CloudSync Dashboard",
    description: "Real-time analytics dashboard for cloud infrastructure monitoring.",
    problem: "Teams lacked visibility into multi-cloud resource usage.",
    solution: "Built a unified dashboard with real-time data streaming and alerting.",
    result: "Reduced incident response time by 35% across 200+ servers.",
    tech: ["React", "Node.js", "PostgreSQL", "WebSocket", "AWS"],
    live: "#",
    github: "#",
  },
  {
    name: "DevConnect",
    description: "Developer networking platform with skill-based matching.",
    problem: "Finding collaborators for side projects was fragmented.",
    solution: "Created a matchmaking algorithm based on skills and interests.",
    result: "10K+ developers onboarded in the first 3 months.",
    tech: ["Next.js", "Supabase", "Tailwind", "OpenAI"],
    live: "#",
    github: "#",
  },
  {
    name: "FinTrack",
    description: "Personal finance tracker with AI-powered insights.",
    problem: "Existing finance apps lacked actionable insights.",
    solution: "Integrated ML models to predict spending patterns and suggest savings.",
    result: "Users saved an average of 15% more per month.",
    tech: ["React", "Python", "TensorFlow", "MongoDB"],
    live: "#",
    github: "#",
  },
  {
    name: "EduFlow",
    description: "Learning management system for coding bootcamps.",
    problem: "Bootcamps needed a lightweight, customizable LMS.",
    solution: "Built a modular LMS with live code execution and progress tracking.",
    result: "Adopted by 5 bootcamps, serving 2000+ students.",
    tech: ["TypeScript", "Express", "Redis", "Docker"],
    live: "#",
    github: "#",
  },
];

const Projects = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="projects" className="section-padding">
      <div className="max-w-5xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <h2 className="section-title font-display">Projects</h2>
          <p className="section-subtitle">A selection of things I've built.</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 mt-14">
          {projects.map((proj, i) => (
            <motion.div
              key={proj.name}
              initial={{ opacity: 0, y: 25 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass-card p-6 flex flex-col group hover:border-primary/20 hover:shadow-lg hover:shadow-primary/5 transition-all duration-500"
            >
              <h3 className="text-base font-display font-medium text-foreground mb-1">{proj.name}</h3>
              <p className="text-sm text-muted-foreground mb-4">{proj.description}</p>

              <div className="space-y-2 text-sm mb-5 flex-1">
                <p><span className="font-medium text-foreground/80">Problem:</span> <span className="text-muted-foreground">{proj.problem}</span></p>
                <p><span className="font-medium text-foreground/80">Solution:</span> <span className="text-muted-foreground">{proj.solution}</span></p>
                <p><span className="font-medium text-foreground/80">Result:</span> <span className="text-muted-foreground">{proj.result}</span></p>
              </div>

              <div className="flex flex-wrap gap-1.5 mb-5">
                {proj.tech.map((t) => (
                  <span key={t} className="px-2 py-1 text-[11px] rounded-md bg-secondary/80 text-muted-foreground">{t}</span>
                ))}
              </div>

              <div className="flex items-center gap-4">
                <a href={proj.live} className="inline-flex items-center gap-1.5 text-sm text-primary hover:underline underline-offset-4">
                  <ExternalLink size={13} /> Live
                </a>
                <a href={proj.github} className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors">
                  <Github size={13} /> Code
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
import { motion } from "framer-motion";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useSpotlight } from "@/hooks/useSpotlight";
import { ExternalLink, Github, Layers, Server, Database, Cloud, Brain, Globe, Zap, Flame, Box, Terminal } from "lucide-react";
import type { LucideIcon } from "lucide-react";

const techIconMap: Record<string, LucideIcon> = {
  React: Layers,
  "Node.js": Server,
  PostgreSQL: Database,
  WebSocket: Zap,
  AWS: Cloud,
  "Next.js": Globe,
  Supabase: Box,
  Tailwind: Layers,
  OpenAI: Brain,
  Python: Terminal,
  TensorFlow: Brain,
  MongoDB: Database,
  TypeScript: Layers,
  Express: Server,
  Redis: Flame,
  Docker: Box,
};

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
    featured: true,
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

const ProjectCard = ({ proj, i, isVisible }: { proj: typeof projects[0]; i: number; isVisible: boolean }) => {
  const { onMouseMove } = useSpotlight();

  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: i * 0.1 }}
      onMouseMove={onMouseMove}
      className={`spotlight-card glass-card glow-border p-6 flex flex-col group hover:shadow-[0_0_30px_hsl(270_80%_60%/0.08)] transition-shadow duration-300 ${
        proj.featured ? "md:col-span-2 md:row-span-2" : ""
      }`}
    >
      <h3 className="text-lg font-semibold text-foreground font-display mb-1">{proj.name}</h3>
      <p className="text-sm text-muted-foreground mb-4">{proj.description}</p>

      <div className="space-y-2 text-sm mb-5 flex-1">
        <p><span className="font-medium text-foreground">Problem:</span> <span className="text-muted-foreground">{proj.problem}</span></p>
        <p><span className="font-medium text-foreground">Solution:</span> <span className="text-muted-foreground">{proj.solution}</span></p>
        <p><span className="font-medium text-foreground">Result:</span> <span className="text-muted-foreground">{proj.result}</span></p>
      </div>

      <div className="flex flex-wrap gap-2 mb-5">
        {proj.tech.map((t) => {
          const Icon = techIconMap[t] || Layers;
          return (
            <motion.span
              key={t}
              className="inline-flex items-center gap-1.5 px-2.5 py-1 text-xs rounded-lg bg-secondary/80 text-muted-foreground group-hover:text-foreground transition-colors"
              whileHover={{ y: -2 }}
            >
              <Icon size={12} />
              {t}
            </motion.span>
          );
        })}
      </div>

      <div className="flex items-center gap-4 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
        <a href={proj.live} className="inline-flex items-center gap-1.5 text-sm text-primary hover:underline">
          <ExternalLink size={14} /> Live Demo
        </a>
        <a href={proj.github} className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors">
          <Github size={14} /> GitHub
        </a>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="projects" className="section-padding">
      <div className="max-w-5xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">A selection of things I've built.</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 mt-12">
          {projects.map((proj, i) => (
            <ProjectCard key={proj.name} proj={proj} i={i} isVisible={isVisible} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

import { motion } from "framer-motion";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import {
  Code2, FileCode, Braces, Database, Brain, Cloud,
  Palette, Server, Globe, Terminal, Cpu, Layers,
  GitBranch, Container, Figma, Flame, Zap, Box,
  LayoutGrid, Cable, Workflow, MonitorSmartphone, Hash, Binary
} from "lucide-react";

const skills = [
  { name: "React", icon: Layers },
  { name: "Next.js", icon: Globe },
  { name: "TypeScript", icon: FileCode },
  { name: "Tailwind CSS", icon: Palette },
  { name: "HTML5", icon: Code2 },
  { name: "Redux", icon: Workflow },
  { name: "Node.js", icon: Server },
  { name: "Express", icon: Zap },
  { name: "REST APIs", icon: Cable },
  { name: "GraphQL", icon: Braces },
  { name: "TensorFlow", icon: Brain },
  { name: "OpenAI API", icon: Cpu },
  { name: "LangChain", icon: Flame },
  { name: "PostgreSQL", icon: Database },
  { name: "MongoDB", icon: Database },
  { name: "Redis", icon: Flame },
  { name: "Supabase", icon: Box },
  { name: "Firebase", icon: Flame },
  { name: "JavaScript", icon: Hash },
  { name: "Python", icon: Terminal },
  { name: "Java", icon: Binary },
  { name: "C++", icon: Binary },
  { name: "Git", icon: GitBranch },
  { name: "Docker", icon: Container },
  { name: "AWS", icon: Cloud },
  { name: "Vercel", icon: Globe },
  { name: "CI/CD", icon: Workflow },
  { name: "Figma", icon: MonitorSmartphone },
  { name: "Microservices", icon: LayoutGrid },
  { name: "NLP", icon: Brain },
];

const Skills = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="skills" className="section-padding">
      <div className="max-w-5xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Skills</h2>
          <p className="section-subtitle">Technologies I work with daily.</p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 mt-12">
          {skills.map((skill, i) => {
            const Icon = skill.icon;
            return (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: i * 0.03 }}
                className="flex flex-col items-center gap-2.5 p-5 rounded-xl bg-card/60 backdrop-blur-md border border-border hover:border-primary/30 hover:shadow-[0_0_20px_hsl(270_80%_60%/0.15)] hover:scale-105 transition-all duration-300 cursor-default"
              >
                <Icon size={22} className="text-muted-foreground" />
                <span className="text-xs font-medium text-foreground">{skill.name}</span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;

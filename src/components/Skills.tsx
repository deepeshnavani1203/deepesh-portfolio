import { motion } from "framer-motion";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import {
  Code2, FileCode, Braces, Database, Brain, Cloud,
  Palette, Server, Globe, Terminal, Cpu, Layers,
  GitBranch, Container, Flame, Zap, Box,
  LayoutGrid, Cable, Workflow, Hash, Binary
} from "lucide-react";

const categories = [
  {
    title: "Frontend",
    skills: [
      { name: "React", icon: Layers },
      { name: "Next.js", icon: Globe },
      { name: "TypeScript", icon: FileCode },
      { name: "Tailwind CSS", icon: Palette },
      { name: "HTML5", icon: Code2 },
      { name: "Redux", icon: Workflow },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", icon: Server },
      { name: "Express", icon: Zap },
      { name: "REST APIs", icon: Cable },
      { name: "GraphQL", icon: Braces },
      { name: "Python", icon: Terminal },
      { name: "Java", icon: Binary },
    ],
  },
  {
    title: "AI / ML",
    skills: [
      { name: "TensorFlow", icon: Brain },
      { name: "OpenAI API", icon: Cpu },
      { name: "LangChain", icon: Flame },
      { name: "NLP", icon: Brain },
    ],
  },
  {
    title: "Databases",
    skills: [
      { name: "PostgreSQL", icon: Database },
      { name: "MongoDB", icon: Database },
      { name: "Redis", icon: Flame },
      { name: "Supabase", icon: Box },
      { name: "Firebase", icon: Flame },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git", icon: GitBranch },
      { name: "Docker", icon: Container },
      { name: "AWS", icon: Cloud },
      { name: "Vercel", icon: Globe },
      { name: "CI/CD", icon: Workflow },
      { name: "Microservices", icon: LayoutGrid },
    ],
  },
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

        <div className="mt-12 space-y-10">
          {categories.map((cat, ci) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: ci * 0.1 }}
            >
              <h3 className="text-xs font-semibold uppercase tracking-widest text-primary mb-4">{cat.title}</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {cat.skills.map((skill, i) => {
                  const Icon = skill.icon;
                  return (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, y: 15 }}
                      animate={isVisible ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.3, delay: ci * 0.1 + i * 0.03 }}
                      className="flex flex-col items-center gap-2.5 p-5 rounded-xl bg-card/60 backdrop-blur-md border border-border hover:border-primary/30 hover:shadow-[0_0_20px_hsl(270_80%_60%/0.15)] hover:scale-105 transition-all duration-300 cursor-default"
                    >
                      <Icon size={22} className="text-muted-foreground" />
                      <span className="text-xs font-medium text-foreground">{skill.name}</span>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

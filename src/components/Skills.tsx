import { motion } from "framer-motion";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useSpotlight } from "@/hooks/useSpotlight";

const skillCategories = [
  {
    title: "Frontend",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "HTML5", "Redux"],
  },
  {
    title: "Backend",
    skills: ["Node.js", "Express", "REST APIs", "GraphQL", "Microservices"],
  },
  {
    title: "AI / ML",
    skills: ["TensorFlow", "OpenAI API", "LangChain", "NLP", "Data Pipelines"],
  },
  {
    title: "Databases",
    skills: ["PostgreSQL", "MongoDB", "Redis", "Supabase", "Firebase"],
  },
  {
    title: "Languages",
    skills: ["JavaScript", "TypeScript", "Python", "Java", "C++"],
  },
  {
    title: "Tools",
    skills: ["Git", "Docker", "AWS", "Vercel", "CI/CD", "Figma"],
  },
];

const SkillCard = ({ cat, i, isVisible }: { cat: typeof skillCategories[0]; i: number; isVisible: boolean }) => {
  const { onMouseMove } = useSpotlight();

  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: i * 0.08 }}
      onMouseMove={onMouseMove}
      className="spotlight-card glass-card glow-border p-6 group"
    >
      <h3 className="text-xs font-semibold uppercase tracking-widest text-primary mb-4">
        {cat.title}
      </h3>
      <div className="flex flex-wrap gap-2">
        {cat.skills.map((skill, si) => (
          <motion.span
            key={skill}
            initial={{ opacity: 0, y: 6 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.3, delay: i * 0.08 + si * 0.04 }}
            className="px-3 py-1.5 text-xs rounded-lg bg-secondary/60 text-muted-foreground font-medium group-hover:text-foreground transition-colors duration-300"
          >
            {skill}
          </motion.span>
        ))}
      </div>
    </motion.div>
  );
};

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

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {skillCategories.map((cat, i) => (
            <SkillCard key={cat.title} cat={cat} i={i} isVisible={isVisible} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

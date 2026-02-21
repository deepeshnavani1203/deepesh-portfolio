import { motion } from "framer-motion";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const skillCategories = [
  {
    title: "Frontend",
    skills: [
      { name: "React", icon: "⚛️" },
      { name: "Next.js", icon: "▲" },
      { name: "TypeScript", icon: "🔷" },
      { name: "Tailwind", icon: "🎨" },
      { name: "React Native", icon: "📱" },
      { name: "Redux", icon: "🔄" },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", icon: "🟢" },
      { name: "Express", icon: "⚡" },
      { name: "Python", icon: "🐍" },
      { name: "GraphQL", icon: "◈" },
      { name: "REST APIs", icon: "🔗" },
      { name: "Microservices", icon: "🧩" },
    ],
  },
  {
    title: "Mobile",
    skills: [
      { name: "React Native", icon: "📱" },
      { name: "Expo", icon: "🚀" },
      { name: "iOS", icon: "🍎" },
      { name: "Android", icon: "🤖" },
    ],
  },
  {
    title: "Tools & Infra",
    skills: [
      { name: "Git", icon: "🔀" },
      { name: "Docker", icon: "🐳" },
      { name: "AWS", icon: "☁️" },
      { name: "PostgreSQL", icon: "🐘" },
      { name: "MongoDB", icon: "🍃" },
      { name: "Supabase", icon: "⚡" },
      { name: "Redis", icon: "🔴" },
      { name: "CI/CD", icon: "♾️" },
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
          transition={{ duration: 0.7 }}
        >
          <h2 className="section-title font-display">Tech Stack</h2>
          <p className="section-subtitle">Technologies I work with daily.</p>
        </motion.div>

        <div className="mt-14 space-y-10">
          {skillCategories.map((cat, ci) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: ci * 0.1 }}
            >
              <h3 className="text-xs font-medium uppercase tracking-widest text-muted-foreground/70 mb-4">
                {cat.title}
              </h3>
              <div className="flex flex-wrap gap-3">
                {cat.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="glass-card px-4 py-3 flex items-center gap-2.5 group hover:border-primary/30 transition-all duration-500"
                  >
                    <span className="text-base">{skill.icon}</span>
                    <span className="text-sm text-foreground/80 group-hover:text-foreground transition-colors duration-300">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
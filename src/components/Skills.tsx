import { motion } from "framer-motion";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import {
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiExpress,
  SiPython,
  SiMongodb,
  SiPostgresql,
  SiSupabase,
  SiGit,
  SiGithub,
  SiPostman,
  SiFigma,
  SiTailwindcss,
  SiHtml5,
  SiCss3,
  SiAmazonwebservices,
  SiVercel,
  SiHuggingface,
  SiFastapi,
  SiAndroid,
  SiC,
  SiCplusplus,
  SiJavascript,
  SiMysql,
  SiFirebase,
  SiGooglecloud,
  SiRender,
  SiNetlify,
  SiCloudinary,
  SiRailway,
  SiAwsamplify,
} from "react-icons/si";
import {
  Brain,
  Volume2,
  Terminal,
  Coffee,
  Database,
  Server,
  Cpu,
} from "lucide-react";

const categories = [
  {
    title: "Programming Languages",
    skills: [
      { name: "C", icon: SiC, color: "#A8B9CC" },
      { name: "C++", icon: SiCplusplus, color: "#00599C" },
      { name: "Python", icon: SiPython, color: "#3776AB" },
      { name: "Java", icon: Coffee, color: "#E32B2B" },
      { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
      { name: "SQL", icon: Database, color: "#38BDF8" },
    ],
  },

  {
    title: "Frontend",
    skills: [
      { name: "React", icon: SiReact, color: "#61DAFB" },
      { name: "Next.js", icon: SiNextdotjs, color: "#AAAAAA" },
      { name: "React Native", icon: SiReact, color: "#61DAFB" },
      { name: "HTML5", icon: SiHtml5, color: "#E34F26" },
      { name: "CSS3", icon: SiCss3, color: "#1572B6" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
    ],
  },

  {
    title: "Backend",
    skills: [
      { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
      { name: "Express.js", icon: SiExpress, color: "#AAAAAA" },
      { name: "REST APIs", icon: Terminal, color: "#F87171" },
      { name: "FastAPI", icon: SiFastapi, color: "#009688" },
      { name: "JWT Auth", icon: Server, color: "#F59E0B" },
      { name: "Socket.IO", icon: Server, color: "#F59E0B" },
    ],
  },

  {
    title: "AI / ML",
    skills: [
      { name: "Gemini API", icon: Brain, color: "#8B5CF6" },
      { name: "Hugging Face", icon: SiHuggingface, color: "#FFD21E" },
      {
        name: "Text-to-Speech (edgeTTS, gTTS)",
        icon: Volume2,
        color: "#A78BFA",
      },
    ],
  },

  {
    title: "Databases",
    skills: [
      { name: "MySQL", icon: SiMysql, color: "#4479A1" },
      { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
      { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
      { name: "Supabase", icon: SiSupabase, color: "#3ECF8E" },
      { name: "Firebase", icon: SiFirebase, color: "#FFCA28" },
      { name: "SQL Server", icon: Database, color: "#CC2927" },
    ],
  },

  {
    title: "Tools & Cloud",
    skills: [
      { name: "Git", icon: SiGit, color: "#F05032" },
      { name: "GitHub", icon: SiGithub, color: "#AAAAAA" },
      { name: "Postman", icon: SiPostman, color: "#FF6C37" },
      { name: "Figma", icon: SiFigma, color: "#F24E1E" },
      { name: "AWS", icon: SiAmazonwebservices, color: "#232F3E" },
      { name: "GCP", icon: SiGooglecloud, color: "#4285F4" },
      { name: "Vercel", icon: SiVercel, color: "#AAAAAA" },
      { name: "Render", icon: SiRender, color: "#46E3B7" },
      { name: "Railway", icon: SiRailway, color: "#0B0D0E" },
      { name: "Netlify", icon: SiNetlify, color: "#00C7B7" },
      { name: "Cloudinary", icon: SiCloudinary, color: "#3448C5" },
      { name: "Android Studio", icon: SiAndroid, color: "#3DDC84" },
    ],
  },
];

const Skills = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="skills" className="section-padding">
      <div className="max-w-5xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <h2 className="section-title">Technical Arsenal</h2>
          <p className="section-subtitle">
            Tools, languages, and frameworks I use to build robust products.
          </p>
        </motion.div>

        <div className="flex flex-col gap-8 mt-6">
          {categories.map((cat, ci) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: ci * 0.1 }}
            >
              <h3 className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-3 pb-1.5 border-b border-border/50">
                {cat.title}
              </h3>

              <div className="flex flex-wrap gap-2 md:gap-3">
                {cat.skills.map((skill) => {
                  const Icon = skill.icon;
                  return (
                    <motion.div
                      key={skill.name}
                      whileHover={{ scale: 1.07, y: -3 }}
                      className="futuristic-card flex items-center gap-2 py-2 px-3 transition-all duration-200 group cursor-default"
                    >
                      <div style={{ color: skill.color }}>
                        <Icon size={16} />
                      </div>
                      <span className="text-[12px] font-semibold text-foreground">
                        {skill.name}
                      </span>
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

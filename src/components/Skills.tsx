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
  SiMysql,
  SiOracle,
  SiFirebase,
  SiGit,
  SiGithub,
  SiPostman,
  SiFigma,
  SiTailwindcss,
  SiHtml5,
  SiCss3,
  SiAmazonwebservices,
  SiVercel,
  SiNetlify,
  SiHuggingface,
  SiOpencv,
  SiFastapi,
  SiVscodium,
  SiAndroidstudio,
  SiAndroid,
  SiGooglecolab,
  SiC,
  SiCplusplus,
  SiJavascript,
  SiCloudinary,
} from "react-icons/si";
import {
  Brain,
  Volume2,
  Cpu,
  Globe,
  Layout,
  Palette,
  Terminal,
  Binary,
  Box,
  FileEdit,
  Database,
  Layers,
  Smartphone,
  Eye,
  Send,
  MousePointer2,
  Coffee,
} from "lucide-react";

const categories = [
  {
    title: "Programming Languages",
    skills: [
      { name: "C", icon: SiC },
      { name: "C++", icon: SiCplusplus },
      { name: "Python", icon: SiPython },
      { name: "Java", icon: Coffee },
      { name: "Java Script", icon: SiJavascript },
    ],
  },
  {
    title: "Frontend / Mobile",
    skills: [
      { name: "React", icon: SiReact },
      { name: "Next.js", icon: SiNextdotjs },
      { name: "React Native", icon: SiReact },
      { name: "HTML5", icon: SiHtml5 },
      { name: "CSS3", icon: SiCss3 },
      { name: "Tailwind CSS", icon: SiTailwindcss },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", icon: SiNodedotjs },
      { name: "Express.js", icon: SiExpress },
      { name: "REST APIs", icon: Terminal },
      { name: "Fastapi", icon: SiFastapi },
    ],
  },
  {
    title: "AI / ML",
    skills: [
      { name: "Gemini API", icon: Brain },
      { name: "Hugging Face", icon: SiHuggingface },
      { name: "edgeTTS", icon: Volume2 },
      { name: "gTTS", icon: Volume2 },
    ],
  },
  {
    title: "Databases",
    skills: [
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "MongoDB", icon: SiMongodb },
      { name: "Supabase", icon: SiSupabase },
      { name: "MySQL", icon: SiMysql },
      { name: "Oracle DB", icon: SiOracle },
    ],
  },
  {
    title: "Tools & Platforms",
    skills: [
      { name: "Git", icon: SiGit },
      { name: "GitHub", icon: SiGithub },
      { name: "Postman", icon: SiPostman },
      { name: "Figma", icon: SiFigma },
      { name: "draw.io", icon: FileEdit },
      { name: "AWS", icon: SiAmazonwebservices },
      { name: "Vercel", icon: SiVercel },
      { name: "Render", icon: Cpu },
      { name: "Android Studio", icon: SiAndroid },
      { name: "Google Colab", icon: SiGooglecolab },
      { name: "Cloudinary", icon: SiCloudinary },
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

        <div className="mt-8 space-y-6">
          {categories.map((cat, ci) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: ci * 0.1 }}
            >
              <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary/80 mb-3">
                {cat.title}
              </h3>
              <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
                {cat.skills.map((skill, i) => {
                  const Icon = skill.icon;
                  return (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, y: 15 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: ci * 0.1 + i * 0.03 }}
                      whileHover={{ scale: 1.05 }}
                      className="flex flex-col items-center justify-center gap-2 p-3 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md hover:border-primary/40 hover:shadow-[0_0_20px_rgba(139,92,246,0.2)] transition-all duration-300 cursor-default group"
                    >
                      <Icon
                        size={18}
                        className="text-muted-foreground group-hover:text-primary transition-colors"
                      />
                      <span className="text-[10px] font-medium text-foreground tracking-tight">
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

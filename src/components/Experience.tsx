import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { ChevronDown } from "lucide-react";

const experiences = [
  {
    role: "Web Developer",
    company: "Odyssey",
    duration: "June 2024 - Present",
    description:
      "Developed and maintained a responsive vacation home listing website using HTML, CSS, and JavaScript, reducing average page load time by 40% through asset optimization and efficient layout structuring. Enhanced on-page SEO via semantic HTML and structured metadata, improving search engine indexing and organic visibility.",
    tech: [
      "React",
      "Tailwind CSS",
      "JavaScript",
      "Node.js",
      "Express.js",
      "Framer Motion",
      "MongoDB",
    ],
  },
  {
    role: "Full Stack Developer",
    company: "AIBI, Airoli",
    duration: "June 2024- September 2025",
    description:
      "Built and deployed scalable full-stack web and mobile applications using React.js, React Native, Node.js, and Supabase, managing datasets of 1,000+ records and reducing manual workflow effort by 30%. Integrated Gemini API and text-to-speech tools for AI-driven features while implementing JWT-based authentication with role-based access control. Optimized backend API performance and database queries, improving scalability and reducing response time by 35%.",
    tech: [
      "React Native",
      "React",
      "Gemini API",
      "Edge TTS",
      "Tailwind CSS",
      "FastAPI",
      "Node.js",
      "Express.js",
      "Cloudinary",
      "Supabase",
    ],
  },
  {
    role: "Full Stack Developer",
    company: "Sinjan Solutions Private Ltd, Vikhroli",
    duration: "December 2023 -May 2024",
    description:
      "Built a QR-code-based attendance management system using React Native and Firebase with real-time data synchronization, reducing manual processing effort by 40%. Strengthened authentication workflows and improved application stability through optimized API communication.",
    tech: ["React Native", "Firebase"],
  },
  {
    role: "Web Developer Intern",
    company: "Insys Technologies",
    duration: "7 June 2023 - 22 July 2023",
    description:
      "Developed web components and features during internship. Specialized in building responsive user interfaces and integrating frontend with backend services using PHP and MySQL. Gained experience in full-cycle web development and debugging.",
    tech: ["HTML", "CSS", "JavaScript", "PHP", "MySQL", "AJAX"],
  },
];

const ExperienceItem = ({
  exp,
  i,
  isVisible,
}: {
  exp: (typeof experiences)[0];
  i: number;
  isVisible: boolean;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className="relative pl-12 group cursor-pointer"
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className="futuristic-card p-6 group-hover:shadow-[0_0_30px_hsl(var(--primary)/0.1)] transition-all duration-300 dark:border-white/5 border-black/10 border">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3 gap-2">
          <div className="flex items-center gap-3">
            <h3 className="font-bold dark:text-white text-black font-display text-lg tracking-tight">
              {exp.role}
            </h3>
            <motion.div
              animate={{ rotate: isOpen ? 180 : 0 }}
              transition={{ duration: 0.3 }}
              className="text-muted-foreground group-hover:text-primary transition-colors"
            >
              <ChevronDown size={18} />
            </motion.div>
          </div>
          <span className="text-[10px] text-muted-foreground font-mono bg-secondary/50 px-2 py-0.5 rounded-full border border-black/5 dark:border-white/5 w-fit">
            {exp.duration}
          </span>
        </div>
        <p className="text-sm text-primary font-medium mb-1">{exp.company}</p>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.35, ease: [0.23, 1, 0.32, 1] }}
              className="overflow-hidden"
            >
              <p className="text-sm text-muted-foreground leading-relaxed mt-4 mb-4">
                {exp.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {exp.tech.map((t) => (
                  <span
                    key={t}
                    className="px-2 py-0.5 text-[9px] font-semibold uppercase tracking-wider rounded-md bg-secondary/40 text-muted-foreground dark:border-white/5 border-black/10 border"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

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

        <div className="mt-16 relative">
          <div className="timeline-v2">
            <div className="timeline-v2-streak" />
          </div>

          <div className="space-y-10">
            {experiences.map((exp, i) => (
              <ExperienceItem key={i} exp={exp} i={i} isVisible={isVisible} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;

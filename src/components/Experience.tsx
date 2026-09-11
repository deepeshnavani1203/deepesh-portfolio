import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { ChevronDown } from "lucide-react";

const experiences = [
  {
    role: "Web Developer",
    company: "Odyssey Homes",
    duration: "March 2026 – Present",
    description:
      "Built a luxury real estate portal showcasing 50+ properties — villas, farmhouses, and twin houses — with dedicated listing pages, enquiry forms, and dynamic content. Developed 3 core modules (property listing, enquiry handling, and content management) using React.js, Node.js, Express.js, and MongoDB. Built RESTful API endpoints for property browsing and enquiry submission, and improved page load performance through code splitting, image compression, and lazy loading.",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS", "REST APIs"],
  },
  {
    role: "Full Stack Developer",
    company: "AIBI, Mumbai",
    duration: "July 2024 – September 2025",
    description:
      "Built and maintained multiple web and mobile applications using React.js, React Native, Node.js, and Supabase, following structured SDLC workflows. Managed 1,000+ structured records through reliable REST APIs. Secured application access using 2 layers of protection — JWT-based authentication and role-based authorization. Integrated 2 AI services — Gemini API and text-to-speech — to power intelligent features across products.",
    tech: [
      "React.js",
      "React Native",
      "Node.js",
      "Express.js",
      "Supabase",
      "Gemini API",
      "gTTS",
      "FastAPI",
      "JWT Auth",
      "Cloudinary",
      "Tailwind CSS",
    ],
  },
  {
    role: "Mobile Application Developer",
    company: "Sinjan Solutions Pvt. Ltd., Mumbai",
    duration: "December 2023 – May 2024",
    description:
      "Developed a QR attendance tracker with React Native and Firebase monitoring live attendance for 100+ users. Reduced verification effort by 40% through process automation and streamlined validation. Identified and fixed 3+ critical authentication bugs related to duplicate entries and expired QR validation, improving app reliability.",
    tech: ["React Native", "Firebase"],
  },
  {
    role: "Web Developer Intern",
    company: "Insys Technologies, India",
    duration: "June 2023 – July 2023",
    description:
      "Built responsive, cross-device-compatible web applications using HTML, CSS, JavaScript, PHP, and MySQL. Developed a course management system with modules for course owners to manage content and for students to track their enrolled courses. Optimized MySQL database queries through proper indexing and query structuring, improving data retrieval performance during testing.",
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

  // Alternate left/right entrance per item
  const xDir = i % 2 === 0 ? -30 : 30;

  return (
    <motion.div
      initial={{ opacity: 0, x: xDir, y: 10 }}
      animate={isVisible ? { opacity: 1, x: 0, y: 0 } : {}}
      whileHover={{ x: 6 }}
      transition={{
        type: "spring",
        stiffness: 280,
        damping: 22,
        opacity: { duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] },
        x: { duration: 0.5, delay: i * 0.1 },
        y: { duration: 0.5, delay: i * 0.1 },
      }}
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
          initial={{ opacity: 0, y: 25 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
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

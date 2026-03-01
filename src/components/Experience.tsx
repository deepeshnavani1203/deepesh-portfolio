import { motion } from "framer-motion";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const experiences = [
  {
    role: "Web Developer",
    company: "Odyssey",
    duration: "2024 - Present",
    description: "Web Developer Developed and maintained a responsive vacation home listing website using HTML, CSS, and JavaScript, reducing average page load time by 40% through asset optimization and efficient layout structuring. Enhanced on-page SEO via semantic HTML and structured metadata, improving search engine indexing and organic visibility.",
    tech: ["React", "Tailwind CSS", "JavaScript", "Node.js", "Express.js", "MongoDB"]
  },
  {
    role: "Full Stack Developer",
    company: "AIBI, Airoli",
    duration: "June 2024- September 2025",
    description: "Full Stack Developer Built and deployed scalable full-stack web and mobile applications using React.js, React Native, Node.js, and Supabase, managing datasets of 1,000+ records and reducing manual workflow effort by 30%. Integrated Gemini API and text-to-speech tools for AI-driven features while implementing JWT-based authentication with role-based access control. Optimized backend API performance and database queries, improving scalability and reducing response time by 35%.",
    tech: ["React Native", "React", "Supabase", "Express JS", "Cloudinary"]
  },
  {
    role: "Full Stack Developer",
    company: "Sinjan Solutions Private Ltd., Vikhroli",
    duration: "December 2023 -May 2024",
    description: "Mobile Application Developer Built a QR-code-based attendance management system using React Native and Firebase with real-time data synchronization, reducing manual processing effort by 40%. Strengthened authentication workflows and improved application stability through optimized API communication.",
    tech: ["React Native", "Firebase"]
  },
  {
    role: "Web Developer Intern",
    company: "Insys Technologies",
    duration: "7 June 2023 - 22 July 2023",
    description: "Mobile Application Developer Built a QR-code-based attendance management system using React Native and Firebase with real-time data synchronization, reducing manual processing effort by 40%. Strengthened authentication workflows and improved application stability through optimized API communication.",
    tech: ["HTML", "CSS", "JavaScript", "PHP", "MySQL", "AJAX"]
  },
];

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

        <div className="mt-12 relative">
          {/* Glowing timeline line */}
          <div className="absolute left-4 top-2 bottom-6 w-px bg-gradient-to-b from-primary/40 via-primary/20 to-transparent" />

          <div className="space-y-10">
            {experiences.map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={isVisible ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className="relative pl-12 group"
              >
                {/* Glowing dot */}
                <div className="absolute left-2.5 top-1.5 w-3 h-3 rounded-full bg-primary shadow-[0_0_10px_hsl(var(--primary)/0.5)] border-2 border-background z-10" />

                <div className="glass-card glow-border p-6 group-hover:shadow-[0_0_20px_hsl(var(--primary)/0.08)] transition-all duration-300">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                    <h3 className="font-semibold text-foreground font-display text-base uppercase tracking-tight">{exp.role}</h3>
                    <span className="text-[10px] text-muted-foreground mt-1 sm:mt-0 font-mono bg-secondary/50 px-2 py-0.5 rounded-full border border-divider">{exp.duration}</span>
                  </div>
                  <p className="text-sm text-primary font-medium mb-3">{exp.company}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">{exp.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {exp.tech.map((t) => (
                      <span
                        key={t}
                        className="px-2 py-0.5 text-[9px] font-semibold uppercase tracking-wider rounded-md bg-secondary/40 text-muted-foreground border border-white/5"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;

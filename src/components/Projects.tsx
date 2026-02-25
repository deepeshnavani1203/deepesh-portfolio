import { motion } from "framer-motion";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useSpotlight } from "@/hooks/useSpotlight";
import {
  ExternalLink,
  Github,
  Layers,
  Server,
  Database,
  Cloud,
  Brain,
  Globe,
  Zap,
  Flame,
  Box,
  Terminal,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

const projects = [
  {
    name: "AI Multiverse",
    description:
      "AI Multiverse is a web platform that integrates multiple AI-powered tools into a single interface, enabling users to perform diverse intelligent tasks such as text generation, analysis, or automation workflows. The application focuses on providing a seamless and responsive UI for interacting with different AI capabilities efficiently.",
    tech: [
      "React",
      "Python",
      "Gemini API",
      "gTTS",
      "Edge TTS",
      "NLP",
      "Tailwind CSS",
    ],
    live: null,
  },
  {
    name: "Crickifyy - v1",
    description:
      "A cricket-focused web platform that provides users with an engaging interface to explore match-related information and cricket insights. Built with a modern UI approach, the application ensures smooth navigation and an interactive user experience for cricket enthusiasts.",
    tech: ["React", "Tailwind CSS", "Python", "FastAPI", "WebSockets"],
    live: "https://crickifyy.vercel.app",
  },
  {
    name: "QR Attend",
    description:
      "A smart attendance management system that utilizes QR code technology to automate student or employee attendance tracking. Users can scan dynamically generated QR codes to mark their presence, ensuring a contactless, efficient, and real-time attendance recording process with reduced chances of manual errors.",
    tech: ["React Native", "CSS - Style Sheet", "Firebase"],
    live: null,
  },
  {
    name: "Loan App",
    description:
      "A machine learning-based web application designed to predict loan approval eligibility based on user-provided financial and personal data. The system analyzes parameters such as income, credit history, employment status, and loan amount to determine approval likelihood, enabling data-driven decision-making through an intuitive user interface.",
    tech: ["React Native", "CSS - Style Sheet", "Firebase"],
    live: null,
  },
  {
    name: "TermiTalk",
    description:
      "A real-time LAN-based chat application developed using Python socket programming that enables multiple computers to communicate seamlessly over a local network without requiring internet connectivity. The system allows users to connect using IP addresses, join or create private chat rooms, exchange messages, share files, and manage participants with administrative controls such as muting or removing users from ongoing conversations.",
    tech: ["Python", "Socket Programming"],
    live: null,
  },
  {
    name: "StrideX",
    description:
      "A responsive e-commerce footwear website developed to showcase and manage a collection of shoes with an intuitive browsing experience. The platform features structured product listings, modern UI components, and seamless navigation to enhance product discovery across different devices.",
    tech: [
      "React",
      "Tailwind CSS",
      "Node.js",
      "MongoDB",
      "Razorpay",
    ],
    live: null,
  },
];

const ProjectCard = ({
  proj,
  i,
  isVisible,
}: {
  proj: (typeof projects)[0];
  i: number;
  isVisible: boolean;
}) => {
  const { onMouseMove } = useSpotlight();

  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -5, rotateX: 2, rotateY: 2 }}
      transition={{ duration: 0.5, delay: i * 0.1 }}
      onMouseMove={onMouseMove}
      className="spotlight-card glass-card glow-border p-6 flex flex-col group hover:shadow-[0_0_30px_hsl(var(--primary)/0.15)] transition-all duration-300 h-full"
    >
      <h3 className="text-lg font-semibold text-foreground font-display mb-2">
        {proj.name}
      </h3>
      <p className="text-sm text-muted-foreground leading-relaxed mb-6 flex-1">
        {proj.description}
      </p>

      <div className="flex flex-wrap gap-2 mb-6">
        {proj.tech.map((t) => (
          <span
            key={t}
            className="px-2.5 py-1 text-[10px] font-medium uppercase tracking-wider rounded-md bg-secondary/80 text-muted-foreground group-hover:text-primary transition-colors"
          >
            {t}
          </span>
        ))}
      </div>

      <div className="flex items-center gap-4 pt-2">
        {proj.live && (
          <a
            href={proj.live}
            className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline transition-all"
            target="_blank"
          >
            <ExternalLink size={14} /> Live Demo
          </a>
        )}
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
          <p className="section-subtitle">
            Real-world applications and experiments.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {projects.map((proj, i) => (
            <ProjectCard
              key={proj.name}
              proj={proj}
              i={i}
              isVisible={isVisible}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

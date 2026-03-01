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
      "A collaborative AI storytelling platform supporting 5+ concurrent users with voice-based narrative generation powered by Gemini API and Edge TTS in under 3 seconds. Built to handle 20+ concurrent API requests with optimized React state management delivering under 100ms UI response time.",
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
      "A real-time multiplayer Hand Cricket game with single-player AI mode and live matches under 50ms latency using WebSocket-based room generation with unique match codes. Features custom scoring algorithms and turn-based game logic with zero game-state desync issues.",
    tech: ["React", "Tailwind CSS", "Python", "FastAPI", "WebSockets"],
    live: "https://crickifyy.vercel.app",
  },
  {
    name: "QR Attend",
    description:
      "An Android-based attendance management system using real-time QR authentication to automate attendance verification, reducing manual processing effort by 40%. The system features secure QR validation workflows with backend processing and database integration — formally published as a peer-reviewed research paper.",
    tech: ["React Native", "CSS - Style Sheet", "Firebase"],
    live: null,
  },
  {
    name: "Loan App",
    description:
      "An Android-based loan app with PAN and Aadhaar-based KYC verification and automated eligibility workflows, reducing manual review time by 50%. Built with secure backend services for EMI calculation, approval processing, and repayment tracking with industry-standard encryption.",
    tech: ["React Native", "CSS - Style Sheet", "Firebase"],
    live: null,
  },
  {
    name: "TermiTalk",
    description:
      "A secure LAN-based chat application supporting 10+ concurrent users with private rooms, admin controls, and peer-to-peer file sharing — all without internet connectivity. Optimized multi-threaded server architecture delivers under 20ms message delivery time with zero unauthorized file transfers.",
    tech: ["Python", "Socket Programming"],
    live: null,
  },
  {
    name: "StrideX",
    description:
      "A full-stack e-commerce platform with product catalog, cart management, and secure checkout supporting 10+ product categories and 15+ REST API endpoints. Features Razorpay payment integration, MongoDB data storage, and JWT-based authentication with sub-second response time.",
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
            <ExternalLink size={14} /> View Project
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

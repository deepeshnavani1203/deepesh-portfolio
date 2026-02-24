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
      "An AI-driven narrative generation platform that enables users to create multi-character conversational storylines through dynamic dialogue inputs and voice synthesis. The system integrates advanced speech generation models to transform scripted interactions into immersive audio-based storytelling experiences. Designed to simulate character-driven conversations, it leverages large language model APIs and real-time text-to-speech processing for enhanced user engagement.",
    tech: ["React", "Python", "Gemini API", "gTTS", "Edge TTS", "NLP", "Tailwind CSS"],
    live: null,
  },
  {
    name: "Crickifyy - v1",
    description:
      "A real-time multiplayer Hand Cricket engine built to deliver interactive gameplay using socket-based communication for live score synchronization and event-driven match logic. The platform ensures seamless turn-based interactions between players by utilizing asynchronous backend processing and low-latency WebSocket connections for consistent match state updates.",
    tech: ["React", "Tailwind CSS", "Python", "FastAPI", "WebSockets"],
    live: "https://crickifyy.vercel.app",
  },
  {
    name: "QR Attend",
    description:
      "A secure Android-based attendance management system that utilizes QR authentication mechanisms to streamline employee presence tracking. The application incorporates role-based access control and in-app communication features to facilitate efficient coordination between administrators and registered users within an organizational environment.",
    tech: ["React Native", "CSS - Style Sheet", "Firebase"],
    live: null,
  },
  {
    name: "Loan App",
    description:
      "A mobile-based digital loan processing system developed to automate application workflows through identity verification using Aadhaar and PAN credentials. The platform evaluates user eligibility and dynamically manages approval or rejection pipelines based on document validation and predefined lending parameters.",
    tech: ["React Native", "CSS - Style Sheet", "Firebase"],
    live: null,
  },
  {
    name: "TermiTalk",
    description:
      "A terminal-based multi-user communication server developed in Python that facilitates real-time messaging across multiple chat rooms over local network infrastructure. The system supports peer-level file sharing and administrative moderation commands such as user muting, removal, and access control to maintain structured communication within active sessions. Designed to operate without internet connectivity, it enables secure and efficient intra-network communication through socket-based message routing.",
    tech: ["Python", "Socket Programming"],
    live: null,
  },
  {
    name: "StrideX",
    description:
      "A full-stack e-commerce platform engineered to facilitate online footwear retail with integrated user authentication and secure payment processing. The system supports Google OAuth-based login and Razorpay-enabled checkout workflows to ensure seamless transaction handling and order lifecycle management.",
    tech: ["React", "Tailwind CSS", "Node.js", "MongoDB", "Razorpay", "Google Auth"],
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
          <p className="section-subtitle">Real-world applications and experiments.</p>
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

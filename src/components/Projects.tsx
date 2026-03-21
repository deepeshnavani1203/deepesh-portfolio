import { motion } from "framer-motion";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { ExternalLink, Github, FileText } from "lucide-react";

const projects = [
  {
    name: "AI Multiverse",
    description:
      "AI Multiverse is a collaborative AI storytelling platform that enables real-time multi-user interaction with voice-based narrative generation. It supports 5+ concurrent users, processes 20+ asynchronous API requests, and delivers AI-generated stories in under 3 seconds with optimized frontend performance achieving under 100ms UI response time.",
    tech: ["React", "Python", "Gemini API", "gTTS", "Edge TTS", "Tailwind CSS"],
    live: null,
    github: null,
    paper: null,
    image:
      "/docs/ai-multiverse.jpg",
  },
  {
    name: "Crickify",
    description:
      "Crickify is a real-time multiplayer Hand Cricket game built using WebSockets, supporting both single-player and live multiplayer modes. It achieves under 50ms latency with unique room-based matchmaking and ensures zero game-state desynchronization through robust turn-based game logic.",
    tech: ["React", "Tailwind CSS", "Python", "FastAPI", "Sockets"],
    live: "https://crickifyy.vercel.app",
    github: "https://github.com/deepeshnavani1203/Crickify.git",
    paper: null,
    image:
      "/docs/crickify-logo.png",
  },
  {
    name: "QR Attend",
    description:
      "QR Attend is an Android-based attendance management system that automates attendance verification using real-time QR authentication. The system supports 100+ daily entries, reduces manual effort by 40%, and was published as a peer-reviewed research paper with secure backend validation and Firebase integration.",
    tech: ["React Native", "Firebase"],
    live: null,
    github: null,
    paper: "https://ijrpr.com/uploads/V5ISSUE3/IJRPR23651.pdf",
    image:
      "/docs/qrattend-logo.jpeg",
  },
  {
    name: "TermiTalk",
    description:
      "TermiTalk is a secure LAN-based chat application enabling real-time messaging without internet connectivity. It supports 10+ concurrent users with private rooms, admin controls, and file sharing, while maintaining under 20ms message delivery latency through an optimized multi-threaded server architecture.",
    tech: ["Python", "Socket Programming"],
    live: null,
    github: "https://github.com/deepeshnavani1203/TermiTalk.git",
    paper: null,
    image:
      "/docs/termitalk-logo.jpg",
  },
  {
    name: "StrideX",
    description:
      "StrideX is a full-stack e-commerce platform supporting 10+ product categories with a secure checkout system powered by Razorpay. I built and integrated 15+ RESTful APIs for authentication, product management, and order processing, achieving sub-second response times using MongoDB and optimized backend architecture with JWT-based authentication.",
    tech: ["React", "Tailwind CSS", "Node.js", "MongoDB"],
    live: "https://stride-x-flax.vercel.app/",
    github: "https://github.com/deepeshnavani1203/StrideX.git",
    paper: null,
    image:
      "/docs/stridex-logo.png",
  },
];

const ProjectCard = ({ proj, i, isVisible }) => {
  const links = [
    proj.live && {
      href: proj.live,
      label: "View",
      icon: ExternalLink,
      primary: true,
    },
    proj.github && {
      href: proj.github,
      label: "Source",
      icon: Github,
    },
    proj.paper && {
      href: proj.paper,
      label: "Paper",
      icon: FileText,
    },
  ].filter(Boolean);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: i * 0.1 }}
      className="glass-card flex flex-col h-full hover:scale-[1.03] transition-all duration-300 shadow-sm hover:shadow-[0_0_25px_rgba(124,58,237,0.2)] bg-card border border-border overflow-hidden"
    >
      <div className="flex flex-col h-full p-4 md:p-5">

        {/* Image */}
        <div className="w-full h-32 md:h-40 rounded-xl overflow-hidden mb-4 border border-border/50">
          <img
            src={proj.image}
            alt={proj.name}
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
          />
        </div>

        {/* Title */}
        <h3 className="text-lg md:text-xl font-bold text-foreground mb-2">
          {proj.name}
        </h3>

        {/* Tech */}
        <div className="flex flex-wrap gap-2 mb-3">
          {proj.tech.map((t) => (
            <span
              key={t}
              className="px-2 py-0.5 text-[10px] font-bold uppercase text-highlight bg-highlight/10 border border-highlight/20 rounded"
            >
              {t}
            </span>
          ))}
        </div>

        {/* Description */}
        <p className="text-sm text-muted-foreground mb-6 flex-1">
          {proj.description}
        </p>

        {/* Dynamic Buttons */}
        {links.length > 0 && (
          <div
            className={`grid gap-2 mt-auto ${links.length === 1
              ? "grid-cols-1"
              : links.length === 2
                ? "grid-cols-2"
                : "grid-cols-2 lg:grid-cols-3"
              }`}
          >
            {links.map((link, idx) => {
              const Icon = link.icon;
              return (
                <a
                  key={idx}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full py-2 px-3 text-xs font-bold text-center rounded border shadow-sm flex items-center justify-center gap-1.5 transition-all duration-200
                    ${link.primary
                      ? "text-white bg-primary hover:bg-primary/90 border-primary/20"
                      : "text-foreground bg-secondary hover:bg-secondary/70 border-border"
                    }`}
                >
                  <Icon size={14} /> {link.label}
                </a>
              );
            })}
          </div>
        )}
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="projects" className="section-padding">
      <div className="max-w-6xl mx-auto" ref={ref}>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">
            Real-world applications and experiments.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
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

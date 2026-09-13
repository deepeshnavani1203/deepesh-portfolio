import { motion } from "framer-motion";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { ExternalLink, Github, FileText } from "lucide-react";

const projects = [
  {
    name: "RevAI",
    description:
      "RevAI is an AI-powered video revision assistant that transforms educational playlists into a searchable knowledge base. It implements a RAG pipeline using Whisper, embeddings, and Qdrant vector database for semantic retrieval, and delivers context-aware answers with video timestamps so users can jump directly to the relevant lecture segment.",
    tech: [
      "React.js",
      "FastAPI",
      "Python",
      "yt-dlp",
      "Whisper",
      "RAG",
      "Groq API",
      "Qdrant",
    ],
    live: "https://rev-ai-alpha.vercel.app",
    github: "https://github.com/deepeshnavani1203/RevAI.git",
    paper: null,
    image: "/docs/revai.jpeg",
  },
  {
    name: "HireSense",
    description:
      "HireSense is an AI-powered job-readiness platform offering resume analysis, interview prep, profile generation, career guidance, and ATS scoring. It features a Gemini-powered conversational assistant, an ATS analyzer providing actionable feedback, and a mock interview module with speech recognition.",
    tech: [
      "React.js",
      "Tainwind CSS",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Gemini API",
      "gTTS",
    ],
    live: "https://hire-sense-xi.vercel.app",
    github: "https://github.com/deepeshnavani1203/HireSense.git",
    paper: null,
    image: "/docs/hiresense.png",
  },
  {
    name: "Crickify",
    description:
      "Crickify is a real-time multiplayer Hand Cricket game offering single-player and multiplayer modes with under 50ms latency. It features a Socket.IO-powered room matchmaking framework supporting 20+ concurrent matches with automatic reconnection and state synchronization.",
    tech: [
      "React.js",
      "Tailwind CSS",
      "Python",
      "Node.js",
      "Express.js",
      "Framer Motion",
      "Socket.IO",
    ],
    live: "https://crickifyy.vercel.app",
    github: "https://github.com/deepeshnavani1203/Crickify.git",
    paper: null,
    image: "/docs/crickify-logo.png",
  },
  {
    name: "QR Attend",
    description:
      "QR Attend is an Android-based attendance tracking system utilizing QR codes for real-time validation. It automates check-in workflows, reduces manual attendance marking effort by 40%, and features secure Firebase integration as published in our research paper.",
    tech: ["React Native", "Firebase"],
    live: null,
    github: null,
    paper: "https://ijrpr.com/uploads/V5ISSUE3/IJRPR23651.pdf",
    image: "/docs/qrattend-logo.jpeg",
  },
  {
    name: "StrideX",
    description:
      "StrideX is a full-stack e-commerce platform with a product catalog, cart management, and Razorpay-integrated checkout. It features 15+ RESTful API endpoints for authentication, order management, and secure transactions processing in under 2 seconds.",
    tech: [
      "Next.js",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "JWT",
      "MongoDB",
      "Razorpay",
    ],
    live: "https://stride-x-flax.vercel.app",
    github: "https://github.com/deepeshnavani1203/StrideX.git",
    paper: null,
    image: "/docs/stridex-logo.png",
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
      label: "GitHub",
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
      whileHover={{ y: -6, scale: 1.02 }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 20,
        opacity: { duration: 0.8, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] },
      }}
      className="futuristic-card flex flex-col h-full shadow-md hover:shadow-[0_0_30px_rgba(59,130,246,0.2)] border dark:border-white/10 border-black/10 dark:bg-white/[0.07] bg-white"
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

        {/* Buttons — always render grid, show placeholder if no links */}
        <div
          className={`grid gap-2 mt-auto ${
            links.length === 0
              ? "grid-cols-2"
              : links.length === 1
                ? "grid-cols-1"
                : links.length === 2
                  ? "grid-cols-2"
                  : "grid-cols-2 lg:grid-cols-3"
          }`}
        >
          {links.length === 0 ? (
            <>
              <a
                href="#"
                className="w-full py-2 px-3 text-xs font-bold text-center rounded border shadow-sm flex items-center justify-center gap-1.5 opacity-40 cursor-not-allowed pointer-events-none
                  dark:text-white text-black bg-primary border-primary/20"
              >
                <ExternalLink size={14} /> View
              </a>
              <a
                href="#"
                className="w-full py-2 px-3 text-xs font-bold text-center rounded border shadow-sm flex items-center justify-center gap-1.5 opacity-40 cursor-not-allowed pointer-events-none
                  text-foreground bg-secondary border-border"
              >
                <Github size={14} /> GitHub
              </a>
            </>
          ) : (
            links.map((link, idx) => {
              const Icon = link.icon;
              return (
                <a
                  key={idx}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full py-2 px-3 text-xs font-bold text-center rounded border shadow-sm flex items-center justify-center gap-1.5 transition-all duration-200
                    ${
                      link.primary
                        ? "dark:text-white text-black bg-primary hover:bg-primary/90 border-primary/20"
                        : "text-foreground bg-secondary hover:bg-secondary/70 border-border"
                    }`}
                >
                  <Icon size={14} /> {link.label}
                </a>
              );
            })
          )}
        </div>
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
          initial={{ opacity: 0, y: 25 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
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

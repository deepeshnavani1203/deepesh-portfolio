import { motion } from "framer-motion";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { ExternalLink, Github, FileText } from "lucide-react";

interface Project {
  name: string;
  description: string;
  tech: string[];
  live?: string | null;
  github?: string | null;
  paper?: string | null;
  image: string;
}

const projects: Project[] = [
  {
    name: "RevAI",
    description:
      "AI-powered video revision assistant that converts lecture playlists into a searchable semantic knowledge base. Built with Whisper, Qdrant vector search, and Groq LLMs with exact video timestamp navigation so students can jump directly to relevant segments.",
    tech: [
      "React.js",
      "FastAPI",
      "Python",
      "Whisper",
      "RAG",
      "Groq API",
      "Qdrant",
    ],
    live: "https://rev-ai-alpha.vercel.app",
    github: "https://github.com/deepeshnavani1203/RevAI.git",
    image: "/docs/revai.jpeg",
  },
  {
    name: "HireSense",
    description:
      "AI-driven job readiness platform providing intelligent resume scoring, Gemini-powered conversational interview coaching, actionable ATS diagnostics, and speech-recognition mock interviews.",
    tech: [
      "React.js",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Gemini API",
      "gTTS",
    ],
    live: "https://hire-sense-xi.vercel.app",
    github: "https://github.com/deepeshnavani1203/HireSense.git",
    image: "/docs/hiresense.png",
  },
  {
    name: "Crickify",
    description:
      "Fast-paced real-time multiplayer Hand Cricket game with sub-50ms latency. Engineered with Socket.IO matchmaking, automatic room reconnection, and synchronized gameplay states.",
    tech: [
      "React.js",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "Socket.IO",
      "Framer Motion",
      "Python",
    ],
    live: "https://crickifyy.vercel.app",
    github: "https://github.com/deepeshnavani1203/Crickify.git",
    image: "/docs/crickify-logo.png",
  },
  {
    name: "StrideX",
    description:
      "Modern full-stack e-commerce experience featuring product catalog filtering, cart state management, secure JWT authentication, and Razorpay payment gateway integration for real-time transactions.",
    tech: [
      "Next.js",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT",
      "Razorpay",
    ],
    live: "https://stride-x-flax.vercel.app",
    github: "https://github.com/deepeshnavani1203/StrideX.git",
    image: "/docs/stridex-logo.png",
  },
  {
    name: "QR Attend",
    description:
      "Android attendance tracking platform utilizing dynamic QR code verification to automate check-ins and reduce attendance logging effort by 40%. Features Firebase authentication and real-time logging, published in the peer-reviewed IJRPR journal.",
    tech: ["React Native", "Firebase", "Android", "QR Auth", "Research"],
    paper: "https://ijrpr.com/uploads/V5ISSUE3/IJRPR23651.pdf",
    image: "/docs/qrattend-logo.jpeg",
  },
];

const ProjectCard = ({ proj, i, isVisible }: { proj: Project; i: number; isVisible: boolean }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      whileHover={{ y: -6, scale: 1.015 }}
      transition={{
        type: "spring",
        stiffness: 320,
        damping: 24,
        opacity: { duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] },
      }}
      className="
        futuristic-card group flex flex-col h-full rounded-2xl overflow-hidden
        border border-border/70 dark:border-white/10
        bg-card/75 dark:bg-card/40 backdrop-blur-xl
        hover:border-primary/50 hover:shadow-[0_12px_40px_rgba(59,130,246,0.22)]
        transition-all duration-300
      "
    >
      {/* ── Edge-to-Edge Pristine Media Header (No text or badge overlays) ── */}
      <div className="relative w-full h-48 sm:h-52 overflow-hidden bg-muted/40 dark:bg-black/50 border-b border-border/50 flex items-center justify-center">
        <img
          src={proj.image}
          alt={proj.name}
          className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
          loading="lazy"
        />
        {/* Subtle cinematic gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/15 to-transparent pointer-events-none" />
      </div>

      {/* ── Content Body ────────────────────────────────────────────── */}
      <div className="flex-1 flex flex-col p-5">
        {/* Title */}
        <h3 className="text-xl font-bold font-display text-foreground group-hover:text-primary transition-colors mb-2.5">
          {proj.name}
        </h3>

        {/* Tech Stack Pills */}
        <div className="flex flex-wrap gap-1.5 mb-3.5">
          {proj.tech.map((t) => (
            <span
              key={t}
              className="px-2.5 py-0.5 text-[11px] font-medium rounded-md bg-secondary/80 text-foreground/85 border border-border/70 hover:border-primary/40 hover:text-foreground transition-colors"
            >
              {t}
            </span>
          ))}
        </div>

        {/* Full Unabridged Description (No truncation) */}
        <p className="text-sm text-muted-foreground leading-relaxed mb-6 flex-1">
          {proj.description}
        </p>

        {/* ── Action Buttons ──────────────────────────────────────────── */}
        <div className="mt-auto pt-4 border-t border-border/40">
          <div className="flex items-center gap-2.5">
            {/* Live Demo Link */}
            {proj.live && (
              <a
                href={proj.live}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Visit live site of ${proj.name}`}
                className="
                  flex-1 py-2.5 px-3.5 rounded-xl
                  bg-primary text-primary-foreground font-semibold text-xs
                  flex items-center justify-center gap-1.5
                  shadow-md shadow-primary/20 hover:shadow-primary/35 hover:brightness-105
                  active:scale-[0.98] transition-all duration-200
                "
              >
                <ExternalLink size={14} />
                <span>Live Demo</span>
              </a>
            )}

            {/* GitHub Link */}
            {proj.github && (
              <a
                href={proj.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View source code of ${proj.name} on GitHub`}
                className={`
                  ${proj.live ? "flex-1" : "w-full"}
                  py-2.5 px-3.5 rounded-xl
                  bg-secondary hover:bg-secondary/80 text-foreground
                  border border-border/80 hover:border-foreground/20
                  font-semibold text-xs flex items-center justify-center gap-1.5
                  active:scale-[0.98] transition-all duration-200
                `}
              >
                <Github size={14} />
                <span>GitHub</span>
              </a>
            )}

            {/* Research Paper Link */}
            {proj.paper && (
              <a
                href={proj.paper}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Read research paper for ${proj.name}`}
                className="
                  w-full py-2.5 px-4 rounded-xl
                  bg-primary/15 hover:bg-primary/25 text-primary
                  border border-primary/35 hover:border-primary/60
                  font-semibold text-xs flex items-center justify-center gap-2
                  shadow-sm active:scale-[0.98] transition-all duration-200
                "
              >
                <FileText size={14} />
                <span>Read Research Paper (IJRPR)</span>
              </a>
            )}
          </div>
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
          className="mb-10 text-center md:text-left"
        >
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">
            Real-world applications and experiments.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-7">
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

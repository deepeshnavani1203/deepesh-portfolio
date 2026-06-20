import { motion } from "framer-motion";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { BookOpen, ExternalLink, Download } from "lucide-react";

const Publication = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="publication" className="section-padding">
      <div className="max-w-3xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className="section-title">Publication</h2>
          <p className="section-subtitle">
            Academic and research contributions.
          </p>
        </motion.div>

        <div className="mt-10 space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            whileHover={{ y: -4, scale: 1.01 }}
            transition={{
              type: "spring",
              stiffness: 400,
              damping: 25,
              opacity: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
            }}
            className="futuristic-card p-5 flex items-start gap-4 hover:shadow-[0_0_25px_hsl(var(--primary)/0.1)] dark:border-white/5 border-black/10 border"
          >
            <BookOpen size={20} className="text-primary mt-0.5 flex-shrink-0" />
            <div className="flex-1 flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <h3 className="font-semibold text-foreground font-sans text-sm">
                  QR Attend
                </h3>
                <p className="text-sm text-muted-foreground mt-1">
                  An Android-based attendance management system designed for
                  employee tracking through QR code authentication.
                </p>
              </div>

              <div className="flex items-center gap-3">
                <a
                  href="https://ijrpr.com/uploads/V5ISSUE3/IJRPR23651.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-secondary streak-hover text-foreground text-sm font-medium hover:bg-secondary/80 transition-colors border border-border w-fit"
                >
                  <Download size={14} />
                  Download
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Publication;

import { motion } from "framer-motion";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { BookOpen, ExternalLink, Download } from "lucide-react";

const Publication = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="publication" className="section-padding">
      <div className="max-w-3xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Publication</h2>
          <p className="section-subtitle">Academic and research contributions.</p>
        </motion.div>

        <div className="mt-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4 }}
            className=" glass-card glow-border p-6 hover:shadow-[0_0_25px_hsl(var(--primary)/0.1)] transition-all duration-300"
          >
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div className="flex items-start gap-4">
                <div className="p-2.5 rounded-xl bg-primary/10 text-primary mt-1">
                  <BookOpen size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground font-display">
                    QR Attend
                  </h3>
                  <p className="text-sm text-muted-foreground mt-2 max-w-xl">
                    An Android-based attendance management system designed for employee tracking through QR code authentication.
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <a
                  href="https://ijrpr.com/uploads/V5ISSUE3/IJRPR23651.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary/10 text-primary text-sm font-medium hover:bg-primary/20 transition-colors"
                >
                  <ExternalLink size={16} />
                  View Paper
                </a>
                <a
                  href="https://ijrpr.com/uploads/V5ISSUE3/IJRPR23651.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-secondary text-foreground text-sm font-medium hover:bg-secondary/80 transition-colors border border-divider"
                >
                  <Download size={16} />
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

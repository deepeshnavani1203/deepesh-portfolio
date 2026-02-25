import { motion } from "framer-motion";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Award, BadgeCheck, Download } from "lucide-react";

const awards = [
  { title: "Invictus ' 25 Finalist", org: "App Development", year: "2024 - 2025" },
];

const certifications = [
  {
    name: "Internship at Insys Techologies",
    issuer: "Insys Technologies",
    year: "2023",
    link: "/docs/Insys_technologies.pdf"
  },
  // { name: "React & nest.js Workshop at VES Ploytechnic", issuer: "VES Polytechnic", year: "2024" },
];

const Awards = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="awards" className="section-padding">
      <div className="max-w-3xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Awards & Certifications</h2>
          <p className="section-subtitle">Recognition and professional milestones.</p>
        </motion.div>

        <div className="mt-12 space-y-8">
          {/* Unified Container for Awards & Certs */}
          <div className="space-y-6">

            <div className="grid gap-4">
              {awards.map((a, i) => (
                <motion.div
                  key={`award-${i}`}
                  initial={{ opacity: 0, y: 15 }}
                  animate={isVisible ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="glass-card glow-border p-5 flex items-start gap-4 hover:shadow-[0_0_20px_hsl(var(--primary)/0.1)] transition-all duration-300"
                >
                  <Award size={20} className="text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-foreground text-sm uppercase tracking-tight">{a.title}</h4>
                    <p className="text-sm text-muted-foreground mt-1">{a.org} · {a.year}</p>
                  </div>
                </motion.div>
              ))}

              {certifications.map((c, i) => (
                <motion.div
                  key={`cert-${i}`}
                  initial={{ opacity: 0, y: 15 }}
                  animate={isVisible ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: (awards.length + i) * 0.1 }}
                  className="glass-card glow-border p-5 flex flex-col md:flex-row md:items-center justify-between gap-4 hover:shadow-[0_0_20px_hsl(var(--primary)/0.1)] transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <BadgeCheck size={20} className="text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-foreground text-sm uppercase tracking-tight">{c.name}</h4>
                      <p className="text-sm text-muted-foreground mt-1">{c.issuer} · {c.year}</p>
                    </div>
                  </div>
                  {c.link && (
                    <a
                      href={c.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-secondary text-foreground text-sm font-medium hover:bg-secondary/80 transition-colors border border-border w-fit"
                    >
                      <Download size={16} />
                      Download
                    </a>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Awards;

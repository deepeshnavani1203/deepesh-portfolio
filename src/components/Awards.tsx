import { motion } from "framer-motion";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Award, BadgeCheck } from "lucide-react";

const awards = [
  { title: "Best Developer Award", org: "TechCorp Annual Summit", year: "2024" },
  { title: "Hackathon Winner — AI Track", org: "Global Hack 2023", year: "2023" },
  { title: "Open Source Contributor of the Year", org: "DevCommunity", year: "2022" },
];

const certifications = [
  { name: "AWS Certified Solutions Architect", issuer: "Amazon Web Services", year: "2024" },
  { name: "Meta Frontend Developer Professional Certificate", issuer: "Coursera / Meta", year: "2023" },
  { name: "Google Cloud Professional Data Engineer", issuer: "Google Cloud", year: "2023" },
];

const Awards = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="awards" className="section-padding">
      <div className="max-w-4xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Awards & Certifications</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 mt-12">
          {/* Awards */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-primary mb-6">Recognition</h3>
            <div className="relative">
              <div className="absolute left-3 top-2 bottom-2 w-px bg-gradient-to-b from-primary/30 to-transparent" />
              <div className="space-y-4">
                {awards.map((a, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -15 }}
                    animate={isVisible ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: i * 0.1 }}
                    className="relative pl-9"
                  >
                    <Award size={16} className="absolute left-0.5 top-1 text-primary" />
                    <div className="glass-card p-4">
                      <h4 className="font-semibold text-foreground text-sm">{a.title}</h4>
                      <p className="text-xs text-muted-foreground mt-0.5">{a.org} · {a.year}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-primary mb-6">Certifications</h3>
            <div className="space-y-4">
              {certifications.map((c, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 15 }}
                  animate={isVisible ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="glass-card glow-border p-4 flex items-start gap-3"
                >
                  <BadgeCheck size={18} className="text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-foreground text-sm">{c.name}</h4>
                    <p className="text-xs text-muted-foreground mt-0.5">{c.issuer} · {c.year}</p>
                  </div>
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

import { motion } from "framer-motion";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Award } from "lucide-react";

const awards = [
  { title: "Best Developer Award", org: "TechCorp Annual Summit", year: "2024" },
  { title: "Hackathon Winner — AI Track", org: "Global Hack 2023", year: "2023" },
  { title: "Open Source Contributor of the Year", org: "DevCommunity", year: "2022" },
];

const Awards = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="awards" className="section-padding">
      <div className="max-w-3xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <h2 className="section-title font-display">Awards & Recognition</h2>
        </motion.div>

        <div className="mt-10 space-y-4">
          {awards.map((a, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 15 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="flex items-start gap-4 glass-card p-5 hover:border-primary/15 transition-colors duration-500"
            >
              <Award size={18} className="text-primary mt-0.5 flex-shrink-0" />
              <div>
                <h3 className="font-display font-medium text-foreground text-sm">{a.title}</h3>
                <p className="text-xs text-muted-foreground">{a.org} · {a.year}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Awards;
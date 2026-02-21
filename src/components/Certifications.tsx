import { motion } from "framer-motion";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { BadgeCheck } from "lucide-react";

const certifications = [
  { name: "AWS Certified Solutions Architect", issuer: "Amazon Web Services", year: "2024" },
  { name: "Meta Frontend Developer Certificate", issuer: "Coursera / Meta", year: "2023" },
  { name: "Google Cloud Professional Data Engineer", issuer: "Google Cloud", year: "2023" },
];

const Certifications = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="certifications" className="section-padding">
      <div className="max-w-4xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <h2 className="section-title font-display">Certifications</h2>
        </motion.div>

        <div className="mt-10 grid sm:grid-cols-3 gap-5">
          {certifications.map((c, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 15 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="glass-card p-5 text-center hover:border-primary/15 transition-colors duration-500"
            >
              <BadgeCheck size={24} className="text-primary mx-auto mb-3" />
              <h3 className="font-display font-medium text-foreground text-sm mb-1">{c.name}</h3>
              <p className="text-xs text-muted-foreground">{c.issuer} · {c.year}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
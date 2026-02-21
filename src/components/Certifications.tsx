import { motion } from "framer-motion";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { BadgeCheck } from "lucide-react";

const certifications = [
  { name: "AWS Certified Solutions Architect", issuer: "Amazon Web Services", year: "2024" },
  { name: "Meta Frontend Developer Professional Certificate", issuer: "Coursera / Meta", year: "2023" },
  { name: "Google Cloud Professional Data Engineer", issuer: "Google Cloud", year: "2023" },
];

const Certifications = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="certifications" className="section-padding bg-secondary/30">
      <div className="max-w-3xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Certifications</h2>
        </motion.div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((c, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="glass-card p-5 text-center"
            >
              <BadgeCheck size={28} className="text-primary mx-auto mb-3" />
              <h3 className="font-semibold text-foreground font-sans text-sm mb-1">{c.name}</h3>
              <p className="text-xs text-muted-foreground">{c.issuer} · {c.year}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;

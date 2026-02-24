import { motion } from "framer-motion";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Mic, Users } from "lucide-react";

const activities = [
  { icon: Mic, title: "4-Day Workshop on React & Next.js at VES Polytechnic", desc: "Conducted a 4-day hands-on workshop on React and Next.js, covering modern frontend development and scalable web application design." },
];

const Community = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="community" className="section-padding">
      <div className="max-w-3xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Speaking & Community</h2>
          <p className="section-subtitle">Sharing knowledge and giving back.</p>
        </motion.div>

        <div className="mt-10 space-y-4">
          {activities.map((a, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="flex items-start gap-4 glass-card p-5"
            >
              <a.icon size={20} className="text-primary mt-0.5 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-foreground font-sans text-sm">{a.title}</h3>
                <p className="text-sm text-muted-foreground">{a.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Community;

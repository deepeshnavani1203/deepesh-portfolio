import { motion } from "framer-motion";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Mic, Users } from "lucide-react";

const activities = [
  { icon: Mic, title: "React Performance Workshop", desc: "Delivered a workshop on optimizing React apps at DevConf 2024." },
  { icon: Users, title: "Open Source Maintainer", desc: "Core contributor to several popular open-source libraries with 500+ GitHub stars." },
  { icon: Mic, title: "Tech Talk: Scaling Supabase", desc: "Spoke at a local meetup about real-time database patterns with Supabase." },
];

const Community = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="community" className="section-padding">
      <div className="max-w-3xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <h2 className="section-title font-display">Speaking & Community</h2>
          <p className="section-subtitle">Sharing knowledge and giving back.</p>
        </motion.div>

        <div className="mt-10 space-y-4">
          {activities.map((a, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 15 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="flex items-start gap-4 glass-card p-5 hover:border-primary/15 transition-colors duration-500"
            >
              <a.icon size={18} className="text-primary mt-0.5 flex-shrink-0" />
              <div>
                <h3 className="font-display font-medium text-foreground text-sm">{a.title}</h3>
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
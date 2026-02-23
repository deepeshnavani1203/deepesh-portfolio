import { motion } from "framer-motion";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useSpotlight } from "@/hooks/useSpotlight";

const values = [
  { title: "Craftsmanship", desc: "Every line of code is intentional. I care deeply about quality and maintainability." },
  { title: "Continuous Growth", desc: "I'm always exploring new tools, patterns, and ideas to stay ahead of the curve." },
  { title: "Impact", desc: "I build products that matter — solving real problems for real people." },
];

const About = () => {
  const { ref, isVisible } = useScrollReveal();
  const { onMouseMove } = useSpotlight();

  return (
    <section id="about" className="section-padding">
      <div className="max-w-3xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2 className="section-title">About Me</h2>
          <p className="text-muted-foreground leading-relaxed text-base md:text-lg mt-6">
            I'm a Full Stack Developer passionate about building clean, performant, and user-centric 
            digital products. With experience spanning frontend frameworks, backend services, and cloud 
            infrastructure, I enjoy turning complex problems into simple, elegant solutions. I thrive at 
            the intersection of design and engineering — where thoughtful architecture meets delightful 
            user experience.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className="mt-12"
        >
          <h3 className="text-xs font-semibold uppercase tracking-widest text-primary mb-6">Principles I Build By</h3>
          <div className="grid sm:grid-cols-3 gap-5">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
                onMouseMove={onMouseMove}
                className="spotlight-card glass-card glow-border p-5"
              >
                <h4 className="font-semibold text-foreground mb-2 text-sm">{v.title}</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;

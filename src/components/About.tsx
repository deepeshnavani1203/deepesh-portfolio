import { motion } from "framer-motion";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const About = () => {
  const { ref, isVisible } = useScrollReveal();

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
          <h3 className="text-xl font-serif font-semibold text-foreground mb-4">What Drives Me</h3>
          <div className="grid sm:grid-cols-3 gap-6">
            {[
              { title: "Craftsmanship", desc: "Every line of code is intentional. I care deeply about quality and maintainability." },
              { title: "Continuous Growth", desc: "I'm always exploring new tools, patterns, and ideas to stay ahead of the curve." },
              { title: "Impact", desc: "I build products that matter — solving real problems for real people." },
            ].map((v) => (
              <div key={v.title} className="glass-card p-5">
                <h4 className="font-semibold text-foreground mb-2 font-sans text-sm uppercase tracking-wider">{v.title}</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;

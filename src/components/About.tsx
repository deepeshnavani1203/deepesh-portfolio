import { motion } from "framer-motion";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const About = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="about" className="section-padding">
      <div className="max-w-3xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className="section-title">About Me</h2>

          <p className="text-muted-foreground leading-relaxed text-base md:text-lg mt-6">
            I'm a Full Stack Developer from Mumbai, building web and mobile applications with{" "}
            <span className="text-foreground font-medium">React.js, Next.js, React Native,</span> and{" "}
            <span className="text-foreground font-medium">Node.js</span> — working across both SQL and NoSQL databases.
            Lately I've been diving into <span className="text-foreground font-medium">AI/ML</span>, building real
            solutions with <span className="text-foreground font-medium">RAG pipelines and LLMs</span>, and sharpening
            problem-solving through DSA. I care about clean, maintainable code and creating products that solve real
            problems for real people.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;

import { Github, Linkedin, Code2 } from "lucide-react";

const Footer = () => (
  <footer className="border-t border-border/40 py-10 px-6">
    <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
      <p className="text-sm text-muted-foreground/60">
        © {new Date().getFullYear()} Deepesh. Built with care.
      </p>
      <div className="flex items-center gap-5">
        <a href="https://github.com/deepesh" target="_blank" rel="noopener noreferrer" className="text-muted-foreground/50 hover:text-foreground transition-colors duration-300" aria-label="GitHub">
          <Github size={16} />
        </a>
        <a href="https://linkedin.com/in/deepesh" target="_blank" rel="noopener noreferrer" className="text-muted-foreground/50 hover:text-foreground transition-colors duration-300" aria-label="LinkedIn">
          <Linkedin size={16} />
        </a>
        <a href="https://leetcode.com/deepesh" target="_blank" rel="noopener noreferrer" className="text-muted-foreground/50 hover:text-foreground transition-colors duration-300" aria-label="LeetCode">
          <Code2 size={16} />
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
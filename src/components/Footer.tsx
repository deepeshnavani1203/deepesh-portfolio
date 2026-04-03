import { Github, Linkedin, Mail, Code2 } from "lucide-react";

const Footer = () => {
  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/deepesh",
      glow: "hover:shadow-[0_0_15px_rgba(255,255,255,0.2)]",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://linkedin.com/in/deepesh",
      glow: "hover:shadow-[0_0_15px_rgba(14,165,233,0.4)]",
    },
    {
      icon: Code2,
      label: "LeetCode",
      href: "https://leetcode.com/deepesh",
      glow: "hover:shadow-[0_0_15px_rgba(245,158,11,0.4)]",
    },
    {
      icon: Mail,
      label: "Email",
      href: "mailto:deepesh@example.com",
      glow: "hover:shadow-[0_0_15px_rgba(239,68,68,0.4)]",
    },
  ];

  return (
    <footer className="dark:border-white/5 border-black/10 border-t py-12 px-6">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-4 order-1 sm:order-2">
          {socialLinks.map((link, idx) => (
            <a
              key={idx}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`p-2 rounded-full text-muted-foreground dark:hover:text-white hover:text-black hover:scale-110 transition-all duration-300 ${link.glow}`}
              aria-label={link.label}
            >
              <link.icon size={20} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;

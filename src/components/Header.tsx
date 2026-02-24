import { useState, useEffect } from "react";
import { Github, Linkedin, Mail, FileText, Code2, Moon, Sun } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "@/hooks/useTheme";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navIcons = [
    { 
      icon: FileText, 
      label: "Download Resume", 
      href: "/resume.pdf", 
      download: "Deepesh_Navani_Resume.pdf",
      glow: "hover:shadow-[0_0_15px_rgba(59,130,246,0.5)]" 
    },
    { 
      icon: Github, 
      label: "GitHub", 
      href: "https://github.com/deepeshnavani1203", 
      glow: "hover:shadow-[0_0_15px_rgba(255,255,255,0.2)]" 
    },
    { 
      icon: Mail, 
      label: "Gmail", 
      href: "mailto:deepeshnavani@gmail.com",
      glow: "hover:shadow-[0_0_15px_rgba(239,68,68,0.4)]" 
    },
    { 
      icon: Code2, 
      label: "LeetCode", 
      href: "https://leetcode.com/u/deepeshnavani123", 
      glow: "hover:shadow-[0_0_15px_rgba(245,158,11,0.4)]" 
    },
    { 
      icon: Linkedin, 
      label: "LinkedIn", 
      href: "https://linkedin.com/in/deepeshnavani1203", 
      glow: "hover:shadow-[0_0_15px_rgba(14,165,233,0.4)]" 
    },
  ];

  return (
    <header
      className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-transparent backdrop-blur-md border border-white/10 shadow-lg px-4 py-2 rounded-full" // bg-black/50
          : "bg-transparent scale-105"
      }`}
    >
      <div className="flex justify-center items-center gap-2">
        <TooltipProvider delayDuration={0}>
          <div className="flex items-center gap-1 md:gap-3">
            {navIcons.map((item, idx) => (
              <Tooltip key={idx}>
                <TooltipTrigger asChild>
                  <a
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    download={item.download}
                    className={`p-2 rounded-full text-muted-foreground hover:text-white hover:scale-125 transition-all duration-200 ${item.glow}`}
                  >
                    <item.icon size={18} />
                  </a>
                </TooltipTrigger>
                <TooltipContent side="bottom" className="bg-zinc-900 text-white border-zinc-800">
                  <p className="text-[10px] font-medium">{item.label}</p>
                </TooltipContent>
              </Tooltip>
            ))}

            <div className="w-px h-4 bg-white/10 mx-1" />

            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <button
                    onClick={toggleTheme}
                    className="p-2 rounded-full text-muted-foreground hover:text-white hover:scale-125 transition-all duration-200 hover:shadow-[0_0_15px_rgba(139,92,246,0.4)]"
                  >
                    <AnimatePresence mode="wait">
                      {theme === "dark" ? (
                        <motion.div
                          key="sun"
                          initial={{ opacity: 0, rotate: -45 }}
                          animate={{ opacity: 1, rotate: 0 }}
                          exit={{ opacity: 0, rotate: 45 }}
                          transition={{ duration: 0.2 }}
                        >
                          <Sun size={18} />
                        </motion.div>
                      ) : (
                        <motion.div
                          key="moon"
                          initial={{ opacity: 0, rotate: 45 }}
                          animate={{ opacity: 1, rotate: 0 }}
                          exit={{ opacity: 0, rotate: -45 }}
                          transition={{ duration: 0.2 }}
                        >
                          <Moon size={18} />
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </button>
                </TooltipTrigger>
                <TooltipContent side="bottom" className="bg-zinc-900 text-white border-zinc-800">
                  <p className="text-[10px] font-medium">Switch to {theme === "dark" ? "Light" : "Dark"} Mode</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        </TooltipProvider>
      </div>
    </header>
  );
};

export default Header;

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Bot, X, Send, Loader2, Sparkles } from "lucide-react";

// ── Types ─────────────────────────────────────────────────────────────────────

interface HistoryItem {
  role: "user" | "assistant";
  content: string;
}

interface Message {
  id: number;
  role: "user" | "assistant";
  content: string;
}

// ── Constants ─────────────────────────────────────────────────────────────────

const API_URL = `${
  import.meta.env.VITE_AI_API_URL ?? "https://deepesh-portfolio-zy8n.onrender.com"
}/chat`;

const WELCOME_MESSAGE: Message = {
  id: 0,
  role: "assistant",
  content:
    "Hi! I'm Deepesh's AI Portfolio Assistant. Ask me anything about his skills, projects, experience, education, or background.",
};

const SUGGESTIONS = [
  "Tell me about Deepesh",
  "What are his skills?",
  "Tell me about his projects",
  "His work experience",
  "What technologies does he use?",
];

let msgId = 1;
const nextId = () => msgId++;

// ── Panel open animation — stagger children ───────────────────────────────────

const panelVariants = {
  hidden: { opacity: 0, y: 32, scale: 0.94 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.32,
      ease: [0.22, 1, 0.36, 1],
      staggerChildren: 0.06,
      delayChildren: 0.05,
    },
  },
  exit: {
    opacity: 0,
    y: 20,
    scale: 0.95,
    transition: { duration: 0.2, ease: [0.4, 0, 1, 1] },
  },
};

const childVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.28, ease: [0.22, 1, 0.36, 1] } },
};

// ── Typing Dots ───────────────────────────────────────────────────────────────

const TypingDots = () => (
  <div className="flex items-center gap-[5px] py-0.5" aria-label="Thinking">
    {[0, 1, 2].map((i) => (
      <motion.span
        key={i}
        className="w-[5px] h-[5px] rounded-full bg-muted-foreground/60 block"
        animate={{ opacity: [0.25, 1, 0.25], y: [0, -3.5, 0] }}
        transition={{ duration: 1.1, repeat: Infinity, delay: i * 0.18, ease: "easeInOut" }}
      />
    ))}
  </div>
);

// ── Message Bubble ────────────────────────────────────────────────────────────

const Bubble = ({ msg, index }: { msg: Message; index: number }) => {
  const isUser = msg.role === "user";
  return (
    <motion.div
      initial={{ opacity: 0, y: 12, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.24, delay: index === 0 ? 0 : 0, ease: [0.23, 1, 0.32, 1] }}
      className={`flex w-full items-end gap-2 ${isUser ? "justify-end" : "justify-start"}`}
    >
      {/* Bot avatar — only on AI messages */}
      {!isUser && (
        <div className="w-6 h-6 rounded-full bg-primary/10 border border-primary/25 flex items-center justify-center flex-shrink-0 mb-[2px]">
          <Bot size={11} className="text-primary" />
        </div>
      )}

      <div
        className={`
          relative max-w-[76%] px-3.5 py-2.5 text-[13px] leading-relaxed break-words
          ${
            isUser
              ? "bg-primary text-primary-foreground rounded-[18px] rounded-br-[4px]"
              : "bg-card border border-border/60 text-foreground rounded-[18px] rounded-bl-[4px]"
          }
        `}
      >
        {msg.content}
      </div>
    </motion.div>
  );
};

// ── Main Component ────────────────────────────────────────────────────────────

const AIChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([WELCOME_MESSAGE]);
  const [history, setHistory] = useState<HistoryItem[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showSuggestions, setShowSuggestions] = useState(true);

  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const messagesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isLoading]);

  useEffect(() => {
    if (isOpen) setTimeout(() => inputRef.current?.focus(), 300);
  }, [isOpen]);

  const sendMessage = async (text: string) => {
    const trimmed = text.trim();
    if (!trimmed || isLoading) return;

    setShowSuggestions(false);
    setInput("");

    const userMsg: Message = { id: nextId(), role: "user", content: trimmed };
    setMessages((prev) => [...prev, userMsg]);
    setIsLoading(true);

    try {
      const res = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: trimmed, history }),
      });

      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const data = await res.json();
      const answer: string = data.answer ?? "Sorry, I didn't get a response.";

      const aiMsg: Message = { id: nextId(), role: "assistant", content: answer };
      setMessages((prev) => [...prev, aiMsg]);
      setHistory((prev) => [
        ...prev,
        { role: "user", content: trimmed },
        { role: "assistant", content: answer },
      ]);
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          id: nextId(),
          role: "assistant",
          content: "Sorry, I'm unable to connect right now. Please try again in a moment.",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage(input);
    }
  };

  return (
    <>
      {/* ── Floating Button ──────────────────────────────────────────────── */}
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            key="fab"
            initial={{ opacity: 0, scale: 0.6, y: 8 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.6, y: 8 }}
            transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
            onClick={() => setIsOpen(true)}
            aria-label="Open AI chat assistant"
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.91 }}
            className="
              fixed bottom-6 right-6 z-50
              flex items-center gap-2
              pl-4 pr-5 py-3 rounded-full
              bg-primary text-primary-foreground
              shadow-lg shadow-primary/25
              focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2
            "
          >
            <Bot size={17} />
            <span className="text-sm font-semibold tracking-wide">Ask AI</span>
          </motion.button>
        )}
      </AnimatePresence>

      {/* ── Chat Panel ───────────────────────────────────────────────────── */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="panel"
            variants={panelVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            role="dialog"
            aria-modal="true"
            aria-label="Deepesh's AI Assistant"
            className="
              fixed z-50
              /* mobile — full width, bottom sheet feel */
              bottom-0 left-0 right-0
              w-full max-h-[92dvh]
              /* sm and up — floating panel */
              sm:bottom-6 sm:right-6 sm:left-auto
              sm:w-[400px] sm:max-h-[620px]
              flex flex-col
              bg-background border border-border/70
              /* mobile — top corners only */
              rounded-t-3xl
              /* sm — all corners */
              sm:rounded-2xl
              shadow-2xl shadow-black/30
              overflow-hidden
            "
          >
            {/* ── Header ─────────────────────────────────────────────────── */}
            <motion.div
              variants={childVariants}
              className="relative flex items-center justify-between px-5 py-4 border-b border-border/50 bg-card flex-shrink-0 overflow-hidden"
            >
              {/* gradient tint */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/8 via-transparent to-transparent pointer-events-none" />

              {/* drag handle — mobile only */}
              <div className="absolute top-2 left-1/2 -translate-x-1/2 w-9 h-1 rounded-full bg-border sm:hidden" />

              <div className="flex items-center gap-3 relative mt-1 sm:mt-0">
                {/* Avatar */}
                <div className="relative">
                  <div className="w-9 h-9 rounded-full bg-primary/12 border border-primary/30 flex items-center justify-center shadow-sm">
                    <Bot size={16} className="text-primary" />
                  </div>
                  <motion.span
                    className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-emerald-500 border-2 border-card"
                    animate={{ scale: [1, 1.3, 1] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  />
                </div>

                <div>
                  <p className="text-sm font-semibold text-foreground leading-tight flex items-center gap-1.5">
                    Deepesh's AI Assistant
                    <Sparkles size={11} className="text-primary/70" />
                  </p>
                  <p className="text-[10px] text-muted-foreground/70 leading-tight">
                    Ask me anything about Deepesh
                  </p>
                </div>
              </div>

              <button
                onClick={() => setIsOpen(false)}
                aria-label="Close chat"
                className="
                  relative mt-1 sm:mt-0 w-7 h-7 rounded-full
                  flex items-center justify-center
                  text-muted-foreground hover:text-foreground hover:bg-secondary
                  transition-colors duration-150
                  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary
                "
              >
                <X size={14} />
              </button>
            </motion.div>

            {/* ── Messages ───────────────────────────────────────────────── */}
            <motion.div
              variants={childVariants}
              ref={messagesRef}
              className="flex-1 overflow-y-auto px-4 py-4 flex flex-col gap-3 min-h-0 scroll-smooth"
              role="log"
              aria-live="polite"
              aria-label="Chat messages"
            >
              {messages.map((msg, i) => (
                <Bubble key={msg.id} msg={msg} index={i} />
              ))}

              {/* Suggestion chips */}
              <AnimatePresence>
                {showSuggestions && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -4 }}
                    transition={{ delay: 0.25, duration: 0.3 }}
                    className="flex flex-wrap gap-1.5 mt-1 pl-8"
                  >
                    {SUGGESTIONS.map((s, i) => (
                      <motion.button
                        key={s}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.3 + i * 0.05 }}
                        onClick={() => sendMessage(s)}
                        className="
                          text-[11px] font-medium px-3 py-1.5
                          rounded-full border border-border/60
                          bg-secondary/30 text-muted-foreground
                          hover:bg-primary/10 hover:border-primary/40 hover:text-foreground
                          active:scale-95
                          transition-all duration-150
                          focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary
                        "
                      >
                        {s}
                      </motion.button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Typing indicator */}
              <AnimatePresence>
                {isLoading && (
                  <motion.div
                    initial={{ opacity: 0, y: 8, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 4, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className="flex items-end gap-2 justify-start"
                  >
                    <div className="w-6 h-6 rounded-full bg-primary/10 border border-primary/25 flex items-center justify-center flex-shrink-0 mb-[2px]">
                      <Bot size={11} className="text-primary" />
                    </div>
                    <div className="bg-card border border-border/60 rounded-[18px] rounded-bl-[4px] px-4 py-3">
                      <TypingDots />
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              <div ref={bottomRef} />
            </motion.div>

            {/* ── Input ──────────────────────────────────────────────────── */}
            <motion.div
              variants={childVariants}
              className="px-3 pb-4 pt-2.5 border-t border-border/50 bg-card/40 backdrop-blur-sm flex-shrink-0"
            >
              <div
                className="
                  flex items-center gap-2
                  bg-background border border-border/60
                  rounded-2xl px-4 py-2.5
                  focus-within:border-primary/50
                  focus-within:shadow-[0_0_0_3px_hsl(var(--primary)/0.1)]
                  transition-all duration-200
                "
              >
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  disabled={isLoading}
                  placeholder="Ask something about Deepesh..."
                  aria-label="Chat input"
                  className="
                    flex-1 bg-transparent text-sm text-foreground
                    placeholder:text-muted-foreground/45
                    outline-none border-none min-w-0
                    disabled:opacity-50
                  "
                />
                <motion.button
                  onClick={() => sendMessage(input)}
                  disabled={isLoading || !input.trim()}
                  aria-label="Send message"
                  whileTap={!isLoading && !!input.trim() ? { scale: 0.85 } : {}}
                  className="
                    w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0
                    bg-primary text-primary-foreground
                    disabled:opacity-30 disabled:cursor-not-allowed
                    hover:opacity-90 active:scale-90
                    transition-all duration-150
                    focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary
                  "
                >
                  {isLoading ? (
                    <Loader2 size={14} className="animate-spin" />
                  ) : (
                    <Send size={13} />
                  )}
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default AIChatbot;

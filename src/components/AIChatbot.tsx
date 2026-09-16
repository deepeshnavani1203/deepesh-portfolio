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
  import.meta.env.VITE_AI_API_URL ??
  "https://deepesh-portfolio-zy8n.onrender.com"
}/chat`;

const WELCOME_MESSAGE: Message = {
  id: 0,
  role: "assistant",
  content:
    "Hi! I'm Deepesh's AI Portfolio Assistant. Ask me anything about his skills, projects, experience, education, or background.",
};

const SUGGESTIONS = [
  { label: "Tell me about Deepesh" },
  { label: "What are his core skills?" },
  { label: "Tell me about his projects" },
  { label: "His work experience" },
  { label: "What technologies does he use?" },
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
      ease: "easeOut" as const,
      staggerChildren: 0.06,
      delayChildren: 0.05,
    },
  },
  exit: {
    opacity: 0,
    y: 20,
    scale: 0.95,
    transition: { duration: 0.2, ease: "easeIn" as const },
  },
};

const childVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.28, ease: "easeOut" as const },
  },
};

// ── Typing Dots ───────────────────────────────────────────────────────────────

const TypingDots = () => (
  <div className="flex items-center gap-[5px] py-0.5" aria-label="Thinking">
    {[0, 1, 2].map((i) => (
      <motion.span
        key={i}
        className="w-[5px] h-[5px] rounded-full bg-muted-foreground/60 block"
        animate={{ opacity: [0.25, 1, 0.25], y: [0, -3.5, 0] }}
        transition={{
          duration: 1.1,
          repeat: Infinity,
          delay: i * 0.18,
          ease: "easeInOut",
        }}
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
      transition={{
        duration: 0.24,
        delay: index === 0 ? 0 : 0,
        ease: [0.23, 1, 0.32, 1],
      }}
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
          relative max-w-[80%] px-4 py-2.5 text-[13px] leading-relaxed break-words shadow-sm
          ${
            isUser
              ? "bg-gradient-to-r from-blue-600 via-primary to-blue-500 text-white font-medium rounded-2xl rounded-br-[3px] shadow-blue-500/20"
              : "bg-card border border-border/70 text-foreground rounded-2xl rounded-bl-[3px]"
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

      const aiMsg: Message = {
        id: nextId(),
        role: "assistant",
        content: answer,
      };
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
          content:
            "Sorry, I'm unable to connect right now. Please try again in a moment.",
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
      {/* ── Floating Animated Circular Button ───────────────────────────── */}
      <AnimatePresence>
        {!isOpen && (
          <motion.div
            key="fab-container"
            className="fixed bottom-6 right-6 z-50 flex items-center gap-3 group"
            initial={{ opacity: 0, scale: 0.6, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.6, y: 12 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Tooltip on hover */}
            <motion.div
              initial={{ opacity: 0, x: 8 }}
              whileHover={{ opacity: 1, x: 0 }}
              className="
                hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-full
                bg-card/90 backdrop-blur-md border border-border/80 text-foreground
                text-xs font-semibold shadow-lg shadow-black/20 pointer-events-none
                opacity-0 group-hover:opacity-100 transition-all duration-200
              "
            >
              <Sparkles size={12} className="text-primary animate-pulse" />
              <span>Ask Deepesh AI</span>
            </motion.div>

            {/* Circular Floating Button */}
            <motion.button
              onClick={() => setIsOpen(true)}
              aria-label="Open AI chat assistant"
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.92 }}
              className="
                relative w-14 h-14 sm:w-[60px] sm:h-[60px] rounded-full
                flex items-center justify-center
                shadow-[0_6px_25px_rgba(0,102,255,0.45)] hover:shadow-[0_8px_32px_rgba(0,102,255,0.65)]
                transition-shadow duration-300
                focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2
              "
            >
              {/* Outer soft ambient glow pulse */}
              <div className="absolute -inset-1 rounded-full bg-blue-500/30 blur-md animate-pulse pointer-events-none" />

              {/* Main Circular Base (overflow-hidden to clip rotating inner shape) */}
              <div className="relative w-full h-full rounded-full overflow-hidden bg-[#0066FF] border border-white/25 flex items-center justify-center shadow-inner">
                {/* Continuous rotating inner circle/orbital shape */}
                <motion.div
                  className="absolute inset-0 w-full h-full pointer-events-none"
                  animate={{ rotate: 360 }}
                  transition={{
                    repeat: Infinity,
                    duration: 3.5,
                    ease: "linear",
                  }}
                >
                  {/* Moving inner circle / crescent creating the fluid continuous motion */}
                  <div className="absolute -top-1.5 -left-1.5 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#0047b8] opacity-85 blur-[0.5px]" />
                  <div className="absolute top-1 left-1 w-6 h-6 rounded-full bg-[#003da6] opacity-60 blur-sm" />
                </motion.div>

                {/* Subtle glass reflection overlay */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-b from-white/20 via-transparent to-black/10 pointer-events-none" />

                {/* White Chat Bubble Icon matching reference */}
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="relative z-10 w-6 h-6 sm:w-7 sm:h-7 text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.3)] transition-transform duration-200 group-hover:scale-105"
                >
                  <path d="M4 4.5A2.5 2.5 0 0 0 1.5 7v7A2.5 2.5 0 0 0 4 16.5h10.2l3.4 3.06A.75.75 0 0 0 19 19v-2.5h.5A2.5 2.5 0 0 0 22 14V7a2.5 2.5 0 0 0-2.5-2.5H4z" />
                </svg>
              </div>
            </motion.button>
          </motion.div>
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
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
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
                        key={s.label}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.3 + i * 0.05 }}
                        onClick={() => sendMessage(s.label)}
                        className="
                          text-[11px] font-medium px-3 py-1.5
                          rounded-full border border-border/70
                          bg-secondary/50 hover:bg-primary/15 hover:border-primary/40
                          text-muted-foreground hover:text-foreground
                          flex items-center gap-1.5 shadow-sm
                          active:scale-95 transition-all duration-150
                          focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary
                        "
                      >
                        <span>{s.label}</span>
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

            {/* ── Question Input Area ────────────────────────────────────── */}
            <motion.div
              variants={childVariants}
              className="p-3 sm:p-3.5 border-t border-border/60 bg-gradient-to-b from-card/60 via-card/90 to-card backdrop-blur-xl flex-shrink-0"
            >
              <div
                className="
                  relative flex items-center gap-2.5
                  bg-background/95 dark:bg-black/40 border border-border/80
                  rounded-2xl px-3 py-2
                  focus-within:border-primary/80 focus-within:ring-2 focus-within:ring-primary/20
                  shadow-sm transition-all duration-200
                "
              >
                {/* Leading Sparkle Indicator */}
                <div className="w-7 h-7 rounded-xl bg-primary/10 border border-primary/25 flex items-center justify-center flex-shrink-0">
                  <Sparkles size={13} className="text-primary" />
                </div>

                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  disabled={isLoading}
                  placeholder="Ask a question about Deepesh..."
                  aria-label="Ask a question about Deepesh"
                  className="
                    flex-1 bg-transparent text-[13px] text-foreground
                    placeholder:text-muted-foreground/50
                    outline-none border-none min-w-0
                    disabled:opacity-50
                  "
                />

                {/* Clear Button */}
                {input.trim().length > 0 && !isLoading && (
                  <button
                    type="button"
                    onClick={() => setInput("")}
                    className="text-muted-foreground hover:text-foreground p-1 rounded-full hover:bg-secondary transition-colors"
                    aria-label="Clear input"
                  >
                    <X size={13} />
                  </button>
                )}

                {/* Keyboard Helper Badge */}
                <span className="hidden sm:inline-block text-[10px] text-muted-foreground/50 font-mono px-1.5 py-0.5 rounded bg-secondary/80 border border-border/60 select-none">
                  ↵
                </span>

                {/* Send Button */}
                <motion.button
                  onClick={() => sendMessage(input)}
                  disabled={isLoading || !input.trim()}
                  aria-label="Send message"
                  whileHover={
                    !isLoading && !!input.trim() ? { scale: 1.06 } : {}
                  }
                  whileTap={!isLoading && !!input.trim() ? { scale: 0.9 } : {}}
                  className="
                    w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0
                    bg-gradient-to-tr from-blue-600 to-primary text-white
                    disabled:opacity-30 disabled:cursor-not-allowed
                    shadow-md shadow-primary/25 hover:shadow-primary/40
                    transition-all duration-150
                    focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary
                  "
                >
                  {isLoading ? (
                    <Loader2 size={14} className="animate-spin text-white" />
                  ) : (
                    <Send
                      size={13}
                      className="text-white translate-x-[0.5px]"
                    />
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

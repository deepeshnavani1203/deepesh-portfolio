import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Bot, X, Send, Loader2 } from "lucide-react";

// ── Types ────────────────────────────────────────────────────────────────────

interface HistoryItem {
  role: "user" | "assistant";
  content: string;
}

interface Message {
  id: number;
  role: "user" | "assistant";
  content: string;
}

// ── Constants ────────────────────────────────────────────────────────────────

const API_URL = `${import.meta.env.VITE_AI_API_URL ?? "http://127.0.0.1:8000"}/chat`;

const WELCOME_MESSAGE: Message = {
  id: 0,
  role: "assistant",
  content:
    "Hi! I'm Deepesh's AI Portfolio Assistant. Ask me anything about his skills, projects, experience, education, or background.",
};

const SUGGESTIONS = [
  "Tell me about Deepesh",
  "What are his technical skills?",
  "Tell me about his projects",
  "Tell me about his experience",
  "What technologies does he work with?",
];

// ── Helpers ──────────────────────────────────────────────────────────────────

let msgId = 1;
const nextId = () => msgId++;

// ── Sub-components ───────────────────────────────────────────────────────────

const TypingDots = () => (
  <div className="flex items-center gap-1 px-1 py-0.5" aria-label="Thinking">
    {[0, 1, 2].map((i) => (
      <motion.span
        key={i}
        className="w-1.5 h-1.5 rounded-full bg-muted-foreground/60 block"
        animate={{ opacity: [0.3, 1, 0.3], y: [0, -3, 0] }}
        transition={{ duration: 1, repeat: Infinity, delay: i * 0.18, ease: "easeInOut" }}
      />
    ))}
  </div>
);

interface BubbleProps {
  msg: Message;
}

const Bubble = ({ msg }: BubbleProps) => {
  const isUser = msg.role === "user";
  return (
    <motion.div
      initial={{ opacity: 0, y: 8, scale: 0.97 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.25, ease: [0.23, 1, 0.32, 1] }}
      className={`flex w-full ${isUser ? "justify-end" : "justify-start"}`}
    >
      <div
        className={`
          max-w-[82%] px-3.5 py-2.5 rounded-2xl text-sm leading-relaxed break-words
          ${isUser
            ? "bg-primary text-primary-foreground rounded-br-sm"
            : "bg-card border border-border text-foreground rounded-bl-sm"
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

  // Auto-scroll to latest message
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isLoading]);

  // Focus input when chat opens
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 150);
    }
  }, [isOpen]);

  const sendMessage = async (text: string) => {
    const trimmed = text.trim();
    if (!trimmed || isLoading) return;

    setShowSuggestions(false);
    setInput("");

    // Append user message
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

      // Update history for context
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
            "Sorry, I'm unable to connect to the AI assistant right now. Please try again in a moment.",
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

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      {/* ── Floating Button ─────────────────────────────────────────────── */}
      <motion.button
        onClick={() => setIsOpen(true)}
        aria-label="Open AI chat assistant"
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.94 }}
        className={`
          fixed bottom-6 right-6 z-50
          w-13 h-13 rounded-full
          bg-primary text-primary-foreground
          shadow-lg shadow-primary/30
          flex items-center justify-center
          transition-all duration-200
          focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2
          ${isOpen ? "opacity-0 pointer-events-none" : "opacity-100"}
        `}
        style={{ width: "52px", height: "52px" }}
      >
        <Bot size={22} />
      </motion.button>

      {/* ── Chat Panel ──────────────────────────────────────────────────── */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.96 }}
            transition={{ duration: 0.25, ease: [0.23, 1, 0.32, 1] }}
            role="dialog"
            aria-modal="true"
            aria-label="Deepesh's AI Assistant"
            className="
              fixed z-50
              bottom-6 right-6
              w-[calc(100vw-3rem)] sm:w-[380px] md:w-[400px]
              max-h-[85vh] sm:max-h-[580px]
              flex flex-col
              bg-background border border-border
              rounded-2xl shadow-2xl shadow-black/20
              overflow-hidden
            "
          >
            {/* Header */}
            <div className="flex items-center justify-between px-4 py-3.5 border-b border-border bg-card/80 backdrop-blur-sm flex-shrink-0">
              <div className="flex items-center gap-2.5">
                <div className="w-7 h-7 rounded-full bg-primary/15 flex items-center justify-center">
                  <Bot size={15} className="text-primary" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground leading-tight">
                    Deepesh's AI Assistant
                  </p>
                  <p className="text-[10px] text-muted-foreground leading-tight">
                    Ask me anything about Deepesh
                  </p>
                </div>
              </div>
              <button
                onClick={handleClose}
                aria-label="Close chat"
                className="w-7 h-7 rounded-full flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              >
                <X size={15} />
              </button>
            </div>

            {/* Messages */}
            <div
              className="flex-1 overflow-y-auto px-4 py-4 flex flex-col gap-3 min-h-0"
              role="log"
              aria-live="polite"
              aria-label="Chat messages"
            >
              {messages.map((msg) => (
                <Bubble key={msg.id} msg={msg} />
              ))}

              {/* Suggestion chips — shown only initially */}
              {showSuggestions && (
                <motion.div
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15, duration: 0.3 }}
                  className="flex flex-wrap gap-2 mt-1"
                >
                  {SUGGESTIONS.map((s) => (
                    <button
                      key={s}
                      onClick={() => sendMessage(s)}
                      className="
                        text-[11px] font-medium px-3 py-1.5
                        rounded-full border border-border
                        bg-card text-muted-foreground
                        hover:border-primary/50 hover:text-foreground
                        transition-all duration-150
                        focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary
                      "
                    >
                      {s}
                    </button>
                  ))}
                </motion.div>
              )}

              {/* Loading indicator */}
              {isLoading && (
                <motion.div
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex justify-start"
                >
                  <div className="bg-card border border-border rounded-2xl rounded-bl-sm px-3.5 py-2.5">
                    <TypingDots />
                  </div>
                </motion.div>
              )}

              <div ref={bottomRef} />
            </div>

            {/* Input */}
            <div className="px-3 py-3 border-t border-border bg-card/60 backdrop-blur-sm flex-shrink-0">
              <div className="flex items-center gap-2 bg-background rounded-xl border border-border px-3 py-2 focus-within:border-primary/50 transition-colors">
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
                    placeholder:text-muted-foreground/60
                    outline-none border-none
                    disabled:opacity-50
                  "
                />
                <button
                  onClick={() => sendMessage(input)}
                  disabled={isLoading || !input.trim()}
                  aria-label="Send message"
                  className="
                    w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0
                    bg-primary text-primary-foreground
                    disabled:opacity-40 disabled:cursor-not-allowed
                    hover:opacity-90 transition-opacity
                    focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary
                  "
                >
                  {isLoading ? (
                    <Loader2 size={13} className="animate-spin" />
                  ) : (
                    <Send size={13} />
                  )}
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default AIChatbot;

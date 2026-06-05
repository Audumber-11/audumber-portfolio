"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const responses = [
  "Hey! Thanks for checking out my portfolio! 🚀",
  "I build AI-powered SaaS products and immersive web experiences.",
  "Feel free to reach out if you'd like to collaborate!",
  "Check out my projects section to see what I've been building.",
  "I'm currently open for AI internships and freelance opportunities!",
  "Want to know more about my tech stack? I work with Next.js, Three.js, Python, and more.",
];

export function AIAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<
    { role: "bot" | "user"; text: string }[]
  >([
    {
      role: "bot",
      text: "Hi! I'm Audumber's AI assistant. Ask me anything! 👋",
    },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSend = () => {
    if (!input.trim() || isTyping) return;

    setMessages((prev) => [...prev, { role: "user", text: input }]);
    setInput("");
    setIsTyping(true);

    setTimeout(() => {
      const response = responses[Math.floor(Math.random() * responses.length)];
      setMessages((prev) => [...prev, { role: "bot", text: response }]);
      setIsTyping(false);
    }, 1000 + Math.random() * 500);
  };

  return (
    <>
      {/* Toggle button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-purple-500 shadow-lg shadow-primary/20 flex items-center justify-center hover:scale-105 active:scale-95 transition-all duration-200 group"
        aria-label="Toggle AI assistant"
      >
        {isOpen ? (
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        ) : (
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
            />
          </svg>
        )}
      </button>

      {/* Chat panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-24 right-6 z-50 w-[360px] max-w-[calc(100vw-2rem)] glass rounded-2xl overflow-hidden shadow-2xl border border-white/10"
          >
            {/* Header */}
            <div className="p-4 border-b border-white/10 flex items-center gap-3 bg-gradient-to-r from-primary/5 to-purple-500/5">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-primary to-purple-500 flex items-center justify-center">
                <span className="text-white text-xs font-bold">AI</span>
              </div>
              <div>
                <div className="text-sm font-medium">AI Assistant</div>
                <div className="text-xs text-emerald-400 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Online
                </div>
              </div>
            </div>

            {/* Messages */}
            <div className="h-[320px] overflow-y-auto p-4 space-y-3 scrollbar-thin">
              {messages.map((msg, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2 }}
                  className={`flex ${
                    msg.role === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  <div
                    className={`max-w-[85%] p-3 rounded-2xl text-sm ${
                      msg.role === "user"
                        ? "bg-primary/20 text-primary border border-primary/20"
                        : "bg-white/[0.03] text-foreground border border-white/5"
                    }`}
                  >
                    {msg.text}
                  </div>
                </motion.div>
              ))}
              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-white/[0.03] border border-white/5 rounded-2xl p-3">
                    <div className="flex gap-1.5">
                      <motion.div
                        animate={{ y: [0, -4, 0] }}
                        transition={{
                          duration: 0.6,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                        className="w-2 h-2 rounded-full bg-primary/40"
                      />
                      <motion.div
                        animate={{ y: [0, -4, 0] }}
                        transition={{
                          duration: 0.6,
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay: 0.15,
                        }}
                        className="w-2 h-2 rounded-full bg-primary/40"
                      />
                      <motion.div
                        animate={{ y: [0, -4, 0] }}
                        transition={{
                          duration: 0.6,
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay: 0.3,
                        }}
                        className="w-2 h-2 rounded-full bg-primary/40"
                      />
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-4 border-t border-white/10 bg-black/20">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleSend()}
                  placeholder="Ask me anything..."
                  className="flex-1 h-10 px-4 rounded-xl bg-white/[0.03] border border-white/10 text-sm placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all"
                  disabled={isTyping}
                />
                <button
                  onClick={handleSend}
                  disabled={isTyping || !input.trim()}
                  className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center hover:bg-primary/90 transition-colors shrink-0 disabled:opacity-50"
                >
                  <svg
                    className="w-4 h-4 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

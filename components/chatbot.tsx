"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Fragment, useEffect, useRef, useState } from "react";
import { FiDownload, FiMessageCircle, FiSend, FiX } from "react-icons/fi";
import { profile } from "@/lib/data";
import {
  botReplies,
  matchKeyword,
  recruiterMenu,
  visitorMenu,
  type QuickReply,
} from "@/lib/chatbot-data";

type Role = "recruiter" | "visitor" | null;

type ChatMessage = {
  id: string;
  from: "bot" | "user";
  text: string;
  showResumeLink?: boolean;
};

let idCounter = 0;
const nextId = () => `msg-${++idCounter}`;

function formatText(text: string) {
  return text.split("\n").map((line, i) => {
    const parts = line.split(/(\*\*[^*]+\*\*)/g);
    return (
      <Fragment key={i}>
        {i > 0 && <br />}
        {parts.map((part, j) =>
          part.startsWith("**") && part.endsWith("**") ? (
            <strong key={j}>{part.slice(2, -2)}</strong>
          ) : (
            <Fragment key={j}>{part}</Fragment>
          )
        )}
      </Fragment>
    );
  });
}

const roleMenu: QuickReply[] = [
  { label: "🧑‍💼 I'm a Recruiter", action: "role:recruiter" },
  { label: "👀 Just Visiting", action: "role:visitor" },
];

const mainMenuReply: QuickReply = { label: "🔁 Main Menu", action: "menu" };

export function Chatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [quickReplies, setQuickReplies] = useState<QuickReply[]>(roleMenu);
  const [role, setRole] = useState<Role>(null);
  const [typing, setTyping] = useState(false);
  const [input, setInput] = useState("");
  const scrollRef = useRef<HTMLDivElement>(null);

  function openChat() {
    setOpen(true);
    if (messages.length > 0) return;
    setTyping(true);
    setTimeout(() => {
      setTyping(false);
      setMessages([
        {
          id: nextId(),
          from: "bot",
          text: `Hi! I'm Sunil's portfolio assistant 👋 How can I help — are you a recruiter, or just visiting?`,
        },
      ]);
      setQuickReplies(roleMenu);
    }, 500);
  }

  useEffect(() => {
    scrollRef.current?.scrollTo({
      top: scrollRef.current.scrollHeight,
      behavior: "smooth",
    });
  }, [messages, typing, quickReplies]);

  function pushUser(text: string) {
    setMessages((prev) => [...prev, { id: nextId(), from: "user", text }]);
  }

  function pushBot(text: string, replies: QuickReply[], showResumeLink = false) {
    setTyping(true);
    setQuickReplies([]);
    setTimeout(() => {
      setTyping(false);
      setMessages((prev) => [
        ...prev,
        { id: nextId(), from: "bot", text, showResumeLink },
      ]);
      setQuickReplies(replies);
    }, 450);
  }

  function menuFor(currentRole: Role) {
    return currentRole === "recruiter" ? recruiterMenu : visitorMenu;
  }

  function handleAction(action: string, label: string) {
    pushUser(label);

    if (action === "role:recruiter" || action === "role:visitor") {
      const chosen: Role = action === "role:recruiter" ? "recruiter" : "visitor";
      setRole(chosen);
      const intro =
        chosen === "recruiter"
          ? "Great — happy to help you evaluate fit. Here's what I can share:"
          : "Nice to have you here! Feel free to explore:";
      pushBot(intro, [...menuFor(chosen), mainMenuReply]);
      return;
    }

    if (action === "menu") {
      if (!role) {
        pushBot("Sure — are you a recruiter, or just visiting?", roleMenu);
      } else {
        pushBot("Sure — what would you like to know?", [
          ...menuFor(role),
          mainMenuReply,
        ]);
      }
      return;
    }

    const reply = botReplies[action];
    if (reply) {
      pushBot(reply(), [...menuFor(role), mainMenuReply], action === "resume");
      return;
    }

    pushBot("Here's what I can help with:", [...roleMenu, mainMenuReply]);
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const text = input.trim();
    if (!text) return;
    setInput("");
    pushUser(text);

    const matched = matchKeyword(text);
    if (matched && botReplies[matched]) {
      pushBot(botReplies[matched](), [...menuFor(role), mainMenuReply], matched === "resume");
    } else {
      pushBot(
        "I'm not totally sure about that one — but here's what I can help with:",
        role ? [...menuFor(role), mainMenuReply] : roleMenu
      );
    }
  }

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-3">
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="flex h-[28rem] w-[22rem] max-w-[90vw] flex-col overflow-hidden rounded-2xl border border-border bg-surface shadow-2xl"
          >
            <div className="flex items-center justify-between bg-gradient-to-br from-primary to-accent px-4 py-3 text-white">
              <div>
                <p className="text-sm font-semibold">Portfolio Assistant</p>
                <p className="text-xs text-white/80">
                  Ask about {profile.name.split(" ")[0]}&apos;s work
                </p>
              </div>
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close chat"
                className="flex h-8 w-8 items-center justify-center rounded-full transition-colors hover:bg-white/20 cursor-pointer"
              >
                <FiX size={16} />
              </button>
            </div>

            <div
              ref={scrollRef}
              className="flex-1 space-y-3 overflow-y-auto px-4 py-4"
            >
              {messages.map((m) => (
                <motion.div
                  key={m.id}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2 }}
                  className={`flex ${m.from === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[85%] rounded-2xl px-3.5 py-2 text-sm leading-relaxed ${
                      m.from === "user"
                        ? "rounded-br-sm bg-primary text-white"
                        : "rounded-bl-sm bg-surface-hover text-foreground"
                    }`}
                  >
                    {formatText(m.text)}
                    {m.showResumeLink && (
                      <a
                        href={profile.resumeUrl}
                        download
                        className="mt-2 inline-flex items-center gap-1.5 rounded-full bg-primary px-3 py-1.5 text-xs font-semibold text-white transition-transform hover:scale-105"
                      >
                        <FiDownload size={12} /> Download Resume
                      </a>
                    )}
                  </div>
                </motion.div>
              ))}

              {typing && (
                <div className="flex justify-start">
                  <div className="flex items-center gap-1 rounded-2xl rounded-bl-sm bg-surface-hover px-4 py-3">
                    {[0, 1, 2].map((i) => (
                      <motion.span
                        key={i}
                        className="h-1.5 w-1.5 rounded-full bg-muted"
                        animate={{ opacity: [0.3, 1, 0.3] }}
                        transition={{
                          duration: 1,
                          repeat: Infinity,
                          delay: i * 0.15,
                        }}
                      />
                    ))}
                  </div>
                </div>
              )}

              {!typing && quickReplies.length > 0 && (
                <div className="flex flex-wrap gap-2 pt-1">
                  {quickReplies.map((qr) => (
                    <motion.button
                      key={qr.action}
                      type="button"
                      whileHover={{ scale: 1.04 }}
                      whileTap={{ scale: 0.96 }}
                      onClick={() => handleAction(qr.action, qr.label)}
                      className="rounded-full border border-primary/40 bg-primary/5 px-3 py-1.5 text-xs font-medium text-primary transition-colors hover:bg-primary/10 cursor-pointer"
                    >
                      {qr.label}
                    </motion.button>
                  ))}
                </div>
              )}
            </div>

            <form
              onSubmit={handleSubmit}
              className="flex items-center gap-2 border-t border-border p-3"
            >
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type a question…"
                className="flex-1 rounded-full border border-border bg-background px-3.5 py-2 text-sm outline-none focus:border-primary"
              />
              <motion.button
                type="submit"
                whileTap={{ scale: 0.9 }}
                aria-label="Send"
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary text-white cursor-pointer"
              >
                <FiSend size={14} />
              </motion.button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        type="button"
        onClick={() => (open ? setOpen(false) : openChat())}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.92 }}
        aria-label={open ? "Close chat assistant" : "Open chat assistant"}
        className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-primary to-accent text-white shadow-xl cursor-pointer"
      >
        <AnimatePresence mode="wait" initial={false}>
          <motion.span
            key={open ? "x" : "chat"}
            initial={{ opacity: 0, rotate: -45, scale: 0.6 }}
            animate={{ opacity: 1, rotate: 0, scale: 1 }}
            exit={{ opacity: 0, rotate: 45, scale: 0.6 }}
            transition={{ duration: 0.2 }}
          >
            {open ? <FiX size={22} /> : <FiMessageCircle size={22} />}
          </motion.span>
        </AnimatePresence>
      </motion.button>
    </div>
  );
}

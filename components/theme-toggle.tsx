"use client";

import { AnimatePresence, motion } from "framer-motion";
import { FiMoon, FiSun } from "react-icons/fi";
import { useTheme } from "./theme-provider";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <motion.button
      type="button"
      onClick={toggleTheme}
      whileTap={{ scale: 0.85, rotate: -15 }}
      whileHover={{ scale: 1.08 }}
      aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
      className="relative flex h-10 w-10 items-center justify-center rounded-full border border-border bg-surface text-foreground shadow-sm cursor-pointer"
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={isDark ? "moon" : "sun"}
          initial={{ opacity: 0, rotate: -90, scale: 0.5 }}
          animate={{ opacity: 1, rotate: 0, scale: 1 }}
          exit={{ opacity: 0, rotate: 90, scale: 0.5 }}
          transition={{ duration: 0.25 }}
          className="flex"
        >
          {isDark ? <FiMoon size={18} /> : <FiSun size={18} />}
        </motion.span>
      </AnimatePresence>
    </motion.button>
  );
}

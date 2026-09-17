"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { profile } from "@/lib/data";
import { ThemeToggle } from "./theme-toggle";

const links = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#accomplishments", label: "Accomplishments" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
];

export function NavBar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-surface/80 backdrop-blur-md">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-3">
        <a href="#top" className="text-sm font-bold tracking-tight">
          {profile.name}
        </a>

        <div className="hidden items-center gap-6 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted transition-colors hover:text-primary"
            >
              {link.label}
            </a>
          ))}
          <ThemeToggle />
        </div>

        <div className="flex items-center gap-3 md:hidden">
          <ThemeToggle />
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-border cursor-pointer"
          >
            {open ? <FiX size={18} /> : <FiMenu size={18} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="overflow-hidden border-t border-border md:hidden"
          >
            <div className="flex flex-col gap-1 px-6 py-3">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-2 py-2 text-sm font-medium text-muted transition-colors hover:bg-surface-hover hover:text-primary"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

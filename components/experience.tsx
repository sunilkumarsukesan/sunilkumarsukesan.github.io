"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { FiChevronDown } from "react-icons/fi";
import { experience } from "@/lib/data";
import { Reveal } from "./reveal";
import { SectionHeading } from "./section-heading";

export function Experience() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="experience" className="mx-auto max-w-5xl px-6 py-16">
      <Reveal>
        <SectionHeading eyebrow="Career Path" title="Work Experience" />
      </Reveal>

      <div className="flex flex-col gap-4">
        {experience.map((entry, index) => {
          const isOpen = openIndex === index;
          return (
            <Reveal key={`${entry.company}-${entry.period}`} delay={Math.min(index * 0.05, 0.3)}>
              <div className="overflow-hidden rounded-2xl border border-border bg-surface shadow-sm">
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  aria-expanded={isOpen}
                  className="flex w-full cursor-pointer items-center gap-4 px-5 py-4 text-left transition-colors hover:bg-surface-hover"
                >
                  {entry.logo && (
                    <span className="company-logo-wrap flex h-12 w-12 shrink-0 items-center justify-center rounded-xl p-2">
                      <Image
                        src={entry.logo}
                        alt={entry.logoAlt ?? entry.company}
                        width={40}
                        height={40}
                        className="h-full w-full object-contain"
                      />
                    </span>
                  )}

                  <span className="flex-1">
                    <span className="block font-semibold">{entry.role}</span>
                    <span className="block text-sm text-muted">
                      {entry.company} · {entry.location}
                    </span>
                  </span>

                  <span className="hidden shrink-0 text-sm font-medium text-muted sm:block">
                    {entry.period}
                  </span>

                  <motion.span
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.25 }}
                    className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary"
                  >
                    <FiChevronDown size={16} />
                  </motion.span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="border-t border-border px-5 py-4">
                        <p className="mb-3 text-sm font-semibold text-primary sm:hidden">
                          {entry.period}
                        </p>
                        <ul className="list-disc space-y-2 pl-5 text-sm leading-relaxed text-muted marker:text-primary">
                          {entry.highlights.map((point, i) => (
                            <li key={i}>{point}</li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}

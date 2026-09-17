"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  FiDownload,
  FiGithub,
  FiLinkedin,
  FiMail,
  FiMapPin,
  FiPhone,
} from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { profile } from "@/lib/data";

const contactLinks = [
  {
    icon: FiPhone,
    label: profile.phone,
    href: `tel:${profile.phone.replace(/[^+\d]/g, "")}`,
  },
  {
    icon: FaWhatsapp,
    label: profile.whatsapp,
    href: `https://wa.me/${profile.whatsapp.replace(/[^\d]/g, "")}`,
  },
  { icon: FiMail, label: profile.email, href: `mailto:${profile.email}` },
  { icon: FiMapPin, label: profile.location, href: undefined },
];

const socialLinks = [
  { icon: FiGithub, label: "GitHub", href: profile.github },
  { icon: FiLinkedin, label: "LinkedIn", href: profile.linkedin },
];

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-gradient-to-br from-primary to-accent text-white"
    >
      <div className="pointer-events-none absolute inset-0 opacity-20 [background-image:radial-gradient(circle_at_20%_20%,white,transparent_35%),radial-gradient(circle_at_80%_0%,white,transparent_30%)]" />

      <div className="relative mx-auto flex max-w-5xl flex-col-reverse items-center gap-10 px-6 py-16 sm:py-20 md:flex-row md:items-center md:justify-between">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-xl text-center md:text-left"
        >
          <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
            {profile.name}
          </h1>
          <p className="mt-2 text-lg font-medium text-white/90">
            {profile.title}
          </p>
          <p className="text-white/75">{profile.tagline}</p>

          <div className="mt-5 flex flex-col gap-2 text-sm text-white/90 sm:flex-row sm:flex-wrap sm:justify-center md:justify-start">
            {contactLinks.map(({ icon: Icon, label, href }) =>
              href ? (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noreferrer" : undefined}
                  className="inline-flex items-center gap-1.5 transition-colors hover:text-white"
                >
                  <Icon size={14} /> {label}
                </a>
              ) : (
                <span key={label} className="inline-flex items-center gap-1.5">
                  <Icon size={14} /> {label}
                </span>
              )
            )}
          </div>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-3 md:justify-start">
            {socialLinks.map(({ icon: Icon, label, href }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                whileHover={{ scale: 1.06 }}
                whileTap={{ scale: 0.94 }}
                className="inline-flex items-center gap-2 rounded-full border border-white/40 px-4 py-2 text-sm font-semibold backdrop-blur-sm transition-colors hover:bg-white/10"
              >
                <Icon size={16} /> {label}
              </motion.a>
            ))}
            <motion.a
              href={profile.resumeUrl}
              download
              whileHover={{ scale: 1.06 }}
              whileTap={{ scale: 0.94 }}
              className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-bold text-primary shadow-lg transition-colors hover:bg-white/90"
            >
              <FiDownload size={16} /> Download Resume
            </motion.a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative h-40 w-40 shrink-0 overflow-hidden rounded-full border-4 border-white/70 shadow-2xl sm:h-48 sm:w-48"
        >
          <Image
            src={profile.photo}
            alt={profile.name}
            fill
            sizes="192px"
            className="object-cover"
            priority
          />
        </motion.div>
      </div>
    </section>
  );
}

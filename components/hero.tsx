"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import type { IconType } from "react-icons";
import { FiDownload, FiMail, FiMapPin, FiPhone } from "react-icons/fi";
import { FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { SiGithub } from "react-icons/si";
import { profile } from "@/lib/data";

const contactLinks = [
  {
    icon: FiPhone,
    color: "#22C55E",
    label: profile.phone,
    href: `tel:${profile.phone.replace(/[^+\d]/g, "")}`,
  },
  {
    icon: FaWhatsapp,
    color: "#25D366",
    label: profile.whatsapp,
    href: `https://wa.me/${profile.whatsapp.replace(/[^\d]/g, "")}`,
  },
  {
    icon: FiMail,
    color: "#0078D4",
    label: profile.email,
    href: `mailto:${profile.email}`,
  },
  {
    icon: FiMapPin,
    color: "#EA4335",
    label: profile.location,
    href: undefined,
  },
];

const socialLinks = [
  { icon: SiGithub, color: "#181717", label: "GitHub", href: profile.github },
  {
    icon: FaLinkedin,
    color: "#0A66C2",
    label: "LinkedIn",
    href: profile.linkedin,
  },
];

function IconBadge({ icon: Icon, color }: { icon: IconType; color: string }) {
  return (
    <span
      className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white shadow-sm"
      style={{ color }}
    >
      <Icon size={13} />
    </span>
  );
}

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

          <div className="mt-5 flex flex-col gap-2.5 text-sm text-white/90 sm:flex-row sm:flex-wrap sm:justify-center md:justify-start">
            {contactLinks.map(({ icon, color, label, href }) =>
              href ? (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noreferrer" : undefined}
                  className="inline-flex items-center gap-2 transition-opacity hover:opacity-80"
                >
                  <IconBadge icon={icon} color={color} /> {label}
                </a>
              ) : (
                <span key={label} className="inline-flex items-center gap-2">
                  <IconBadge icon={icon} color={color} /> {label}
                </span>
              )
            )}
          </div>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-3 md:justify-start">
            {socialLinks.map(({ icon, color, label, href }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                whileHover={{ scale: 1.06 }}
                whileTap={{ scale: 0.94 }}
                className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/10 py-1.5 pl-1.5 pr-4 text-sm font-semibold backdrop-blur-sm transition-colors hover:bg-white/20"
              >
                <IconBadge icon={icon} color={color} /> {label}
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

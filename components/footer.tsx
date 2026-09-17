import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import { profile } from "@/lib/data";
import { Reveal } from "./reveal";

export function Footer() {
  return (
    <footer
      id="contact"
      className="border-t border-border bg-gradient-to-br from-primary to-accent py-14 text-white"
    >
      <div className="mx-auto max-w-5xl px-6 text-center">
        <Reveal>
          <h2 className="text-2xl font-bold">Let&apos;s connect</h2>
          <p className="mx-auto mt-2 max-w-xl text-white/80">
            Open to conversations on QA leadership, test automation strategy,
            and GenAI-driven quality engineering.
          </p>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-bold text-primary shadow-lg transition-transform hover:scale-105"
            >
              <FiMail size={16} /> Email Me
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/50 px-5 py-2.5 text-sm font-semibold transition-transform hover:scale-105 hover:bg-white/10"
            >
              <FiLinkedin size={16} /> LinkedIn
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/50 px-5 py-2.5 text-sm font-semibold transition-transform hover:scale-105 hover:bg-white/10"
            >
              <FiGithub size={16} /> GitHub
            </a>
          </div>

          <p className="mt-10 text-sm text-white/70">
            © {new Date().getFullYear()} {profile.name} · Nationality: Indian
            · Resident Country: Malaysia
          </p>
        </Reveal>
      </div>
    </footer>
  );
}

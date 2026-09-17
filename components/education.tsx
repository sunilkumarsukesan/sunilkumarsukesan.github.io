import { FiBookOpen } from "react-icons/fi";
import { education } from "@/lib/data";
import { Reveal } from "./reveal";
import { SectionHeading } from "./section-heading";

export function Education() {
  return (
    <section id="education" className="mx-auto max-w-5xl px-6 py-16">
      <Reveal>
        <SectionHeading eyebrow="Academics" title="Education" />
        <div className="flex items-start gap-4 rounded-2xl border border-border bg-surface p-6 shadow-sm">
          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
            <FiBookOpen size={20} />
          </span>
          <div>
            <p className="text-sm font-semibold text-primary">{education.year}</p>
            <p className="mt-1 font-semibold">{education.degree}</p>
            <p className="mt-1 text-sm text-muted">{education.school}</p>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

import { FiCode, FiCpu, FiLayers, FiServer } from "react-icons/fi";
import type { IconType } from "react-icons";
import { skillGroups } from "@/lib/data";
import { Reveal } from "./reveal";
import { SectionHeading } from "./section-heading";

const categoryIcons: Record<string, IconType> = {
  "GenAI & Evaluation": FiCpu,
  "Automation Frameworks": FiLayers,
  Languages: FiCode,
  "DevOps & Cloud": FiServer,
};

export function Skills() {
  return (
    <section id="skills" className="bg-surface/50 py-16">
      <div className="mx-auto max-w-5xl px-6">
        <Reveal>
          <SectionHeading eyebrow="Capabilities" title="Technical Skills" />
        </Reveal>

        <div className="grid gap-6 sm:grid-cols-2">
          {skillGroups.map((group, i) => {
            const Icon = categoryIcons[group.category] ?? FiCode;
            return (
              <Reveal key={group.category} delay={i * 0.08}>
                <div className="h-full rounded-2xl border border-border bg-surface p-6 shadow-sm">
                  <div className="mb-4 flex items-center gap-3">
                    <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <Icon size={18} />
                    </span>
                    <h3 className="font-semibold">{group.category}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {group.skills.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-full border border-border bg-background px-3 py-1 text-sm text-muted transition-colors hover:border-primary hover:text-primary"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

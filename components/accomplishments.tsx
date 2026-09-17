import { FiAward } from "react-icons/fi";
import { accomplishments } from "@/lib/data";
import { Reveal } from "./reveal";
import { SectionHeading } from "./section-heading";

export function Accomplishments() {
  return (
    <section id="accomplishments" className="bg-surface/50 py-16">
      <div className="mx-auto max-w-5xl px-6">
        <Reveal>
          <SectionHeading eyebrow="Recognition" title="Accomplishments" />
        </Reveal>

        <div className="grid gap-4 sm:grid-cols-2">
          {accomplishments.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.06}>
              <div className="flex h-full gap-4 rounded-2xl border border-border bg-surface p-5 shadow-sm transition-transform hover:-translate-y-1">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent/15 text-accent">
                  <FiAward size={18} />
                </span>
                <div>
                  <p className="font-semibold">{item.title}</p>
                  <p className="mt-1 text-sm text-muted">{item.description}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

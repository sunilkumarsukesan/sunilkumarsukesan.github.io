import { profile } from "@/lib/data";
import { Reveal } from "./reveal";
import { SectionHeading } from "./section-heading";

export function About() {
  return (
    <section id="about" className="mx-auto max-w-5xl px-6 py-16">
      <Reveal>
        <SectionHeading eyebrow="Introduction" title="About Me" />
        <p className="max-w-3xl text-lg leading-relaxed text-muted">
          {profile.about}
        </p>
      </Reveal>
    </section>
  );
}

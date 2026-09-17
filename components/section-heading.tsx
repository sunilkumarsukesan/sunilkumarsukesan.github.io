export function SectionHeading({
  eyebrow,
  title,
}: {
  eyebrow: string;
  title: string;
}) {
  return (
    <div className="mb-10">
      <p className="text-sm font-semibold uppercase tracking-widest text-primary">
        {eyebrow}
      </p>
      <h2 className="mt-2 text-2xl font-bold sm:text-3xl">{title}</h2>
      <span className="mt-4 block h-1 w-14 rounded-full bg-gradient-to-r from-primary to-accent" />
    </div>
  );
}

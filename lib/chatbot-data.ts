import { accomplishments, education, experience, profile, skillGroups } from "./data";

export type QuickReply = {
  label: string;
  action: string;
};

export const recruiterMenu: QuickReply[] = [
  { label: "📄 Resume", action: "resume" },
  { label: "💼 Experience", action: "experience" },
  { label: "🛠️ Skills", action: "skills" },
  { label: "🏆 Accomplishments", action: "accomplishments" },
  { label: "📬 Contact", action: "contact" },
];

export const visitorMenu: QuickReply[] = [
  { label: "👋 About Sunil", action: "about" },
  { label: "💻 GitHub Projects", action: "projects" },
  { label: "🛠️ Skills", action: "skills" },
  { label: "🎓 Education", action: "education" },
  { label: "📬 Contact", action: "contact" },
];

export function latestRole() {
  return experience[0];
}

export const botReplies: Record<string, () => string> = {
  about: () => profile.about,
  resume: () =>
    `You can grab it right here — I've dropped a download link below. It covers all ${experience.length} roles across ${profile.tagline.includes("Manager") ? "13 years" : "his career"} in QA & test automation leadership.`,
  experience: () => {
    const latest = latestRole();
    return `Currently: **${latest.role}** at **${latest.company}** (${latest.period}). Before that, he led QA automation at EY, Citicorp, KPMG, Accenture, and Barclays — 13 years total, spanning web, mobile, API, and now GenAI test evaluation. Full timeline is in the Experience section below.`;
  },
  skills: () =>
    skillGroups
      .map((g) => `**${g.category}:** ${g.skills.join(", ")}`)
      .join("\n\n"),
  accomplishments: () =>
    accomplishments.map((a) => `🏅 ${a.title}`).join("\n"),
  education: () =>
    `${education.degree}\n${education.school} (${education.year})`,
  projects: () =>
    `Sunil's open-source work lives on GitHub — the Repositories section on this page pulls it in live. You can also browse directly.`,
  contact: () =>
    `Best ways to reach him:\n📧 ${profile.email}\n📱 ${profile.phone}\n💬 WhatsApp: ${profile.whatsapp}\n🔗 LinkedIn & GitHub links are below.`,
};

export function matchKeyword(text: string): string | null {
  const t = text.toLowerCase();
  if (/resume|cv/.test(t)) return "resume";
  if (/experience|work|job|role|career/.test(t)) return "experience";
  if (/skill|tech|stack|tool/.test(t)) return "skills";
  if (/accomplish|award|achieve/.test(t)) return "accomplishments";
  if (/education|degree|college|university/.test(t)) return "education";
  if (/project|github|repo/.test(t)) return "projects";
  if (/contact|email|phone|reach|linkedin|whatsapp/.test(t)) return "contact";
  if (/about|who|introduc/.test(t)) return "about";
  return null;
}

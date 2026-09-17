export const profile = {
  name: "Sunil Kumar Sukesan",
  title: "QA Automation Leader — GenAI & Test Evaluation",
  tagline: "Test Automation Manager, PwC Malaysia",
  location: "Kuala Lumpur, Malaysia",
  phone: "+60-173520140",
  whatsapp: "+91-9600022545",
  email: "sunilkumar.sukesan@gmail.com",
  github: "https://github.com/sunilkumarsukesan",
  githubUser: "sunilkumarsukesan",
  linkedin: "https://www.linkedin.com/in/sunilkumar-sukesan/",
  resumeUrl: "/docs/Sunil_Kumar_Sukesan_Resume.pdf",
  photo: "/images/profile.png",
  about:
    "Test Automation Manager with 13 years' experience in QA leadership and automation framework design across web, mobile, and API platforms, with growing specialization in GenAI Test Evaluation and LLM Agent Assurance. Hands-on with GenAI-powered QA tooling (RAG, MCP), Salesforce data migration, and process automation to improve delivery efficiency.",
};

export const featuredRepos = [
  "ai-voice-agent",
  "recall-checker",
  "ExamSmith",
  "SeleniumPWMigration",
  "DockerValidation",
  "LinearRegression",
];

export type SkillGroup = {
  category: string;
  skills: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    category: "GenAI & Evaluation",
    skills: ["GenAI", "RAG", "MCP", "DeepEval", "LangChain", "Machine Learning"],
  },
  {
    category: "Automation Frameworks",
    skills: ["Selenium", "WebdriverIO", "Playwright", "Cucumber (BDD)"],
  },
  {
    category: "Languages",
    skills: ["JavaScript", "TypeScript", "Python", "Java", "Excel VBA"],
  },
  {
    category: "DevOps & Cloud",
    skills: ["Azure DevOps", "Jenkins", "Docker", "Git"],
  },
];

export type ExperienceEntry = {
  role: string;
  company: string;
  location: string;
  period: string;
  logo?: string;
  logoAlt?: string;
  highlights: string[];
};

export const experience: ExperienceEntry[] = [
  {
    role: "Test Manager",
    company: "PwC Malaysia",
    location: "Kuala Lumpur, Malaysia",
    period: "Jan 2025 – Present",
    logo: "/images/pwc.png",
    logoAlt: "PwC logo",
    highlights: [
      "Instrumented a LangChain-based agent for evaluation using DeepEval, implementing trace-level metrics via CallbackHandler and golden-dataset-driven test loops; built a custom local HTML reporting tool (zero external dependencies) for score visualization.",
      "Led design and implementation of scalable, AI-enabled test automation frameworks for Salesforce-based applications across Web and API testing layers, extending coverage to Twilio/AWS Connect across multiple client engagements.",
      "Built AI-powered QA tooling — test case generators, script generators, and defect classification accelerators using RAG and MCP, integrated with Azure DevOps — cutting manual effort by 80%.",
      "Built a WebDriverIO + TypeScript automation framework from scratch with encrypted config management and failed-test rerun support, cutting manual regression effort by 70% and flaky execution by 60%+.",
      "Supported BBCRM-to-Salesforce data migration through data validation, field mapping verification, and reconciliation testing.",
      "Drove AI innovation initiatives across the QA team, applying black-box test-design principles to LLM agent evaluation; represented the team at PwC's AI Conference showcasing GenAI-driven automation.",
    ],
  },
  {
    role: "Test Manager",
    company: "Ernst & Young GDS",
    location: "Chennai, India",
    period: "Sep 2024 – Nov 2024",
    logo: "/images/ey.png",
    logoAlt: "EY logo",
    highlights: [
      "Defined testing strategies and QA benchmarks to ensure consistent quality standards, and implemented automated test processes and tools to improve efficiency.",
      "Built automated scripts to eliminate repetitive testing tasks and accelerate validation cycles, and documented test procedures to enhance reusability for future testing.",
    ],
  },
  {
    role: "Assistant Vice President – Core QA Automation",
    company: "Citicorp Services India Pvt Ltd",
    location: "Chennai, India",
    period: "Jun 2023 – Sep 2024",
    logo: "/images/citi.svg",
    logoAlt: "Citi logo",
    highlights: [
      "Maintained and enhanced the automation framework, refactoring redundant, tightly coupled code, and managed Jira tasks for the team, reviewing code for framework integration.",
      "Implemented Kafka stream handling (static & dynamic) for event-driven validations, and upgraded the E2E automation pack to extract and validate SWIFT messages against enriched Kafka payloads.",
      "Developed a Python utility to convert XML data to Excel, and explored the Python Robot Framework to enable non-technical users to automate functional test cases.",
      "Automated 20+ regression test journeys during peak holiday load (Dec '23), and built a Maven-based Java utility to upload test evidence to Zephyr with a single click, cutting manual effort by ~80%.",
    ],
  },
  {
    role: "Test Automation – Assistant Manager",
    company: "KPMG",
    location: "Bengaluru, India",
    period: "Dec 2022 – Jun 2023",
    logo: "/images/kpmg.svg",
    logoAlt: "KPMG logo",
    highlights: [
      "Created and maintained Azure CI/CD pipelines for scalable automation execution, and integrated Azure Key Vault for secure credential management, ensuring security and compliance adherence.",
      "Led two major projects end-to-end from a QA standpoint, including story estimation, task planning, and sprint management within each PI, assigning tasks and monitoring team progress for timely delivery.",
      "Cleared automation backlogs and provided regular progress updates to stakeholders, while updating the test framework to support evolving requirements.",
    ],
  },
  {
    role: "Test Automation Architect",
    company: "Accenture (NatWest Client)",
    location: "Chennai, India",
    period: "Sep 2021 – Nov 2022",
    logo: "/images/accenture.svg",
    logoAlt: "Accenture logo",
    highlights: [
      "Updated the automation framework to align with evolving business and technical requirements, and developed custom Groovy functions for dynamic test scenarios, including response header capture and string comparisons.",
      "Tested newly developed API services, validating integration with backend systems, and conducted feasibility analysis for new features in core banking mobile applications.",
      "Automated manual process flows using Excel VBA, improving team efficiency and reducing errors.",
      "Delivered KT and training sessions on the automation framework, onboarding new team members, and shared weekly automation updates with key stakeholders.",
    ],
  },
  {
    role: "Automation Test Lead",
    company: "Barclays Global Service Centre",
    location: "Chennai, India",
    period: "Aug 2018 – Sep 2021",
    logo: "/images/barclays.svg",
    logoAlt: "Barclays logo",
    highlights: [
      "Implemented BDD using Cucumber with Selenium and Rest Assured, integrating results into JIRA; enabled distributed test execution via Docker and Selenium Grid, wired into Jenkins CI/CD.",
      "Led LCT automation efforts, maintaining cross-platform regression packs for iOS and Android, collaborating with feature teams to close automation gaps and keep coverage current.",
      "Set up cloud device labs for remote app testing during lockdowns, supporting product owners and QA teams.",
      "Automated tracking of deferred live defects with weekly status reporting, and built an NPS/complaints tracking dashboard with single-click analytics updates.",
      "Automated data visualization workflows using Python, supporting the data adoption team.",
    ],
  },
  {
    role: "Senior Test Analyst",
    company: "Barclays Global Service Centre",
    location: "Chennai, India",
    period: "May 2015 – Aug 2018",
    logo: "/images/barclays.svg",
    logoAlt: "Barclays logo",
    highlights: [
      "Transitioned automation ownership from the Center of Excellence, increasing automation coverage from 38 to 105 scenarios across Android and iOS, including new scripts tailored for Android execution.",
      "Refactored the framework using the Page Object Model (POM) design pattern for scalability, and migrated test reporting from HTML to Extent Reports within TestNG.",
      "Led daily Scrum calls and drove QA/Dev collaboration, contributing to test planning, regression updates, defect tracking, and TCM issuance.",
      "Prioritized key test scenarios for SRP migration based on risk and impact, coordinating with the Barclays helpdesk to generate live test data across five migration tranches.",
    ],
  },
  {
    role: "Test Analyst",
    company: "Barclays Global Service Centre (Contract Role)",
    location: "Chennai, India",
    period: "Dec 2012 – May 2015",
    logo: "/images/barclays.svg",
    logoAlt: "Barclays logo",
    highlights: [
      "Tested the full Smart Investor journey (150+ screens) within a week under tight delivery timelines, alongside cross-browser testing for non-transactional pages.",
      "Developed and implemented a defect tracking system, improving bug resolution time by 20%, and built an automated broken-link detection script to improve content reliability.",
      "Built 23+ Excel VBA macros automating repetitive tasks, reducing manual effort across QA and business teams.",
    ],
  },
];

export const accomplishments = [
  {
    title: "Flex Award — PwC Malaysia, 2025",
    description:
      "Exemplifying core behaviors — Evolve and Inspire — in delivering innovative QA solutions.",
  },
  {
    title: "Gratitude Award — Citicorp India Services, 2023",
    description: "Recognized for consistent dedication and team support.",
  },
  {
    title: "Star of the Month — KPMG, March 2023",
    description: "For exceptional contributions to test automation initiatives.",
  },
  {
    title: "Barclays Stewardship Award, 2020",
    description: "For demonstrating ownership and long-term value creation.",
  },
  {
    title: "Barclays Excellence Award, 2016 & 2018",
    description: "For outstanding performance and delivery.",
  },
];

export const education = {
  degree:
    "Bachelor of Engineering: Electronics and Communications Engineering",
  school: "Sriram Engineering College (Affiliated to Anna University), Chennai",
  year: "2011",
};

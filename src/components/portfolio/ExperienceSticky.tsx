import { ProjectRow, type Bullet } from "./ProjectRow";

type Role = {
  id: string;
  company: string;
  role: string;
  period: string;
  intro: string;
  projects: { index: string; title: string; bullets: Bullet[] }[];
  tech: string[];
};

const roles: Role[] = [
  {
    id: "gartner",
    company: "Gartner",
    role: "Software Engineer",
    period: "Jun 2025 — Present",
    intro:
      "Building internal platforms and GenAI tools for the global consulting practice.",
    projects: [
      {
        index: "01",
        title: "BEAM — Builder Environment Automation",
        bullets: [
          {
            headline:
              "Automated Databricks environment provisioning for consultants.",
            detail:
              "Replaced a week-long manual coordination process with an automated pipeline triggered from a self-serve interface.",
          },
        ],
      },
      {
        index: "02",
        title: "Business Capability Model Platform",
        bullets: [
          {
            headline:
              "GenAI-powered platform to generate and assess Business Capability Models.",
            detail:
              "Aimed at unifying BCM workflows across Gartner's global consulting practice — generation, scoring, and review in one place.",
          },
        ],
      },
      {
        index: "03",
        title: "Client Engagements — U.S. Federal and IMF",
        bullets: [
          {
            headline: "RFI automation and vendor analysis with LLMs + Text-to-SQL.",
            detail:
              "Built GenAI apps that turn long-form RFIs and unstructured vendor data into structured, queryable answers.",
          },
          {
            headline:
              "Interactive analytics dashboard replacing legacy Excel-based reporting.",
          },
          {
            headline: "Managed Azure cloud resources for the engagements.",
          },
        ],
      },
    ],
    tech: [
      "FastAPI",
      "React",
      "OpenAI",
      "SQL",
      "Databricks",
      "Okta",
      "Microsoft Graph",
      "LangChain",
      "Redux Toolkit",
    ],
  },
  {
    id: "indigo",
    company: "IndiGo",
    role: "Full Stack Engineer",
    period: "Jul 2023 — Jun 2025",
    intro:
      "Shipped 6Eskai — an AI agent for India's largest airline — and the systems behind it.",
    projects: [
      {
        index: "01",
        title: "6Eskai — AI Agent for Passengers",
        bullets: [
          {
            headline:
              "Handled 50k+ bookings and resolved 200k+ passenger queries.",
            detail:
              "Helps IndiGo passengers with bookings, check-in, flight status, and common travel questions across channels.",
          },
          {
            headline:
              "Built core features: flight booking, boarding pass, and payments.",
          },
          {
            headline:
              "FAQ knowledge base with automated updates for latest travel policies.",
          },
          {
            headline:
              "Migrated live agent support from Yellow Messenger to Salesforce.",
            detail:
              "Reduced support costs and improved customer satisfaction ratings.",
          },
        ],
      },
    ],
    tech: [
      "FastAPI",
      "React",
      "OpenAI",
      "Azure Semantic Search",
      "Document Intelligence",
      "Cosmos DB",
      "Juspay",
      "Spring Boot",
      "Kafka",
      "SMTP",
    ],
  },
];

export function ExperienceSticky() {
  return (
    <section id="work" className="relative py-24 md:py-32 bg-background/90">
      <div className="mx-auto max-w-[1200px] px-6 md:px-10">
        <div className="flex items-baseline justify-between mb-16">
          <span className="eyebrow">02 — Work Experience</span>
        </div>

        <div className="space-y-32 md:space-y-48">
          {roles.map((r) => (
            <RoleBlock key={r.id} role={r} />
          ))}
        </div>
      </div>
    </section>
  );
}

function RoleBlock({ role: r }: { role: Role }) {
  return (
    <div id={`role-${r.id}`} className="grid md:grid-cols-12 gap-12 md:gap-16 scroll-mt-32">
      {/* Sticky pane */}
      <aside className="md:col-span-5 lg:col-span-4">
        <div className="md:sticky md:top-32">
          <div className="mb-8">
            <p className="eyebrow text-accent">{r.period}</p>
            <h3 className="font-serif text-5xl md:text-6xl mt-3 text-foreground tracking-[-0.02em] leading-[0.95]">
              {r.company}
            </h3>
            <p className="text-sm text-muted-foreground mt-3">{r.role}</p>
            <p className="text-sm text-foreground/80 mt-5 max-w-xs leading-relaxed">
              {r.intro}
            </p>
          </div>
        </div>
      </aside>

      {/* Scrolling content */}
      <div className="md:col-span-7 lg:col-span-8">
        <div className="space-y-10">
          {r.projects.map((p) => (
            <ProjectRow key={p.index} {...p} />
          ))}
        </div>
        <div className="mt-10 pt-8 border-t border-border/60">
          <p className="eyebrow mb-5">Tech</p>
          <p className="font-serif text-xl md:text-2xl leading-[1.4] tracking-[-0.01em] text-foreground">
            {r.tech.join("  ·  ")}
          </p>
        </div>
      </div>
    </div>
  );
}

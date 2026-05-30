import { useReveal } from "@/hooks/use-reveal";

const groups = [
  {
    label: "Languages",
    items: ["C++", "JavaScript", "TypeScript", "Java", "Python"],
  },
  {
    label: "Frameworks",
    items: ["React", "Node.js", "FastAPI", "Spring", "Jest", "JUnit", "Mockito"],
  },
  {
    label: "Databases",
    items: ["MongoDB", "Azure Cosmos DB", "SQL", "Redis", "Azure Blob Storage"],
  },
  {
    label: "Cloud & DevOps",
    items: ["Microsoft Azure", "Docker", "Kubernetes", "OpenShift", "GitHub Actions", "Jenkins"],
  },
  {
    label: "Messaging & Analytics",
    items: ["Kafka", "AMQ Streams", "Azure Event Grid", "Azure App Insights"],
  },
  {
    label: "AI & ML",
    items: ["LangChain", "LangGraph", "Agent Orchestration", "Azure Document Intelligence", "Azure AI Search"],
  },
];

export function Skills() {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section id="skills" className="relative py-32 md:py-48 bg-foreground text-background">
      <div className="mx-auto max-w-[1200px] px-6 md:px-10">
        <div className="grid md:grid-cols-12 gap-10 mb-20">
          <div className="md:col-span-3">
            <span className="eyebrow text-background/60">03 — Technical Skills</span>
          </div>
          <div className="md:col-span-9">
            <h2 className="font-serif text-4xl md:text-6xl tracking-[-0.02em] leading-[1.05] text-background max-w-3xl">
              Languages, frameworks, and everything in between.
            </h2>
          </div>
        </div>

        <div ref={ref} className="reveal grid md:grid-cols-12 gap-y-12 gap-x-10">
          {groups.map((g) => (
            <div key={g.label} className="md:col-span-6 lg:col-span-4">
              <p className="text-[0.6875rem] tracking-[0.22em] uppercase text-background/50 mb-4">{g.label}</p>
              <p className="font-serif text-xl md:text-2xl leading-[1.4] text-background">{g.items.join(", ")}.</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

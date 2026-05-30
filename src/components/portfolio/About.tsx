import { useReveal } from "@/hooks/use-reveal";

export function About() {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section id="about" className="relative py-32 md:py-48 bg-background/90">
      <div className="mx-auto max-w-[1200px] px-6 md:px-10">
        <div className="grid md:grid-cols-12 gap-10">
          <div className="md:col-span-3">
            <div className="flex items-center gap-4">
              <span className="eyebrow">01 — About</span>
            </div>
          </div>
          <div ref={ref} className="reveal md:col-span-9 max-w-3xl">
            <p className="font-serif text-3xl md:text-4xl leading-[1.25] text-foreground tracking-[-0.01em]">
              Three years of building things that{" "}
              <span className="italic text-accent">ship</span> — internal
              platforms, customer-facing AI agents, and the quiet plumbing in
              between.
            </p>
            <p className="mt-8 text-base md:text-lg leading-relaxed text-muted-foreground max-w-2xl">
              I work across the stack with a soft spot for the parts where
              product, data, and language models meet. Comfortable shipping
              FastAPI services, React interfaces, and the orchestration
              layers that hold them together — at Gartner today, at IndiGo
              before that.
            </p>
            <div className="mt-10 flex items-center gap-6 text-xs tracking-[0.22em] uppercase text-muted-foreground">
              <span>Based in India</span>
              <span className="h-px w-8 bg-border" />
              <span>Open to collaboration</span>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto max-w-[1200px] px-6 md:px-10 mt-24">
        <svg
          viewBox="0 0 1200 24"
          className="w-full h-6 text-border"
          aria-hidden="true"
        >
          <line x1="0" y1="12" x2="1200" y2="12" stroke="currentColor" strokeWidth="1" />
          <circle cx="600" cy="12" r="3" fill="currentColor" />
        </svg>
      </div>
    </section>
  );
}

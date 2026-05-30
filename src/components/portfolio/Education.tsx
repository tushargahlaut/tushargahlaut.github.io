import { useReveal } from "@/hooks/use-reveal";

export function Education() {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section id="education" className="relative py-32 md:py-40 bg-background/90">
      <div ref={ref} className="reveal mx-auto max-w-[1200px] px-6 md:px-10">
        <div className="grid md:grid-cols-12 gap-10">
          <div className="md:col-span-3">
            <span className="eyebrow">04 — Education</span>
          </div>
          <div className="md:col-span-9 max-w-3xl">
            <p className="font-serif text-3xl md:text-5xl leading-[1.1] tracking-[-0.01em] text-foreground">
              B.Tech, Computer Science &amp;{" "}
              <span className="italic text-accent">Engineering</span>
            </p>
            <p className="mt-6 text-base md:text-lg text-muted-foreground">
              Guru Gobind Singh Indraprastha University
            </p>
            <p className="mt-2 text-sm text-muted-foreground tracking-wide">
              New Delhi · 2019—2023 · CGPA 9.1 / 10
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Recognition() {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section id="recognition" className="relative py-32 md:py-40 bg-background/90">
      <div ref={ref} className="reveal mx-auto max-w-[1200px] px-6 md:px-10">
        <div className="grid md:grid-cols-12 gap-10">
          <div className="md:col-span-3">
            <span className="eyebrow">05 — Recognition</span>
          </div>
          <div className="md:col-span-9 max-w-3xl">
            <p className="font-serif text-3xl md:text-5xl leading-[1.1] tracking-[-0.01em] text-foreground">
              <span className="italic text-accent">
                "High Business Impact"
              </span>{" "}
              Award
            </p>
            <p className="mt-6 text-base md:text-lg text-muted-foreground">
              IndiGo Rewards &amp; Recognition
            </p>
            <p className="mt-2 text-sm text-muted-foreground tracking-wide">
              For key contributions to 6Eskai
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

import { useEffect, useState } from "react";

const sections = [
  { id: "about", label: "About" },
  { id: "work", label: "Work" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
];

export function TopNav() {
  const [active, setActive] = useState<string>("about");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: [0, 0.25, 0.5, 1] },
    );
    sections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) io.observe(el);
    });
    return () => io.disconnect();
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? "py-3 backdrop-blur-md bg-background/75" : "py-6 bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-[1200px] px-6 md:px-10 flex items-center justify-between">
        <a
          href="#top"
          className="font-serif text-base tracking-tight text-foreground"
          aria-label="Tushar Gahlaut"
        >
          <span className="text-accent">●</span>{" "}
          <span className="underline-grow">Tushar Gahlaut</span>
        </a>
        <nav className="hidden md:flex items-center gap-10">
          {sections.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className={`text-xs tracking-[0.22em] uppercase transition-colors ${
                active === s.id
                  ? "text-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <span className="relative inline-block pb-1">
                {s.label}
                <span
                  className={`absolute left-0 -bottom-0.5 h-px bg-accent transition-all duration-500 ${
                    active === s.id ? "w-full" : "w-0"
                  }`}
                />
              </span>
            </a>
          ))}
        </nav>
        <a
          href="#contact"
          className="md:hidden text-xs tracking-[0.22em] uppercase text-muted-foreground"
        >
          Menu
        </a>
      </div>
    </header>
  );
}

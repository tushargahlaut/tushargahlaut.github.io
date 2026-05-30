import { useReveal } from "@/hooks/use-reveal";

const RESUME_URL =
  "https://drive.google.com/file/d/1JMEy707FGezradSqJ75grzQ_5F0giNFm/view?usp=sharing";

const links = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/tushar-gahlaut/" },
  { label: "GitHub", href: "https://github.com/tushargahlaut" },
  { label: "LeetCode", href: "https://leetcode.com/tushargahlaut/" },
];

export function Contact() {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section id="contact" className="relative py-32 md:py-48 bg-background/90">
      <div ref={ref} className="reveal mx-auto max-w-[1200px] px-6 md:px-10">
        <div className="grid md:grid-cols-12 gap-10">
          <div className="md:col-span-3">
            <span className="eyebrow">06 — Contact</span>
          </div>
          <div className="md:col-span-9 min-w-0">
            <p className="font-serif italic text-muted-foreground text-2xl md:text-3xl mb-6">
              Let's talk.
            </p>
            <a
              href="mailto:tushargahlaut74@gmail.com"
              className="font-serif text-foreground tracking-[-0.02em] leading-[1] text-[clamp(1.5rem,5vw,4rem)] underline-grow inline-block max-w-full break-all"
            >
              tushargahlaut74<span className="text-accent">@</span>gmail.com
            </a>

            <div className="mt-16 grid md:grid-cols-12 gap-10 items-end">
              <div className="md:col-span-7">
                <p className="eyebrow mb-5">Elsewhere</p>
                <ul className="space-y-3">
                  {links.map((l) => (
                    <li key={l.label}>
                      <a
                        href={l.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group inline-flex items-center gap-4 text-foreground"
                      >
                        <span className="h-px w-8 bg-muted-foreground/60 group-hover:w-14 group-hover:bg-accent transition-all duration-300" />
                        <span className="font-serif text-xl md:text-2xl underline-grow">
                          {l.label}
                        </span>
                        <svg
                          width="14"
                          height="14"
                          viewBox="0 0 14 14"
                          fill="none"
                          className="text-muted-foreground group-hover:text-accent group-hover:translate-x-1 transition-all"
                          aria-hidden="true"
                        >
                          <path
                            d="M3 11L11 3M11 3H5M11 3v6"
                            stroke="currentColor"
                            strokeWidth="1"
                          />
                        </svg>
                      </a>
                    </li>
                  ))}
                  <li>
                    <a
                      href="tel:+919717562252"
                      className="group inline-flex items-center gap-4 text-muted-foreground"
                    >
                      <span className="h-px w-8 bg-muted-foreground/60 group-hover:w-14 group-hover:bg-accent transition-all duration-300" />
                      <span className="text-sm tracking-wide">
                        +91 97175 62252
                      </span>
                    </a>
                  </li>
                </ul>
              </div>

              <div className="md:col-span-5 md:text-right">
                <a
                  href={RESUME_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-3 border border-foreground px-7 py-4 text-xs tracking-[0.22em] uppercase text-foreground hover:bg-accent hover:border-accent hover:text-accent-foreground transition-all duration-300"
                >
                  Download résumé
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                    <path
                      d="M7 2v8M3 7l4 4 4-4M2 12h10"
                      stroke="currentColor"
                      strokeWidth="1"
                      strokeLinecap="square"
                    />
                  </svg>
                </a>
                <p className="mt-4 text-xs text-muted-foreground">
                  Opens in Google Drive
                </p>
              </div>
            </div>
          </div>
        </div>

        <footer className="mt-32 pt-8 border-t border-border flex flex-wrap items-center justify-between gap-4 text-xs text-muted-foreground tracking-wide">
          <span>© 2026 Tushar Gahlaut</span>
          <span>Designed & built with care</span>
        </footer>
      </div>
    </section>
  );
}

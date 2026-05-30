import { useState } from "react";

export type Bullet = { headline: string; detail?: string };

export function ProjectRow({
  index,
  title,
  bullets,
}: {
  index: string;
  title: string;
  bullets: Bullet[];
}) {
  return (
    <div className="border-t border-border pt-8 pb-2">
      <div className="flex items-baseline gap-4 mb-6">
        <span className="eyebrow text-accent">{index}</span>
        <h4 className="font-serif text-2xl md:text-[1.75rem] tracking-tight text-foreground">
          {title}
        </h4>
      </div>
      <ul className="divide-y divide-border/60">
        {bullets.map((b, i) => (
          <BulletRow key={i} bullet={b} />
        ))}
      </ul>
    </div>
  );
}

function BulletRow({ bullet }: { bullet: Bullet }) {
  const [open, setOpen] = useState(false);
  const hasDetail = Boolean(bullet.detail);
  return (
    <li>
      <button
        type="button"
        onClick={() => hasDetail && setOpen((v) => !v)}
        className={`group w-full flex items-start gap-6 py-4 text-left transition-all duration-300 ${
          hasDetail ? "cursor-pointer hover:pl-2" : "cursor-default"
        }`}
        aria-expanded={open}
      >
        <span className="mt-2.5 h-px w-6 shrink-0 bg-muted-foreground/60 group-hover:w-10 group-hover:bg-accent transition-all duration-300" />
        <span className="flex-1">
          <span className="block text-base md:text-lg leading-snug text-foreground">
            {bullet.headline}
          </span>
          {hasDetail && (
            <span
              className={`grid transition-all duration-500 ease-out ${
                open
                  ? "grid-rows-[1fr] opacity-100 mt-2"
                  : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <span className="overflow-hidden">
                <span className="block text-sm md:text-[0.95rem] leading-relaxed text-muted-foreground max-w-2xl">
                  {bullet.detail}
                </span>
              </span>
            </span>
          )}
        </span>
        {hasDetail && (
          <span
            className={`mt-1 text-accent transition-transform duration-300 ${
              open ? "rotate-90" : ""
            }`}
            aria-hidden="true"
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path
                d="M3 7h8M7 3l4 4-4 4"
                stroke="currentColor"
                strokeWidth="1"
                strokeLinecap="square"
              />
            </svg>
          </span>
        )}
      </button>
    </li>
  );
}

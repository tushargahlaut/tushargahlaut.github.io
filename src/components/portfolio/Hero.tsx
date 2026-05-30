import heroVideoAsset from "@/assets/hero-mist.mp4.asset.json";

export function Hero() {
  return (
    <section id="top" className="relative min-h-screen w-full overflow-hidden grain">
      <div className="absolute inset-0 -z-10 overflow-hidden" aria-hidden="true">
        <video
          className="h-full w-full object-cover opacity-60"
          src={heroVideoAsset.url}
          autoPlay
          loop
          muted
          playsInline
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/50 to-background" />
      </div>

      <div className="relative z-10 mx-auto max-w-[1200px] px-6 md:px-10 pt-40 md:pt-48 pb-24">
        <h1 className="font-serif font-light text-foreground tracking-[-0.03em] leading-[0.95] text-[clamp(3.25rem,10.5vw,10.5rem)] break-words">
          Tushar
          <br />
          <span className="italic">Gahlaut</span>
          <span className="text-accent">.</span>
        </h1>

        <div className="mt-12 md:mt-16 grid md:grid-cols-12 gap-8 items-end">
          <p className="md:col-span-7 font-serif text-2xl md:text-3xl leading-snug text-foreground/90 max-w-2xl">
            Full Stack Engineer building scalable products and <span className="italic text-accent">GenAI-powered</span>{" "}
            tools across product and consulting environments.
          </p>
          <div className="md:col-span-5 md:text-right space-y-2">
            <p className="eyebrow">Currently</p>
            <p className="text-sm text-foreground">Software Engineer · Gartner</p>
            <p className="text-sm text-muted-foreground">New Delhi, India</p>
          </div>
        </div>
      </div>

      {/* <a
        href="#about"
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-3 text-muted-foreground hover:text-foreground transition-colors"
        aria-label="Scroll to about"
      >
        <span className="eyebrow">Scroll</span>
        <span className="block h-10 w-px bg-current animate-[pulse_2.4s_ease-in-out_infinite]" />
      </a> */}
    </section>
  );
}

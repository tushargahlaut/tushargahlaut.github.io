export function AmbientStrip({
  src,
  alt,
  caption,
}: {
  src: string;
  alt: string;
  caption?: string;
}) {
  return (
    <section className="relative w-full h-[40vh] md:h-[50vh] overflow-hidden">
      <img
        src={src}
        alt={alt}
        loading="lazy"
        width={1920}
        height={800}
        className="h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-background/20" />
      {caption && (
        <div className="absolute bottom-6 left-6 md:bottom-10 md:left-10">
          <p className="eyebrow text-foreground/70">{caption}</p>
        </div>
      )}
    </section>
  );
}

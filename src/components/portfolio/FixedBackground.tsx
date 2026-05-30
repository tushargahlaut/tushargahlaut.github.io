import heroVideo from "@/assets/hero-mist.mp4";

export function FixedBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden" aria-hidden="true">
      <video
        className="h-full w-full object-cover opacity-25"
        src={heroVideo}
        autoPlay
        loop
        muted
        playsInline
      />
      <div className="absolute inset-0 bg-background/80" />
    </div>
  );
}

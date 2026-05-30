import { createFileRoute } from "@tanstack/react-router";
import { TopNav } from "@/components/portfolio/TopNav";
import { FixedBackground } from "@/components/portfolio/FixedBackground";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { ExperienceSticky } from "@/components/portfolio/ExperienceSticky";
import { Skills } from "@/components/portfolio/Skills";
import { Education, Recognition } from "@/components/portfolio/Education";
import { Contact } from "@/components/portfolio/Contact";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Tushar Gahlaut — Full Stack Engineer" },
      {
        name: "description",
        content:
          "Full Stack Engineer with three years of experience building scalable applications and GenAI-powered tools across product and consulting environments.",
      },
      { property: "og:title", content: "Tushar Gahlaut — Full Stack Engineer" },
      {
        property: "og:description",
        content:
          "Portfolio of Tushar Gahlaut — Full Stack Engineer building scalable products and GenAI tools.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <FixedBackground />
      <main className="relative text-foreground overflow-x-hidden">
        <TopNav />
        <Hero />
        <About />
        <ExperienceSticky />
        <Skills />
        <Education />
        <Recognition />
        <Contact />
      </main>
    </>
  );
}

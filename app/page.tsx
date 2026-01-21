import dynamic from "next/dynamic";
import HeroPage from "@/components/HeroPage";
import { projects } from "@/data/projects";

const ProjectPage = dynamic(() => import("@/components/ProjectPage"), {
  loading: () => (
    <section className="h-screen w-full flex items-center justify-center bg-white snap-start">
      <div className="animate-pulse text-brand-primary">Loading...</div>
    </section>
  ),
  ssr: true,
});

export default function Home() {
  return (
    <main className="snap-y snap-mandatory h-screen overflow-y-scroll scroll-smooth">
      <HeroPage />

      {projects.map((project, index) => (
        <ProjectPage
          key={project.projectNumber}
          {...project}
          priority={index === 0}
        />
      ))}
    </main>
  );
}

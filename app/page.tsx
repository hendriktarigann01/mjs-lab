import HeroPage from "@/components/HeroPage";
import ProjectPage from "@/components/ProjectPage";
import { projects } from "@/data/projects";

export default function Home() {
  return (
    <main className="snap-y snap-mandatory h-screen overflow-y-scroll scroll-smooth">
      <HeroPage />

      {projects.map((project) => (
        <ProjectPage key={project.projectNumber} {...project} />
      ))}
    </main>
  );
}

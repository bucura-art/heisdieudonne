import { projects } from "@/data/projects";
import ProjectCard from "@/components/projects/ProjectCard";
import WelcomeMessage from "@/components/layout/Welcome";
import Navbar from "@/components/layout/Navbar";

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-[#e6e6e6] [--foreground:222_47%_11%] text-foreground">
      <div className="grid w-full grid-cols-1 gap-12 px-4 pb-24 pt-16 md:grid-cols-[minmax(0,2fr)_minmax(0,1fr)] md:px-6 md:pt-8">
        <section className="order-last min-w-0 md:order-first">
          <div className="mb-10 max-w-3xl">
            <h1 className="mb-6 text-4xl font-bold text-slate-900">Projects</h1>
            <p className="text-xl text-slate-900">
              Published Projects. Real systems, shipped.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {projects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </section>

        <aside className="order-first flex min-w-0 flex-col gap-8 md:order-last">
          <WelcomeMessage />
          <Navbar />
        </aside>
      </div>
    </div>
  );
}
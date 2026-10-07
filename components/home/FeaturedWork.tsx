import ProjectCard from "@/components/projects/ProjectCard";
import { projects } from "@/data/projects";
import Link from "next/link";

export default function FeaturedWork() {
  const featuredProjects = projects
    .filter((project) => project.featured)
    .slice(0, 2);

  if (featuredProjects.length === 0) {
    return null;
  }

  return (
    <div className="mt-24">
      <h2 className="mb-8">Published Projects</h2>
      <div className="grid gap-8">
        {featuredProjects.map((project, index) => (
          <div
            key={project.slug}
            className="animate-slide-up-fade"
            style={{ animationDelay: `${index * 150}ms` }}
          >
            <ProjectCard project={project} />
          </div>
        ))}
      </div>

      <div className="mt-12">
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-muted hover:text-foreground transition-colors group"
        >
          View more projects{" "}
          <span className="group-hover:translate-x-1 transition-transform">
            →
          </span>
        </Link>
      </div>
    </div>
  );
}
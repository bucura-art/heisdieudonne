import Link from "next/link";

type Project = {
  slug: string;
  name: string;
  status: string;
  description: string;
  techStack: string[];
  link: string;
};

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="group relative rounded-2xl border border-slate-200 bg-white p-5 text-slate-900 transition-colors hover:border-accent/50">
      <div className="flex h-full flex-col items-start gap-4">
        <div
          aria-hidden="true"
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-slate-200 bg-slate-50 text-xl font-bold text-slate-900"
        >
          {project.name.charAt(0)}
        </div>
        <div className="flex w-full flex-1 flex-col justify-between gap-5">
          <div className="space-y-3">
            <div>
              <h2 className="break-words text-xl font-bold">{project.name}</h2>
              <span
                className={`mt-2 inline-block rounded-full border px-2 py-0.5 text-xs ${
                  project.status === "done"
                    ? "bg-green-500/10 text-green-500 border-green-500/20"
                    : "bg-yellow-500/10 text-yellow-500 border-yellow-500/20"
                }`}
              >
                {project.status}
              </span>
            </div>

            <p className="text-base text-slate-700">{project.description}</p>

            <div>
              <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-slate-600">
                Tech Stack
              </p>
              <div className="flex flex-wrap gap-1.5">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="break-words rounded-md border border-slate-200 bg-slate-100 px-2 py-1 text-[11px] text-slate-800"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

          </div>

          <div className="flex shrink-0 justify-end">
            {project.link ? (
              <Link
                href={project.link}
                target="_blank"
                className="inline-flex items-center justify-center rounded-lg bg-black px-4 py-2 text-sm font-medium text-white transition-opacity hover:opacity-90"
              >
                view project ↗
              </Link>
            ) : (
              <span className="inline-flex items-center justify-center rounded-lg border border-dashed border-slate-300 bg-slate-50 px-4 py-2 text-sm font-medium text-slate-500">
                coming soon
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

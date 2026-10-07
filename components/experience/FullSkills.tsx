import { skills } from "@/data/skills";
import SkillBar from "./SkillBar";

export default function FullSkills() {
  return (
    <section className="w-full pt-24 text-slate-900">
      <div className="mb-16 max-w-3xl">
        <h1 className="mb-4 text-slate-900">Skills</h1>
        <p className="text-slate-900">
          Based on time invested building and learning.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4">
        {skills.map((category) => (
          <details
            key={category.category}
            className="group rounded-xl border border-slate-200 bg-white p-4 transition-colors hover:border-accent/50"
          >
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 [&::-webkit-details-marker]:hidden">
              <span role="heading" aria-level={3} className="text-xl font-semibold text-slate-900">
                {category.category}
              </span>
              <svg
                aria-hidden="true"
                viewBox="0 0 20 20"
                fill="none"
                className="h-5 w-5 shrink-0 text-slate-600 transition-transform group-open:rotate-180"
              >
                <path
                  d="m5 7.5 5 5 5-5"
                  stroke="currentColor"
                  strokeWidth="1.75"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </summary>

            <div className="space-y-6 pt-6">
              <div className="space-y-6">
                {category.items.map((skill, i) => (
                  <SkillBar
                    key={skill.name}
                    name={skill.name}
                    level={skill.level}
                    index={i}
                    sources={category.sources}
                  />
                ))}
              </div>

              <div className="text-xs text-slate-900">
                <span className="font-medium">Sources: </span>
                <span className="text-blue-400">{category.sources.join(", ")} </span>
              </div>
            </div>
          </details>
        ))}
      </div>
    </section>
  );
}

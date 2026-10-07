import { education } from "@/data/education";

export default function FullExperience() {
  return (
    <section className="container py-24">
      <div className="max-w-3xl mb-16">
        <h1 className="mb-4 text-slate-900">Experience</h1>
        <p className="text-slate-900">
          Academic foundation and areas of study.
        </p>
      </div>

      <div>
        <h3 className="text-2xl text-slate-900 font-semibold mb-8 flex items-center gap-2">
          Education Background
        </h3>
        <div className="relative border-l border-border pl-8 space-y-12">
          {education.map((item, index) => (
            <div key={index} className="relative">
              <span className="absolute -left-10 top-1 w-4 h-4 rounded-full bg-accent" />
              <h4 className="text-xl font-semibold mb-1 text-slate-900 flex flex-wrap items-center gap-2">
                {item.title}
              </h4>
              <span className="inline-block px-2 py-0.5 rounded-full border border-green-500/20 bg-green-500/10 text-green-400 backdrop-blur text-xs">
                {item.period} <span className="text-slate-900">|</span> {item.status}
              </span>
              <p className="text-sm text-blue-400 mb-2">
                {item.institution}
              </p>
              <ul className="list-disc list-inside space-y-1 text-sm text-slate-900">
                {item.focusAreas.map((focus) => (
                  <li key={focus}>{focus}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
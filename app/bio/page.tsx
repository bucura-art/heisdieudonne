import { profile } from "@/data/profile";
import { education } from "@/data/education";

export default function BioPage() {
  return (
    <section className="container py-24 space-y-16">
      {/* Header */}
      <div className="max-w-3xl">
        <h1 className="mb-6">Biography</h1>
        <p className="text-xl text-foreground">{profile.tagline}</p>
      </div>

      <div className="grid md:grid-cols-3 gap-12">
        {/* Sidebar / Snapshot */}
        <div className="space-y-8">
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4 text-foreground">Snapshot</h3>
            <div className="space-y-4 text-sm text-foreground">
              <div>
                <span className="block text-xs uppercase tracking-wide opacity-70">Name</span>
                <span className="text-foreground font-medium">{profile.name}</span>
              </div>
              <div>
                <span className="block text-xs uppercase tracking-wide opacity-70">Location</span>
                <span className="text-foreground font-medium">{profile.location}</span>
              </div>
              <div>
                <span className="block text-xs uppercase tracking-wide opacity-70">Status</span>
                <div className="flex flex-wrap gap-2 mt-1">
                  {profile.status.map((s) => (
                    <span key={s} className="px-2 py-0.5 rounded-full border border-green-500/20 bg-green-500/10 text-green-400 backdrop-blur text-xs">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="md:col-span-2 space-y-12">
        <div>
             <h2 className="text-2xl font-semibold mb-6">Education</h2>
             <div className="space-y-8">
                {education.map((edu, i) => (
                  <div key={i} className="border-l-2 border-border pl-6 relative">
                    <div className="absolute -left-[5px] top-2 w-2 h-2 rounded-full bg-accent" />
                    <h3 className="text-lg font-medium text-orange-500 flex flex-wrap items-center gap-2">
                      {edu.title}
                    </h3>
                      <span className="px-2 py-0.5 rounded-full border border-green-500/20 bg-green-500/10 text-green-400 backdrop-blur text-xs">
                        {edu.period} <span className="text-white">|</span>  {edu.status}
                      </span>
                    <p className="text-sm text-blue-400 mb-2">{edu.institution}</p>
                    <ul className="list-disc list-inside text-sm text-foreground">
                      {edu.focusAreas.map((f) => <li key={f}>{f}</li>)}
                    </ul>
                  </div>
                ))}
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}
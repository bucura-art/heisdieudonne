import { profile } from "@/data/profile";

export default function WelcomeMessage() {
  return (
    <div className="hidden pt-14 md:block md:pt-0">
      <h2 className="mb-3 text-4xl font-bold text-slate-900">Welcome</h2>
      <div className="space-y-4 text-slate-900 leading-relaxed">
        {profile.bio.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
    </div>
  );
}
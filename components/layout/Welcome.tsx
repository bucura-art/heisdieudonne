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
      <iframe
        title="Spotify track player"
        style={{ borderRadius: 12 }}
        src="https://open.spotify.com/embed/track/3eekarcy7kvN4yt5ZFzltW?utm_source=generator&si=0ee14f1a1ab243d0"
        width="100%"
        height="152"
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        allowFullScreen
        loading="lazy"
        className="mt-6"
      />
    </div>
  );
}
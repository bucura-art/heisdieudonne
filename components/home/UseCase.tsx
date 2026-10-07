const useCaseGroups = [
  {
    title: "Non-technical support",
    cases: [
      {
        title: "Running out of time or got too much work",
        description:
          "A deadline is getting close and you need focused help to get the work across the line.",
      },
      {
        title: "Tools selection or need human opinion",
        description:
          "You’re weighing options or planning a project and want a fresh perspective, Let me help you make the right choice.",
      },
      {
        title: "Need branding strategy or design",
        description:
          "You’re shaping how your business presents itself and want a clearer, more consistent brand.",
      },
    ],
  },
  {
    title: "Technical support",
    cases: [
      {
        title: "Are you stuck",
        description:
          "A technical issue or project blocker is keeping you from making progress.",
      },
      {
        title: "Website SEO & AEO",
        description:
          "You’re ready to launch a new website, improve an existing one, or get found online.",
      },
      {
        title: "Need app/web testers",
        description:
          "You want people to test your app, uncover issues, and share feedback before launch.",
      },
    ],
  },
];

export default function UseCase() {
  return (
    <section className="mt-16 text-slate-900" aria-labelledby="use-cases-title">
      <div className="mx-auto mb-8 max-w-2xl text-center">
        <h2 id="use-cases-title" className="mb-3 text-3xl font-bold text-slate-900">
          Use cases
        </h2>
      </div>

      <div className="mx-auto grid max-w-3xl gap-10">
        {useCaseGroups.map((group) => (
          <div key={group.title}>
            <h3 className="mb-4 text-center text-2xl font-semibold text-slate-900">
              {group.title}
            </h3>
            <div className="grid grid-cols-1 gap-4">
              {group.cases.map((useCase) => (
                <details
                  key={useCase.title}
                  className="group rounded-xl border border-slate-200 bg-white p-4 transition-colors hover:border-accent/50"
                >
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 [&::-webkit-details-marker]:hidden">
                    <span role="heading" aria-level={4} className="text-xl font-semibold text-slate-900">
                      {useCase.title}
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
                  <p className="pt-4 text-sm text-slate-700">{useCase.description}</p>
                </details>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
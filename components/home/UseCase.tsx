const useCaseGroups = [
  {
    title: "Non-technical support",
    cases: [
      {
        title: "Running out of time",
        description:
          "A deadline is getting close and you need focused help to get the work across the line.",
      },
      {
        title: "Too much work",
        description:
          "You have a big workload and could use an extra pair of hands to plan or build.",
      },
      {
        title: "Feeling exhausted",
        description:
          "You’ve been carrying a project alone and could use help sharing the load or finding a way forward.",
      },
      {
        title: "Need a human opinion",
        description:
          "You’re weighing options or planning a project and want a fresh perspective.",
      },
      {
        title: "Branding strategy",
        description:
          "You’re shaping how your business presents itself and want a clearer, more consistent brand.",
      },
      {
        title: "Need business research",
        description:
          "You’re exploring an idea, audience, or market and need useful research to guide your next steps.",
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
          Use cases where I can help you
        </h2>
        <p className="text-slate-700">
          Reach out whenever you could use an extra hand with technology or a project.
        </p>
      </div>

      <div className="mx-auto grid max-w-3xl gap-10">
        {useCaseGroups.map((group) => (
          <div key={group.title}>
            <h3 className="mb-4 text-2xl font-semibold text-slate-900">
              {group.title}
            </h3>
            <div className="grid grid-cols-1 gap-4">
              {group.cases.map((useCase, index) => (
                <article
                  key={useCase.title}
                  className="flex min-h-28 w-full items-center gap-5 rounded-2xl border border-slate-200 bg-white p-5 text-left sm:p-6"
                >
                  <div
                    aria-hidden="true"
                    className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-slate-100 text-lg font-bold text-slate-900"
                  >
                    {index + 1}
                  </div>
                  <div>
                    <h4 className="mb-1 text-xl font-semibold text-slate-900">
                      {useCase.title}
                    </h4>
                    <p className="text-sm text-slate-700">{useCase.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
const PAINS = [
  {
    title: 'Backlog keeps growing',
    text: "Tickets stack up faster than you ship. Re-prioritisation has become a quarterly exercise that doesn't actually clear the queue.",
  },
  {
    title: 'Slow feature delivery',
    text: 'Sales asks for X. Engineering says Q3 at the earliest. Bugs reopen. The roadmap slips by another release.',
  },
  {
    title: 'Stuck on manual work',
    text: "Code review, testing, security audits, refactors, doc updates, ticket grooming. Repetitive work eats your team's week.",
  },
  {
    title: 'Context gets lost',
    text: "Decisions live in scattered threads and people's heads. Onboarding is slow and the same questions get re-answered every week.",
  },
];

export function ProblemWeSolveSection() {
  return (
    <section className="border-b border-border py-24">
      <div className="mx-auto max-w-content px-4">
        <p className="text-sm font-medium uppercase tracking-wider text-accent">
          The problem
        </p>
        <h2 className="mt-4 max-w-3xl text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
          Your team is stuck on at least one of these, and it compounds every
          sprint.
        </h2>

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {PAINS.map((pain) => (
            <div
              key={pain.title}
              className="rounded-xl border border-border bg-muted/30 p-6"
            >
              <h3 className="text-lg font-medium">{pain.title}</h3>
              <p className="mt-2 text-muted-foreground">{pain.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

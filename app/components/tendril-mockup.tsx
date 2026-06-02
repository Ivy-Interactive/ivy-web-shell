const VERIFICATIONS = [
  { label: 'Build succeeds', status: 'pass' },
  { label: 'Unit tests pass', status: 'pass' },
  { label: 'Lint passes', status: 'pass' },
  { label: 'Login form renders above #app', status: 'pass' },
  { label: 'Session persists across reload', status: 'pass' },
];

const JOBS = [
  { plan: '00037', title: 'Add Authentication to Main Page', type: 'CreatePR', timer: '2m 14s', cost: '$0.41', status: 'running' },
  { plan: '00030', title: 'Add Featured Fossil of the Week Hero Card', type: 'ExecutePlan', timer: '1m 52s', cost: '$0.32', status: 'running' },
  { plan: '00029', title: 'Confetti milestone on ten favourites', type: 'SplitPlan', timer: '1m 30s', cost: '$0.29', status: 'running' },
  { plan: '00025', title: 'Tag Facts by Geological Era with Colour', type: 'ExecutePlan', timer: '5m 07s', cost: '$1.07', status: 'completed' },
  { plan: '00024', title: 'Add Submit-a-Fact Form with localStorage', type: 'ExecutePlan', timer: '3m 38s', cost: '$0.93', status: 'completed' },
];

const OUTPUT_LINES = [
  '$ tendril run --plan 00037',
  '→ reading index.html',
  '→ reading src/main.js',
  '✎ editing src/main.js (+38 −4)',
  '✎ creating src/auth.css (+56)',
  '✓ build succeeded',
  '✓ 5 verifications passed',
  '✓ opened PR #128 — Add Authentication to Main Page',
];

export function TendrilMockupSection({ version }: { version?: string }) {
  return (
    <section className="border-b border-border py-24">
      <div className="mx-auto max-w-content px-4">
        <div className="flex items-center justify-between">
          <h2 className="max-w-2xl text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
            One plan. A queue of agents. Pull requests out the other side.
          </h2>
          <span className="hidden rounded-md border border-border bg-muted/50 px-3 py-1 font-mono text-xs text-muted-foreground sm:inline">
            {version ?? 'v1.0.32'}
          </span>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-[1.3fr_1fr]">
          {/* Jobs list */}
          <div className="overflow-hidden rounded-xl border border-border bg-muted/30">
            <div className="border-b border-border px-5 py-3 text-sm font-medium">
              Jobs
            </div>
            <ul className="divide-y divide-border">
              {JOBS.map((job) => (
                <li
                  key={job.plan}
                  className="flex items-center justify-between gap-4 px-5 py-3"
                >
                  <div className="min-w-0">
                    <p className="truncate text-sm font-medium">{job.title}</p>
                    <p className="font-mono text-xs text-muted-foreground">
                      #{job.plan} · {job.type}
                    </p>
                  </div>
                  <div className="flex shrink-0 items-center gap-3 font-mono text-xs text-muted-foreground">
                    <span>{job.timer}</span>
                    <span>{job.cost}</span>
                    <span
                      className={
                        job.status === 'running'
                          ? 'rounded-full bg-accent/15 px-2 py-0.5 text-accent'
                          : 'rounded-full bg-muted px-2 py-0.5'
                      }
                    >
                      {job.status}
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Output + verifications */}
          <div className="flex flex-col gap-6">
            <div className="overflow-hidden rounded-xl border border-border bg-[#0a0a0c]">
              <div className="border-b border-border px-4 py-2 font-mono text-xs text-muted-foreground">
                output
              </div>
              <pre className="overflow-x-auto px-4 py-3 font-mono text-xs leading-relaxed text-muted-foreground">
                {OUTPUT_LINES.join('\n')}
              </pre>
            </div>

            <div className="rounded-xl border border-border bg-muted/30 p-5">
              <p className="text-sm font-medium">Verifications</p>
              <ul className="mt-3 space-y-2">
                {VERIFICATIONS.map((v) => (
                  <li
                    key={v.label}
                    className="flex items-center gap-2 text-sm text-muted-foreground"
                  >
                    <span className="text-accent">✓</span>
                    {v.label}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import Link from 'next/link';
import { GitPullRequest, Play, Plus } from 'lucide-react';

const STEPS = [
  { label: 'Plan', icon: Plus },
  { label: 'Execute', icon: Play },
  { label: 'Create PR', icon: GitPullRequest },
];

export function DownloadCtaSection() {
  return (
    <section
      id="getting-started"
      className="border-b border-border py-24"
    >
      <div className="mx-auto max-w-content px-4 text-center">
        <h2 className="mx-auto max-w-2xl text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
          From plan to pull request, automatically
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-balance text-muted-foreground">
          Tendril turns your plans into working code — researching,
          implementing, and opening pull requests while you focus on what
          matters.
        </p>

        <div className="mt-10 flex items-center justify-center gap-3">
          {STEPS.map((step, i) => (
            <div key={step.label} className="flex items-center gap-3">
              <div className="flex items-center gap-2 rounded-md border border-border bg-muted/40 px-4 py-2 text-sm">
                <step.icon className="h-4 w-4 text-accent" />
                {step.label}
              </div>
              {i < STEPS.length - 1 && (
                <span className="text-muted-foreground">→</span>
              )}
            </div>
          ))}
        </div>

        <Link
          href="https://tendril.ivy.app/getting-started/installation"
          className="mt-10 inline-block rounded-md bg-accent px-6 py-3 text-sm font-medium text-background transition-opacity hover:opacity-90"
        >
          Download Tendril
        </Link>
      </div>
    </section>
  );
}

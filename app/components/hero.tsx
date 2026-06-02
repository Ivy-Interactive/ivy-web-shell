import Link from 'next/link';
import { Star } from 'lucide-react';

async function fetchStarCount(): Promise<number | null> {
  try {
    const response = await fetch(
      'https://api.github.com/repos/Ivy-Interactive/Ivy-Tendril',
      { next: { revalidate: 3600 } }
    );
    if (!response.ok) return null;
    const data = await response.json();
    return data.stargazers_count;
  } catch {
    return null;
  }
}

function formatStarCount(count: number): string {
  if (count >= 1000) {
    return `${(count / 1000).toFixed(1)}k`;
  }
  return count.toString();
}

export async function Hero() {
  const starCount = await fetchStarCount();
  const starText = starCount
    ? `Star us on GitHub · ${formatStarCount(starCount)}`
    : 'Star us on GitHub';

  return (
    <section className="relative overflow-hidden border-b border-border">
      {/* Static stand-in for the WebGL "norrsken" aurora background */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-60"
        style={{
          background:
            'radial-gradient(60% 50% at 50% 0%, hsl(158 64% 52% / 0.25), transparent 70%), radial-gradient(40% 40% at 80% 20%, hsl(220 80% 60% / 0.15), transparent 70%), radial-gradient(40% 40% at 15% 30%, hsl(280 70% 60% / 0.12), transparent 70%)',
        }}
      />

      <div className="relative mx-auto flex min-h-[70vh] max-w-content flex-col items-center justify-center px-4 py-24 text-center">
        <Link
          href="https://github.com/Ivy-Interactive/Ivy-Tendril"
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-muted/50 px-4 py-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          <Star className="h-3.5 w-3.5 text-accent" fill="currentColor" />
          {starText}
        </Link>

        <h1 className="max-w-[755px] text-balance text-5xl font-semibold leading-tight tracking-tight sm:text-6xl">
          <span className="text-accent">Friction-less</span>{' '}
          collaboration with AI
        </h1>

        <p className="mt-6 max-w-[573px] text-balance text-lg text-muted-foreground">
          Open-source agent orchestration. Ship 2× faster, with guardrails.
        </p>

        <div className="mt-10 flex flex-col items-center gap-3 sm:flex-row">
          <Link
            href="#getting-started"
            className="rounded-md bg-accent px-6 py-3 text-sm font-medium text-background transition-opacity hover:opacity-90"
          >
            Download Tendril
          </Link>
          <Link
            href="https://tendril.ivy.app"
            className="rounded-md border border-border px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-muted"
          >
            Read the docs
          </Link>
        </div>
      </div>
    </section>
  );
}

import Link from 'next/link';
import { Github, MessageCircle } from 'lucide-react';

const COMMUNITY_LINKS = [
  {
    icon: Github,
    label: 'GitHub',
    description: 'Star, fork, and contribute to the framework',
    href: 'https://github.com/Ivy-Interactive/Ivy-Framework',
  },
  {
    icon: MessageCircle,
    label: 'Discord',
    description: 'Chat with the community and get help',
    href: 'https://discord.gg/CffzHm66BW',
  },
];

export function GetInvolvedSection() {
  return (
    <section className="border-b border-border py-24">
      <div className="mx-auto max-w-content px-4">
        <p className="text-sm font-medium uppercase tracking-wider text-accent">
          Join us
        </p>
        <h2 className="mt-4 max-w-2xl text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
          Tendril amplifies great developers — it doesn&apos;t replace them.
        </h2>

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {COMMUNITY_LINKS.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="group rounded-xl border border-border bg-muted/30 p-6 transition-colors hover:border-accent/50"
            >
              <link.icon className="h-6 w-6 text-accent" />
              <h3 className="mt-4 text-lg font-medium">{link.label}</h3>
              <p className="mt-1 text-muted-foreground">{link.description}</p>
            </Link>
          ))}
        </div>

        {/* Newsletter shell (non-functional) */}
        <div className="mt-10 flex max-w-md flex-col gap-3 sm:flex-row">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 rounded-md border border-border bg-muted/30 px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-accent focus:outline-none"
          />
          <button
            type="button"
            className="rounded-md bg-accent px-5 py-2.5 text-sm font-medium text-background transition-opacity hover:opacity-90"
          >
            Stay Updated
          </button>
        </div>
      </div>
    </section>
  );
}

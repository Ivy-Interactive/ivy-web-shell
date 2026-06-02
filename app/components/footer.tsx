import Link from 'next/link';

const SECTIONS = [
  {
    title: 'Product',
    links: [
      { href: 'https://tendril.ivy.app', label: 'Documentation' },
      { href: '/product', label: 'Ivy Tendril' },
      { href: '/startups', label: 'For Startups' },
      { href: '/pricing', label: 'Pricing' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { href: '/benchmark-report', label: '2026 Benchmark Report' },
      { href: '/benchmark', label: 'Agentic Engineering Survey' },
      { href: '/ai-token-survey', label: 'AI Token Survey' },
    ],
  },
  {
    title: 'Company',
    links: [
      { href: '/about', label: 'About Us' },
      { href: '/career', label: 'Careers' },
      { href: '/press', label: 'Press' },
      { href: '/blog', label: 'Blog' },
    ],
  },
  {
    title: 'Support',
    links: [
      { href: '/contact', label: 'Contact' },
      { href: '/faq', label: 'FAQ' },
      { href: 'https://status.ivy.app', label: 'Status' },
    ],
  },
];

const LEGAL_LINKS = [
  { href: '/legal/terms-of-service', label: 'Terms of Service' },
  { href: '/legal/privacy-policy', label: 'Privacy Policy' },
];

const SOCIAL_LINKS = [
  { href: 'https://x.com/ivy_interactive', label: 'X' },
  {
    href: 'https://www.linkedin.com/company/ivy-interactive/',
    label: 'LinkedIn',
  },
  { href: 'https://discord.gg/CffzHm66BW', label: 'Discord' },
  { href: 'https://www.youtube.com/@IvyInteractive', label: 'YouTube' },
  { href: 'https://github.com/Ivy-Interactive/Ivy-Tendril', label: 'GitHub' },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-muted/20">
      <div className="mx-auto max-w-content px-4 py-16">
        <div className="grid gap-10 lg:grid-cols-[1.5fr_repeat(4,1fr)]">
          <div className="max-w-sm">
            <div className="flex items-center gap-2">
              <span className="flex h-7 w-7 items-center justify-center rounded-md bg-accent text-sm font-bold text-background">
                I
              </span>
              <span className="text-lg font-semibold tracking-tight">Ivy</span>
            </div>
            <p className="mt-4 text-sm text-muted-foreground">
              Ivy Tendril orchestrates AI agents to turn issues into pull
              requests — plan, code, and ship without friction.
            </p>
          </div>

          {SECTIONS.map((section) => (
            <div key={section.title}>
              <h3 className="text-sm font-medium">{section.title}</h3>
              <ul className="mt-4 space-y-2.5">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-border pt-8 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Ivy Interactive AB · SE559522603501</p>
          <div className="flex flex-wrap items-center gap-4">
            {LEGAL_LINKS.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="transition-colors hover:text-foreground"
              >
                {link.label}
              </Link>
            ))}
            <span className="text-border">|</span>
            {SOCIAL_LINKS.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="transition-colors hover:text-foreground"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

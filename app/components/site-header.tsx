import Link from 'next/link';

const NAV_ITEMS = [
  { label: 'Product', href: '/product' },
  { label: 'Resources', href: '/resources' },
  { label: 'About', href: '/about' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'Contact', href: '/contact' },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-content items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2">
          <span className="flex h-7 w-7 items-center justify-center rounded-md bg-accent text-sm font-bold text-background">
            I
          </span>
          <span className="text-lg font-semibold tracking-tight">Ivy</span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="https://github.com/Ivy-Interactive/Ivy-Tendril"
            className="hidden text-sm text-muted-foreground transition-colors hover:text-foreground sm:block"
          >
            GitHub
          </Link>
          <Link
            href="#getting-started"
            className="rounded-md bg-foreground px-4 py-2 text-sm font-medium text-background transition-opacity hover:opacity-90"
          >
            Download Tendril
          </Link>
        </div>
      </div>
    </header>
  );
}

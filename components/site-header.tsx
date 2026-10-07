import { salon } from '@/lib/salon'

const links = [
  { href: '#servizi', label: 'Servizi' },
  { href: '#galleria', label: 'Lavori' },
  { href: '#recensioni', label: 'Recensioni' },
  { href: '#dove-siamo', label: 'Dove siamo' },
]

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/70 backdrop-blur-xl supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-4 lg:px-10">
        <a
          href="#top"
          className="font-serif text-2xl font-semibold tracking-wide text-accent"
        >
          {salon.name}
        </a>

        <nav aria-label="Navigazione principale" className="hidden md:block">
          <ul className="flex items-center gap-9 text-sm text-foreground/70">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="transition-colors duration-300 hover:text-foreground"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <a
          href={salon.whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex h-10 items-center justify-center rounded-full bg-ink px-5 text-sm font-medium text-background transition-all duration-300 hover:-translate-y-0.5 hover:bg-accent hover:shadow-lg hover:shadow-accent/20 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
        >
          Prenota
        </a>
      </div>
    </header>
  )
}

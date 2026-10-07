import { salon } from '@/lib/salon'

const links = [
  { href: '#servizi', label: 'Servizi' },
  { href: '#galleria', label: 'Lavori' },
  { href: '#dove-siamo', label: 'Dove siamo' },
]

export function SiteHeader() {
  return (
    <header className="absolute inset-x-0 top-0 z-20">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
        <a
          href="#top"
          className="font-serif text-lg tracking-wide text-accent"
        >
          {salon.name}
        </a>
        <nav aria-label="Navigazione principale">
          <ul className="flex items-center gap-6 text-sm text-muted-foreground sm:gap-8">
            {links.map((link) => (
              <li key={link.href} className={link.href === '#galleria' ? 'hidden sm:block' : ''}>
                <a
                  href={link.href}
                  className="transition-colors hover:text-foreground"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}

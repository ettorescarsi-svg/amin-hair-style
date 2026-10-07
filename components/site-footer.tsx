import { salon } from '@/lib/salon'

export function SiteFooter() {
  return (
    <footer className="bg-ink text-[#f3eee5]">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
        <div className="flex flex-col justify-between gap-10 border-b border-white/10 pb-12 md:flex-row md:items-end">
          <p className="max-w-md font-serif text-4xl leading-tight text-balance">
            Il tuo stile, <span className="italic text-gold">curato</span> con
            passione.
          </p>
          <a
            href={salon.whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-12 w-fit items-center justify-center rounded-full border border-gold/60 px-7 text-sm font-medium text-gold transition-all duration-300 hover:-translate-y-0.5 hover:bg-gold hover:text-ink hover:shadow-lg hover:shadow-gold/20 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
          >
            Prenota un appuntamento
          </a>
        </div>
        <div className="flex flex-col items-start justify-between gap-2 pt-8 text-sm text-[#f3eee5]/60 sm:flex-row">
          <p>
            © {new Date().getFullYear()} {salon.name}
          </p>
          <p>{salon.address}</p>
        </div>
      </div>
    </footer>
  )
}

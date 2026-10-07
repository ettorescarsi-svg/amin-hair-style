import { Clock, MapPin, Navigation, Phone } from 'lucide-react'
import { OpeningHours } from '@/components/opening-hours'
import { salon } from '@/lib/salon'

export function Location() {
  return (
    <section
      id="dove-siamo"
      className="mx-auto max-w-7xl scroll-mt-20 px-6 py-24 sm:py-32 lg:px-10"
    >
      <div className="mb-14">
        <p className="mb-4 text-xs font-medium uppercase tracking-[0.35em] text-accent">
          Contatti
        </p>
        <h2 className="font-serif text-5xl font-medium leading-none tracking-tight text-balance sm:text-6xl">
          Dove siamo <span className="italic text-accent">&amp; orari</span>
        </h2>
      </div>

      <div className="grid gap-6 lg:grid-cols-12">
        <div className="overflow-hidden rounded-3xl border border-border bg-card lg:col-span-7">
          <iframe
            title="Mappa di Amin Hair Style in Via Savona 6, Padova"
            src={salon.mapEmbedSrc}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
            className="h-80 w-full border-0 grayscale-[0.5] sepia-[0.15] lg:h-full lg:min-h-[520px]"
          />
        </div>

        <div className="flex flex-col rounded-3xl border border-border bg-card p-8 sm:p-10 lg:col-span-5">
          <div className="flex items-start gap-4">
            <MapPin className="mt-0.5 size-5 shrink-0 text-accent" aria-hidden="true" />
            <address className="text-sm not-italic leading-relaxed">
              <span className="block font-serif text-2xl font-semibold text-foreground">
                {salon.name}
              </span>
              <span className="text-foreground/65">{salon.address}</span>
            </address>
          </div>

          <div className="mt-5 flex items-center gap-4">
            <Phone className="size-5 shrink-0 text-accent" aria-hidden="true" />
            <a
              href={salon.phoneHref}
              className="text-sm text-foreground transition-colors hover:text-accent"
            >
              {salon.phoneDisplay}
            </a>
          </div>

          <div className="mt-10 flex items-center gap-3">
            <Clock className="size-5 shrink-0 text-accent" aria-hidden="true" />
            <h3 className="text-xs font-medium uppercase tracking-[0.25em]">
              Orari di apertura
            </h3>
          </div>
          <div className="mt-3">
            <OpeningHours />
          </div>

          <a
            href={salon.directionsHref}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 inline-flex h-12 items-center justify-center gap-2 rounded-full bg-ink px-6 text-sm font-medium text-background transition-all duration-300 hover:-translate-y-0.5 hover:bg-accent hover:shadow-lg hover:shadow-accent/25 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
          >
            <Navigation className="size-4" aria-hidden="true" />
            Calcola percorso
          </a>
        </div>
      </div>
    </section>
  )
}

import { Clock, MapPin, Navigation, Phone } from 'lucide-react'
import { OpeningHours } from '@/components/opening-hours'
import { salon } from '@/lib/salon'

export function Location() {
  return (
    <section
      id="dove-siamo"
      className="mx-auto max-w-6xl scroll-mt-8 px-6 py-24 sm:py-32"
    >
      <div className="mb-14 max-w-xl">
        <p className="mb-3 text-xs uppercase tracking-[0.35em] text-primary">
          Contatti
        </p>
        <h2 className="font-serif text-4xl font-medium tracking-tight text-balance sm:text-5xl">
          Dove siamo &amp; orari
        </h2>
      </div>

      <div className="grid gap-6 lg:grid-cols-5">
        <div className="overflow-hidden rounded-2xl border border-border bg-card lg:col-span-3">
          <iframe
            title="Mappa di Amin Hair Style in Via Savona 6, Padova"
            src={salon.mapEmbedSrc}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
            className="h-80 w-full border-0 grayscale-[0.4] invert-[0.92] hue-rotate-180 lg:h-full lg:min-h-[480px]"
          />
        </div>

        <div className="flex flex-col rounded-2xl border border-border bg-card p-8 lg:col-span-2">
          <div className="flex items-start gap-4">
            <MapPin className="mt-0.5 size-5 shrink-0 text-primary" aria-hidden="true" />
            <address className="text-sm not-italic leading-relaxed">
              <span className="block font-medium text-foreground">
                {salon.name}
              </span>
              <span className="text-muted-foreground">{salon.address}</span>
            </address>
          </div>

          <div className="mt-5 flex items-center gap-4">
            <Phone className="size-5 shrink-0 text-primary" aria-hidden="true" />
            <a
              href={salon.phoneHref}
              className="text-sm text-foreground transition-colors hover:text-primary"
            >
              {salon.phoneDisplay}
            </a>
          </div>

          <div className="mt-8 flex items-center gap-3">
            <Clock className="size-5 shrink-0 text-primary" aria-hidden="true" />
            <h3 className="text-sm font-medium uppercase tracking-wider">
              Orari di apertura
            </h3>
          </div>
          <div className="mt-2">
            <OpeningHours />
          </div>

          <a
            href={salon.directionsHref}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex h-12 items-center justify-center gap-2 rounded-full bg-primary px-6 text-sm font-medium text-primary-foreground transition-transform hover:scale-[1.02] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
          >
            <Navigation className="size-4" aria-hidden="true" />
            Calcola Percorso
          </a>
        </div>
      </div>
    </section>
  )
}

import Image from 'next/image'
import { MapPin, MessageCircle, Phone, Star } from 'lucide-react'
import { galleryImages, salon } from '@/lib/salon'

const [tall, wide, square] = galleryImages

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-background">
      <div className="mx-auto max-w-7xl px-6 pb-20 pt-10 lg:px-10 lg:pb-28 lg:pt-14">
        <div className="mb-14 flex flex-wrap items-center gap-x-6 gap-y-2 border-b border-border pb-5 text-xs uppercase tracking-[0.22em] text-foreground/60">
          <span className="inline-flex items-center gap-2">
            <MapPin className="size-3.5 text-accent" aria-hidden="true" />
            Via Savona 6, Padova
          </span>
          <span aria-hidden="true" className="hidden h-3 w-px bg-border sm:block" />
          <span>Lun – Sab · 08:30 – 20:00</span>
        </div>

        <div className="grid items-center gap-16 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-6">
            <p className="mb-6 text-xs font-medium uppercase tracking-[0.35em] text-accent">
              Salone di bellezza unisex
            </p>
            <h1 className="font-serif text-6xl font-medium leading-[0.95] tracking-tight text-foreground text-balance sm:text-7xl lg:text-8xl">
              L&apos;arte del{' '}
              <span className="italic text-accent">capello</span>, con
              carattere.
            </h1>
            <p className="mt-8 max-w-md text-pretty text-base leading-relaxed text-foreground/70 sm:text-lg">
              Taglio, colore e cura per uomo e donna in un ambiente raccolto e
              contemporaneo, nel cuore di Padova.
            </p>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:gap-4">
              <a
                href={salon.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-14 items-center justify-center gap-3 rounded-full bg-ink px-8 text-sm font-medium tracking-wide text-background transition-all duration-300 hover:-translate-y-0.5 hover:bg-accent hover:shadow-xl hover:shadow-accent/25 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
              >
                <MessageCircle className="size-4" aria-hidden="true" />
                Prenota su WhatsApp
              </a>
              <a
                href={salon.phoneHref}
                className="inline-flex h-14 items-center justify-center gap-3 rounded-full border border-foreground/20 px-8 text-sm font-medium tracking-wide text-foreground transition-all duration-300 hover:-translate-y-0.5 hover:border-accent hover:text-accent hover:shadow-lg hover:shadow-accent/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
              >
                <Phone className="size-4" aria-hidden="true" />
                Chiama il salone
              </a>
            </div>
          </div>

          <div className="relative lg:col-span-6">
            <div className="grid grid-cols-12 grid-rows-[auto] gap-3 sm:gap-4">
              <div className="relative col-span-7 row-span-2 aspect-[3/4] overflow-hidden rounded-t-[999px] rounded-b-2xl bg-secondary">
                <Image
                  src={tall.src}
                  alt={tall.alt}
                  fill
                  priority
                  sizes="(min-width: 1024px) 30vw, 55vw"
                  className="object-cover"
                />
              </div>
              <div className="relative col-span-5 aspect-square self-end overflow-hidden rounded-2xl bg-secondary">
                <Image
                  src={wide.src}
                  alt={wide.alt}
                  fill
                  priority
                  sizes="(min-width: 1024px) 20vw, 40vw"
                  className="object-cover"
                />
              </div>
              <div className="relative col-span-5 aspect-[4/5] overflow-hidden rounded-2xl bg-secondary">
                <Image
                  src={square.src}
                  alt={square.alt}
                  fill
                  sizes="(min-width: 1024px) 20vw, 40vw"
                  className="object-cover"
                />
              </div>
            </div>

            <a
              href="https://www.google.com/maps/search/?api=1&query=Amin+Hair+Style+Via+Savona+6+Padova"
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Valutazione ${salon.rating} su 5 basata su ${salon.reviews} recensioni Google`}
              className="absolute -bottom-6 left-4 flex items-center gap-4 rounded-2xl border border-border bg-card/95 px-5 py-4 shadow-xl shadow-foreground/5 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl sm:left-auto sm:right-6"
            >
              <span className="font-serif text-4xl font-semibold leading-none text-foreground">
                {salon.rating}
              </span>
              <span className="flex flex-col gap-1">
                <span className="flex gap-0.5 text-accent" aria-hidden="true">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`size-3.5 fill-current ${i < 4 ? '' : 'opacity-40'}`}
                    />
                  ))}
                </span>
                <span className="text-xs text-foreground/60">
                  {salon.reviews} recensioni Google
                </span>
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

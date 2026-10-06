import { MessageCircle, Phone, Star } from 'lucide-react'
import { salon } from '@/lib/salon'

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-svh items-center justify-center overflow-hidden bg-[#f7f6f3]"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(193,161,103,0.16),transparent_60%)]"
      />
      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent"
      />

      <div className="relative mx-auto flex max-w-3xl flex-col items-center px-6 py-32 text-center">
        <a
          href="https://www.google.com/maps/search/?api=1&query=Amin+Hair+Style+Via+Savona+6+Padova"
          target="_blank"
          rel="noopener noreferrer"
          className="mb-10 inline-flex items-center gap-2 rounded-full border border-[#d9d2c5] bg-white/80 px-4 py-2 text-sm text-[#252321] shadow-sm backdrop-blur transition-colors hover:border-primary/50"
          aria-label={`Valutazione ${salon.rating} su 5 basata su ${salon.reviews} recensioni Google`}
        >
          <span className="flex items-center gap-0.5 text-primary" aria-hidden="true">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                className={`size-3.5 ${i < 4 ? 'fill-current' : 'fill-current opacity-50'}`}
              />
            ))}
          </span>
          <span className="font-medium text-foreground">{salon.rating}</span>
          <span className="text-muted-foreground">
            · {salon.reviews} recensioni Google
          </span>
        </a>

        <p className="mb-4 text-xs uppercase tracking-[0.35em] text-primary">
          Salone di bellezza unisex · Padova
        </p>
        <h1 className="font-serif text-5xl font-medium leading-[1.05] tracking-tight text-[#252321] text-balance sm:text-7xl">
          {salon.name}
        </h1>
        <p className="mt-6 max-w-xl text-pretty text-base leading-relaxed text-[#625d57] sm:text-lg">
          Il tuo salone di bellezza unisex a Padova. Stile, cura e benessere per uomo e donna, in un ambiente elegante e contemporaneo.
        </p>

        <div className="mt-10 flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:gap-4">
          <a
            href={salon.whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-14 items-center justify-center gap-3 rounded-full bg-primary px-8 text-base font-medium text-primary-foreground transition-transform hover:scale-[1.02] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
          >
            <MessageCircle className="size-5" aria-hidden="true" />
            Prenota su WhatsApp
          </a>
          <a
            href={salon.phoneHref}
            className="inline-flex h-14 items-center justify-center gap-3 rounded-full border border-[#c9c0b2] bg-white/50 px-8 text-base font-medium text-[#252321] transition-colors hover:border-primary/60 hover:bg-card focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
          >
            <Phone className="size-5" aria-hidden="true" />
            Chiama Salone
          </a>
        </div>

        <p className="mt-8 text-sm text-[#625d57]">
          Lun – Sab · 08:30 – 20:00
        </p>
      </div>
    </section>
  )
}

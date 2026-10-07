import { Heart, Leaf, ShieldCheck, Sparkles } from 'lucide-react'

const badges = [
  { icon: Leaf, title: 'Prodotti organici', text: 'Formule delicate per capelli e cute' },
  { icon: Sparkles, title: 'Trattamenti specifici', text: 'Un rituale pensato per ogni capello' },
  { icon: ShieldCheck, title: 'Garanzia di cura', text: 'Soddisfatti o rifacciamo il servizio' },
  { icon: Heart, title: 'Consulenza dedicata', text: 'Ascolto prima di ogni forbice' },
]

export function TrustBadges() {
  return (
    <section
      aria-label="I nostri impegni"
      className="border-y border-border bg-secondary/60"
    >
      <ul className="mx-auto grid max-w-7xl gap-px px-6 sm:grid-cols-2 lg:grid-cols-4 lg:px-10">
        {badges.map(({ icon: Icon, title, text }) => (
          <li
            key={title}
            className="flex items-start gap-4 py-8 lg:px-6 lg:first:pl-0"
          >
            <span className="flex size-11 shrink-0 items-center justify-center rounded-full border border-accent/30 text-accent">
              <Icon className="size-5" aria-hidden="true" />
            </span>
            <span>
              <span className="block font-serif text-xl font-semibold text-foreground">
                {title}
              </span>
              <span className="mt-0.5 block text-sm leading-relaxed text-foreground/65">
                {text}
              </span>
            </span>
          </li>
        ))}
      </ul>
    </section>
  )
}

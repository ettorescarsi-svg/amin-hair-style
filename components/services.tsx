import { Scissors, Sparkles, Wind } from 'lucide-react'
import { serviceCategories } from '@/lib/salon'

const icons = [Scissors, Wind, Sparkles]

export function Services() {
  return (
    <section id="servizi" className="mx-auto max-w-6xl scroll-mt-8 px-6 py-24 sm:py-32">
      <div className="mb-14 max-w-xl">
        <p className="mb-3 text-xs uppercase tracking-[0.35em] text-primary">
          Listino
        </p>
        <h2 className="font-serif text-4xl font-medium tracking-tight text-balance sm:text-5xl">
          I nostri servizi
        </h2>
        <p className="mt-4 text-muted-foreground">
          Prezzi indicativi, possono variare in base al lavoro richiesto.
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {serviceCategories.map((category, index) => {
          const Icon = icons[index]
          return (
            <article
              key={category.title}
              className="flex flex-col rounded-2xl border border-border bg-card p-8"
            >
              <Icon className="mb-6 size-6 text-primary" aria-hidden="true" />
              <h3 className="font-serif text-2xl font-medium">
                {category.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {category.description}
              </p>
              <ul className="mt-8 flex flex-col divide-y divide-border">
                {category.items.map((item) => (
                  <li
                    key={item.name}
                    className="flex items-baseline justify-between gap-4 py-3.5 text-sm"
                  >
                    <span className="text-foreground">{item.name}</span>
                    <span className="shrink-0 font-medium tabular-nums text-primary">
                      <span className="sr-only">circa </span>
                      {'€ '}
                      {item.price}
                    </span>
                  </li>
                ))}
              </ul>
            </article>
          )
        })}
      </div>
    </section>
  )
}

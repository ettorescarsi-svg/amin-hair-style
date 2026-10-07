'use client'

import { useState } from 'react'
import { Scissors, Sparkles, Wind } from 'lucide-react'
import { serviceCategories } from '@/lib/salon'

const icons = [Scissors, Wind, Sparkles]

export function Services() {
  const [active, setActive] = useState(0)
  const category = serviceCategories[active]

  return (
    <section
      id="servizi"
      className="scroll-mt-20 bg-ink py-24 text-[#f3eee5] sm:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid gap-16 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-5">
            <p className="mb-4 text-xs font-medium uppercase tracking-[0.35em] text-gold">
              Listino
            </p>
            <h2 className="font-serif text-5xl font-medium leading-none tracking-tight text-balance sm:text-6xl">
              I nostri <span className="italic text-gold">servizi</span>
            </h2>
            <p className="mt-6 max-w-sm leading-relaxed text-[#f3eee5]/65">
              Prezzi indicativi, possono variare in base alla lunghezza e al
              lavoro richiesto.
            </p>

            <div
              role="tablist"
              aria-label="Categorie di servizi"
              className="mt-12 flex flex-col border-t border-white/10"
            >
              {serviceCategories.map((cat, index) => {
                const Icon = icons[index]
                const isActive = index === active
                return (
                  <button
                    key={cat.title}
                    role="tab"
                    type="button"
                    id={`tab-${index}`}
                    aria-selected={isActive}
                    aria-controls="service-panel"
                    onClick={() => setActive(index)}
                    className={`group flex items-center gap-4 border-b border-white/10 py-5 text-left transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold ${
                      isActive
                        ? 'pl-4 text-gold'
                        : 'text-[#f3eee5]/60 hover:pl-2 hover:text-[#f3eee5]'
                    }`}
                  >
                    <Icon className="size-5 shrink-0" aria-hidden="true" />
                    <span className="font-serif text-2xl font-medium">
                      {cat.title}
                    </span>
                    <span
                      aria-hidden="true"
                      className={`ml-auto h-px bg-gold transition-all duration-500 ${
                        isActive ? 'w-10' : 'w-0'
                      }`}
                    />
                  </button>
                )
              })}
            </div>
          </div>

          <div
            role="tabpanel"
            id="service-panel"
            aria-labelledby={`tab-${active}`}
            className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 sm:p-12 lg:col-span-7"
          >
            <h3 className="font-serif text-4xl font-medium">{category.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-[#f3eee5]/60">
              {category.description}
            </p>
            <ul className="mt-10 flex flex-col divide-y divide-white/10 border-t border-white/10">
              {category.items.map((item) => (
                <li
                  key={item.name}
                  className="flex items-baseline gap-4 py-5 transition-colors duration-300 hover:text-white"
                >
                  <span className="text-base">{item.name}</span>
                  <span
                    aria-hidden="true"
                    className="min-w-6 flex-1 border-b border-dotted border-white/15"
                  />
                  <span className="shrink-0 font-serif text-3xl font-semibold tabular-nums text-gold">
                    <span className="sr-only">circa </span>
                    {'€'}
                    {item.price}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

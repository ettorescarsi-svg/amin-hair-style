'use client'

import { useRef } from 'react'
import { ChevronLeft, ChevronRight, Star } from 'lucide-react'
import { reviews, salon } from '@/lib/salon'

export function Reviews() {
  const trackRef = useRef<HTMLUListElement>(null)

  const scrollByCard = (direction: 1 | -1) => {
    const track = trackRef.current
    if (!track) return
    const card = track.querySelector('li')
    const step = card ? card.getBoundingClientRect().width + 20 : 360
    track.scrollBy({ left: step * direction, behavior: 'smooth' })
  }

  return (
    <section
      id="recensioni"
      className="scroll-mt-20 border-y border-border bg-secondary/50 py-24 sm:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mb-12 flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <div>
            <p className="mb-4 text-xs font-medium uppercase tracking-[0.35em] text-accent">
              Recensioni
            </p>
            <h2 className="font-serif text-5xl font-medium leading-none tracking-tight text-balance sm:text-6xl">
              Dicono di <span className="italic text-accent">noi</span>
            </h2>
            <p className="mt-5 text-sm text-foreground/65">
              {salon.rating} su 5 · {salon.reviews} recensioni su Google
            </p>
          </div>

          <div className="flex gap-3">
            <button
              type="button"
              onClick={() => scrollByCard(-1)}
              aria-label="Recensioni precedenti"
              className="flex size-12 items-center justify-center rounded-full border border-foreground/20 text-foreground transition-all duration-300 hover:-translate-y-0.5 hover:border-accent hover:text-accent hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
            >
              <ChevronLeft className="size-5" aria-hidden="true" />
            </button>
            <button
              type="button"
              onClick={() => scrollByCard(1)}
              aria-label="Recensioni successive"
              className="flex size-12 items-center justify-center rounded-full border border-foreground/20 text-foreground transition-all duration-300 hover:-translate-y-0.5 hover:border-accent hover:text-accent hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
            >
              <ChevronRight className="size-5" aria-hidden="true" />
            </button>
          </div>
        </div>

        <ul
          ref={trackRef}
          className="scrollbar-none -mx-6 flex snap-x snap-mandatory gap-5 overflow-x-auto px-6 pb-2 lg:mx-0 lg:px-0"
        >
          {reviews.map((review) => (
            <li
              key={review.name}
              className="flex w-[85%] shrink-0 snap-start flex-col rounded-2xl border border-border bg-card p-8 transition-shadow duration-300 hover:shadow-lg hover:shadow-foreground/5 sm:w-[380px]"
            >
              <div
                className="flex gap-0.5 text-accent"
                role="img"
                aria-label={`${review.rating} stelle su 5`}
              >
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    aria-hidden="true"
                    className={`size-4 ${i < review.rating ? 'fill-current' : 'opacity-30'}`}
                  />
                ))}
              </div>
              <blockquote className="mt-5 flex-1 font-serif text-xl leading-snug text-foreground">
                &ldquo;{review.text}&rdquo;
              </blockquote>
              <footer className="mt-8 flex items-center gap-3 border-t border-border pt-5">
                <span
                  aria-hidden="true"
                  className="flex size-10 items-center justify-center rounded-full bg-ink text-xs font-medium tracking-wider text-gold"
                >
                  {review.initials}
                </span>
                <span className="flex flex-col">
                  <span className="text-sm font-medium text-foreground">
                    {review.name}
                  </span>
                  <span className="text-xs text-foreground/60">
                    {review.meta}
                  </span>
                </span>
              </footer>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

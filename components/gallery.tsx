import Image from 'next/image'
import { galleryImages } from '@/lib/salon'

const layout = [
  'aspect-[4/5] md:col-span-5 md:row-span-2 md:aspect-auto',
  'aspect-[4/3] md:col-span-4 md:aspect-auto',
  'aspect-[4/3] md:col-span-3 md:aspect-auto',
  'aspect-[4/3] md:col-span-3 md:aspect-auto',
  'aspect-[4/3] md:col-span-4 md:aspect-auto',
]

export function Gallery() {
  return (
    <section id="galleria" className="scroll-mt-20 bg-background py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="mb-4 text-xs font-medium uppercase tracking-[0.35em] text-accent">
              Galleria
            </p>
            <h2 className="font-serif text-5xl font-medium leading-none tracking-tight text-balance sm:text-6xl">
              I nostri <span className="italic text-accent">lavori</span>
            </h2>
          </div>
          <p className="max-w-xs text-sm leading-relaxed text-foreground/65">
            Tagli, pieghe e colori realizzati in salone, senza filtri.
          </p>
        </div>

        <ul className="grid grid-cols-1 gap-4 md:grid-cols-12 md:auto-rows-[220px]">
          {galleryImages.map((image, index) => (
            <li
              key={image.src}
              className={`group relative overflow-hidden rounded-2xl bg-secondary ${layout[index] ?? ''}`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(min-width: 768px) 40vw, 100vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-100"
              />
              <span className="absolute bottom-4 left-5 font-serif text-xl font-medium text-white">
                {image.label}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

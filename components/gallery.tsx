import Image from 'next/image'
import { galleryImages } from '@/lib/salon'

export function Gallery() {
  return (
    <section
      id="galleria"
      className="scroll-mt-8 border-y border-border bg-card/40 py-24 sm:py-32"
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-14 max-w-xl">
          <p className="mb-3 text-xs uppercase tracking-[0.35em] text-primary">
            Galleria
          </p>
          <h2 className="font-serif text-4xl font-medium tracking-tight text-balance sm:text-5xl">
            I nostri lavori
          </h2>
        </div>

        <ul className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4 md:gap-4">
          {galleryImages.map((image, index) => {
            const isLastOddImage = galleryImages.length % 2 !== 0 && index === galleryImages.length - 1

            return (
              <li
                key={image.src}
                className={`group relative aspect-square overflow-hidden rounded-xl bg-muted ${
                  isLastOddImage ? 'col-span-2 md:col-span-1 lg:col-span-1' : 'md:col-span-1 lg:col-span-1'
                } ${image.className}`}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={600}
                  height={600}
                  sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 50vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"
                />
                <span className="absolute bottom-4 left-4 text-sm font-medium text-white">
                  {image.label}
                </span>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}

import { Gallery } from '@/components/gallery'
import { Hero } from '@/components/hero'
import { Location } from '@/components/location'
import { Reviews } from '@/components/reviews'
import { Services } from '@/components/services'
import { SiteFooter } from '@/components/site-footer'
import { SiteHeader } from '@/components/site-header'
import { TrustBadges } from '@/components/trust-badges'

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <TrustBadges />
        <Services />
        <Gallery />
        <Reviews />
        <Location />
      </main>
      <SiteFooter />
    </>
  )
}

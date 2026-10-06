import { Gallery } from '@/components/gallery'
import { Hero } from '@/components/hero'
import { Location } from '@/components/location'
import { Services } from '@/components/services'
import { SiteFooter } from '@/components/site-footer'
import { SiteHeader } from '@/components/site-header'

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <Services />
        <Gallery />
        <Location />
      </main>
      <SiteFooter />
    </>
  )
}

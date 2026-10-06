import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
})

export const metadata: Metadata = {
  title: 'Amin Hair Style | Parrucchiere e Barber a Padova',
  description:
    'Amin Hair Style, salone di parrucchiere e barber in Via Savona 6 a Padova. Taglio, styling, barba e colore. 4.5 stelle su Google. Prenota su WhatsApp o chiama ora.',
  keywords: [
    'parrucchiere Padova',
    'barbiere Padova',
    'Amin Hair Style',
    'taglio uomo Padova',
    'barba Padova',
  ],
  openGraph: {
    title: 'Amin Hair Style | Parrucchiere e Barber a Padova',
    description:
      'Taglio, barba, styling e colore in Via Savona 6, Padova. Prenota su WhatsApp.',
    locale: 'it_IT',
    type: 'website',
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#161412',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="it"
      className={`dark ${inter.variable} ${playfair.variable}`}
    >
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}

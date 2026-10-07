import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Cormorant_Garamond, Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
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
        url: '/icon.png',
        type: 'image/png',
      },
    ],
    apple: '/icon.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#FBF9F5',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="it"
      className={`${inter.variable} ${cormorant.variable}`}
    >
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}

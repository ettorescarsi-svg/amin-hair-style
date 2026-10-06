export const salon = {
  name: 'Amin Hair Style',
  rating: 4.5,
  reviews: 137,
  address: 'Via Savona, 6, 35142 Padova PD',
  phoneDisplay: '327 191 8200',
  phoneHref: 'tel:3271918200',
  whatsappHref:
    'https://wa.me/393271918200?text=Ciao%2C%20vorrei%20prenotare%20un%20appuntamento%20da%20Amin%20Hair%20Style.',
  directionsHref:
    'https://www.google.com/maps/dir/?api=1&destination=Via+Savona+6,+35142+Padova+PD',
  mapEmbedSrc:
    'https://www.google.com/maps?q=Via+Savona+6,+35142+Padova+PD&output=embed',
}

export const serviceCategories = [
  {
    title: 'Donna',
    description: 'Tagli, pieghe e trattamenti per valorizzare ogni stile.',
    items: [
      { name: 'Taglio & piega', price: '35' },
      { name: 'Colore & balayage', price: '55' },
      { name: 'Trattamento cheratina', price: '70' },
      { name: 'Trattamento rigenerante', price: '30' },
    ],
  },
  {
    title: 'Uomo & Barba',
    description: 'Precisione, carattere e cura per il tuo look quotidiano.',
    items: [
      { name: 'Taglio uomo', price: '20' },
      { name: 'Modellatura barba', price: '12' },
      { name: 'Taglio + barba', price: '28' },
      { name: 'Trattamento cuoio capelluto', price: '25' },
    ],
  },
  {
    title: 'Estetica / Speciali',
    description: 'Piccoli rituali di benessere per una bellezza completa.',
    items: [
      { name: 'Trattamento viso', price: '35' },
      { name: 'Idratante express', price: '20' },
      { name: 'Detersione profonda', price: '25' },
    ],
  },
]

export const galleryImages = [
  {
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/foto%20capelli%20uomo-GZWSeCVWthvymX5XENRqakKjempAyP.webp',
    alt: 'Taglio uomo con capelli scuri pettinati all\'indietro nel salone',
    label: 'Taglio uomo',
    className: '',
  },
  {
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/foto%20capelli%202-0y7WHNFqBLry9SuCF0Lzg6FMUu7nms.webp',
    alt: 'Acconciatura femminile con treccia aderente e lunga treccia',
    label: 'Acconciatura',
    className: '',
  },
  {
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/foto%20capelli%20mossi-SFYzcambJQxnUvjJpQsnKYCVcdD3GY.webp',
    alt: 'Capelli biondi lunghi con onde morbide e luminose',
    label: 'Piega mossa',
    className: '',
  },
  {
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/foto%20colore-lS7x8rViTX14cDIThbVB6awXLUg03a.webp',
    alt: 'Capelli lunghi lisci con colore prugna intenso',
    label: 'Colore',
    className: '',
  },
  {
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/cavei-8GzTQs7PgqRs3Il6aOfztHsxJTGWih.webp',
    alt: 'Capelli biondo freddo con onde morbide e luminose viste da dietro',
    label: 'Onde luminose',
    className: '',
  },
]

export const weeklyHours = [
  { day: 'Lunedì', hours: '08:30 – 20:00' },
  { day: 'Martedì', hours: '08:30 – 20:00' },
  { day: 'Mercoledì', hours: '08:30 – 20:00' },
  { day: 'Giovedì', hours: '08:30 – 20:00' },
  { day: 'Venerdì', hours: '08:30 – 20:00' },
  { day: 'Sabato', hours: '08:30 – 20:00' },
  { day: 'Domenica', hours: 'Chiuso' },
]

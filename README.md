# Amin Hair Style

Sito statico Astro + TypeScript. Node 22.12+; installazione con `npm ci`.

- `npm run dev` — anteprima locale.
- `npm run check` — controllo Astro e TypeScript.
- `npm run build` — produzione statica in `dist/`.
- `npm run preview` — verifica della build.

## Personalizzazione

Dati, servizi, listino, recensioni e orari: `lib/salon.ts`. Fotografie: `src/assets/` e `src/data/images.ts`. Componenti: `src/components/`. Palette, font e spaziature: token in `src/styles/global.css`. Dominio canonico: `astro.config.mjs`. Metadati e schema locale: `src/layouts/Layout.astro`; sincronizzare lo schema orari se cambia l'apertura. I testi editoriali sono nei componenti.

Font ospitati localmente con licenze OFL in `public/fonts/`. Le fotografie provengono dal sito originale: prima della vendita verificare diritti e disponibilità di originali ad alta risoluzione. Confermare listino (in particolare taglio uomo €67), recensioni e dati commerciali prima di pubblicare.

WhatsApp, telefono, indicazioni, listino e navigazione funzionano anche senza JavaScript. JavaScript aggiunge messaggio per servizio selezionato, lightbox, scorrimento recensioni, giorno corrente e mappa caricata su richiesta. Analytics Vercel conservate solo in produzione.

Per Vercel selezionare preset **Astro**, build `npm run build`, output `dist`, rimuovendo eventuali override Next.js nel pannello. Nessun deploy automatico è stato configurato. Push e pubblicazione richiedono autorizzazione.

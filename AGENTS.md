# Amin Hair Style — istruzioni per gli agenti

Sito per parrucchieri destinato alla vendita commerciale, con obiettivo di posizionamento intorno a 600 €. Priorità: prenotazioni WhatsApp, identità riconoscibile, accessibilità, velocità e manutenzione semplice. Mantieni elevata la qualità del codice limitando operazioni, contesto e consumo di crediti.

## Tecnologie e stato del progetto

Le tecnologie principali richieste sono **Astro e TypeScript**. Preferisci componenti Astro statici quando non serve JavaScript lato client; aggiungi interattività soltanto dove necessaria.

**Stato verificato:** progetto migrato ad Astro e TypeScript con output statico e CSS nativo. Usa `npm run check` e `npm run build`; non reintrodurre Next.js/React senza necessità concreta. Dati in `lib/salon.ts`, componenti in `src/components/`, token in `src/styles/global.css`.

## Selezione delle skill

**Disponibilità verificata il 22 ottobre 2026:** i tre `SKILL.md` sono leggibili nelle cartelle temporanee prodotte da `npx skills use`; non risultano installati in `.agents/skills`, `.codex/skills` del progetto o nella directory personale delle skill Codex. Taste e Impeccable hanno file di supporto; Emil contiene soltanto `SKILL.md`. Il motore Impeccable non è stato avviato con successo. Non confondere istruzioni disponibili, installazione persistente e strumenti funzionanti.

Prima di usare una skill, verifica il percorso disponibile e leggi il suo `SKILL.md`; risolvi i riferimenti dalla sua directory. Riutilizza letture già effettuate se il contenuto non è cambiato. Se i file temporanei sono scomparsi, segnala il problema e recupera solo la skill necessaria; non avviare installazioni a ogni richiesta.

| Compito | Skill principale | Limite del lavoro |
| --- | --- | --- |
| Direzione artistica, identità, redesign significativo | `design-taste-frontend` | Definisci una sola direzione, gerarchia, palette, tipografia e trattamento delle foto. Non avviare anche il workflow creativo `new-work` di Impeccable. |
| Implementazione Astro/TypeScript, contenuti o correzioni tecniche semplici | Nessuna per impostazione predefinita | Riusa la direzione e i componenti già definiti; consulta una skill solo per un problema pertinente. |
| Interazioni, feedback dei controlli, microanimazioni | `emil-design-eng` | Lavora sui componenti interessati. Preferisci CSS e TypeScript nativi; gli esempi React/Motion non impongono React, hydration o nuove librerie. |
| Controllo finale di accessibilità, responsive, prestazioni e coerenza | `impeccable` | Usa `audit` per individuare problemi, `polish` solo per correggere quelli nello scope. Preserva la direzione approvata. |

### Conflitti e precedenze

- Le istruzioni dell'utente e i vincoli di progetto prevalgono sui workflow delle skill. Non caricare tutte e tre per ogni richiesta e non dichiarare conformità integrale quando si applica solo una fase.
- **Motion:** Taste richiede almeno otto elementi animati e ingressi per sezione; Emil valuta utilità e frequenza; Impeccable privilegia un momento espressivo. Per questo progetto scegli movimento utile, leggero e compatibile con reduced motion: nessuna quota numerica di animazioni, contenuti sempre accessibili. Segnala gli eventuali fallimenti del controllo Taste derivanti da questa eccezione.
- **Stile:** Taste e Impeccable differiscono su bordi, ombre, raggi, dimensioni tipografiche ed effetti. Mantieni i token e la direzione approvati; non alternare prescrizioni incompatibili durante il polish. Accessibilità e leggibilità restano vincoli.
- **Workflow:** evita un secondo giro di concept, audit duplicati e documentazione estesa automatica. Riusa screenshot, decisioni e risultati finché pertinenti alla versione corrente; ripeti i controlli invalidati dalle modifiche. Nessun reviewer/documenter parallelo automatico per attività semplici.
- **Strumenti:** il lint Taste include `.astro`; il suo inspector richiede Node 22+ e Chrome/Edge/Chromium e lavora sul sito renderizzato. Impeccable usa un motore separato: la copertura del suo detector su sorgenti Astro va verificata, non presunta. Se il launcher fallisce, applica il fallback manuale documentato e dichiara i controlli mancanti. Questi tool non sostituiscono build e controllo dei tipi Astro.

## Regole operative

1. Seleziona la skill secondo la tabella e leggi soltanto i riferimenti necessari alla fase corrente.
2. Leggi soltanto i file necessari alla richiesta corrente. Preferisci ricerche mirate ed evita scansioni complete ripetute del repository.
3. Riutilizza i componenti esistenti quando appropriato, rispettando convenzioni e struttura del progetto.
4. Non installare nuove dipendenze senza una necessità concreta; verifica prima le funzionalità già disponibili.
5. Non utilizzare subagenti paralleli per attività semplici.
6. Evita documentazione lunga se non richiesta.
7. Esegui test mirati sui file e sui comportamenti modificati. Prima di una pubblicazione autorizzata, esegui un controllo completo: build di produzione, controlli di tipi e test disponibili, verifica responsive, accessibilità di base e flusso di prenotazione. Non dichiarare verifiche non eseguite e segnala eventuali blocchi.
8. Mantieni risposte concise, spiegando modifiche, verifiche effettuate ed eventuali problemi.
9. Modifica soltanto file pertinenti alla richiesta; preserva modifiche preesistenti e istruzioni importanti.
10. Non effettuare push o deploy senza autorizzazione esplicita dell'utente. La richiesta di modificare il codice non autorizza la pubblicazione.

Per un prodotto commerciale, preserva i dati reali del salone, i contatti e le prenotazioni; non inventare prezzi, recensioni o altre dichiarazioni fattuali. Usa asset e dipendenze con licenze compatibili con l'uso commerciale.

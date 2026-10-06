import { salon } from '@/lib/salon'

export function SiteFooter() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-6 py-8 text-center text-sm text-muted-foreground sm:flex-row sm:text-left">
        <p>
          © {new Date().getFullYear()} {salon.name}
        </p>
        <p>{salon.address}</p>
      </div>
    </footer>
  )
}

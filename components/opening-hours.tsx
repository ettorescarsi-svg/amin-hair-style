'use client'

import { useEffect, useState } from 'react'
import { weeklyHours } from '@/lib/salon'

export function OpeningHours() {
  const [todayIndex, setTodayIndex] = useState<number | null>(null)

  useEffect(() => {
    // JS: 0 = domenica; la lista parte da lunedì
    setTodayIndex((new Date().getDay() + 6) % 7)
  }, [])

  return (
    <ul className="divide-y divide-border">
      {weeklyHours.map((row, index) => {
        const isToday = index === todayIndex
        const isClosed = row.hours === 'Chiuso'
        return (
          <li
            key={row.day}
            className={`flex items-center justify-between py-3.5 text-sm ${
              isToday ? 'font-medium text-foreground' : 'text-foreground/65'
            }`}
          >
            <span className="flex items-center gap-3">
              {row.day}
              {isToday && (
                <span className="rounded-full bg-accent/15 px-2 py-0.5 text-[11px] font-medium uppercase tracking-wider text-accent">
                  Oggi
                </span>
              )}
            </span>
            <span
              className={`tabular-nums ${
                isClosed ? 'italic text-foreground/50' : isToday ? 'text-accent' : ''
              }`}
            >
              {row.hours}
            </span>
          </li>
        )
      })}
    </ul>
  )
}

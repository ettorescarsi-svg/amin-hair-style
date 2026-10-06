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
              isToday ? 'text-foreground' : 'text-muted-foreground'
            }`}
          >
            <span className="flex items-center gap-3">
              {row.day}
              {isToday && (
                <span className="rounded-full bg-primary/15 px-2 py-0.5 text-[11px] font-medium uppercase tracking-wider text-primary">
                  Oggi
                </span>
              )}
            </span>
            <span
              className={`tabular-nums ${
                isClosed ? 'text-muted-foreground' : isToday ? 'text-primary' : ''
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

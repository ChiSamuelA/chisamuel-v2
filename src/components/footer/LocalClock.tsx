'use client'

import { useEffect, useState } from 'react'

const formatter = new Intl.DateTimeFormat('en-GB', {
  timeZone: 'Africa/Douala',
  hour: '2-digit',
  minute: '2-digit',
  second: '2-digit',
  hour12: false,
})

// Live Yaoundé time. Renders a placeholder on the server so the
// server-rendered HTML never disagrees with the visitor's clock.
export default function LocalClock() {
  const [time, setTime] = useState<string | null>(null)

  useEffect(() => {
    const tick = () => setTime(formatter.format(new Date()).split(':').join(' : '))
    tick()
    const id = setInterval(tick, 1000)
    return () => clearInterval(id)
  }, [])

  return (
    <time className="tabular-nums" suppressHydrationWarning>
      {time ?? '-- : -- : --'}
    </time>
  )
}

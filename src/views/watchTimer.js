import React, { useState, useEffect } from 'react'
import { WatchTittle, WatchSep, Watch, WatchMin, WatchSec } from './elements'

export function Watchtimer () {
  const [time, setTime] = useState(60 * 60)
  const minutes = Math.floor(time / 60)
  const seconds = time % 60
  const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('')
  const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('')

  const active = true

  useEffect(() => {
    if (active && time > 0) {
      setTimeout(() => {
        setTime(time - 1)
      }, 1000)
    }
  }, [active, time])

  return (
    <Watch>
      <WatchTittle>
        Tiempo restante
        </WatchTittle>
      <WatchMin
        content={minuteLeft}
      />
      <WatchMin
        content={minuteRight}
      />
      <WatchSep>:</WatchSep>
      <WatchSec
        content={secondLeft}
      />
      <WatchSec
        content={secondRight}
      />
    </Watch>
  )
}

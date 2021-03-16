import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { colors } from '../assets/guideline'

const Watch = styled.div`
display: flex;
font-size: 2rem;
font-weight: 700;
padding: 1rem 0 1rem 1.75rem;
`
const WatchTittle = styled.div`
margin-right: 1.5rem;
`

const WatchSep = styled.div`
color: ${colors.whiteTransparency};
margin: -0.15rem 0.25rem 0 0.5rem;
`

const StyledWatchMin = styled.div`
margin-left: 0.15rem;
color: ${colors.greenAccent};
`
const WatchMin = ({ content }) => {
  return (
    <StyledWatchMin>
      <p>
        {content}
      </p>
    </StyledWatchMin>
  )
}

WatchMin.propTypes = {
  content: PropTypes.string
}

const StyledWatchSec = styled.div`
margin-left: 0.15rem;
color: ${colors.whiteTransparency};
`
const WatchSec = ({ content }) => {
  return (
    <StyledWatchSec>
      <p>
        {content}
      </p>
    </StyledWatchSec>
  )
}

WatchSec.propTypes = {
  content: PropTypes.string
}

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


export { WatchTittle, WatchSep, Watch, WatchMin, WatchSec }

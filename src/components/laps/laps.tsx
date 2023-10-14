import React from 'react'

type TLaps = {
  minutes: number,
  sec: number,
  milisec: number
}


const Laps = ({minutes, sec, milisec}:TLaps) => {
  return (
    <div>{minutes} {sec} {milisec}</div>
  )
}

export default Laps
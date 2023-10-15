import React, { useEffect, useState } from 'react'


type TLap = {
  min: number,
  sec: number,
  ms: number
}

const useTimer = () => {
  const [counte, setCounte] = useState<number>(0)
  const [laps, setLaps] = useState<TLap[]>([])
  const [isActive, setActive] = useState(false);


  useEffect(() => {
    const timerId = setInterval(() => {
      setCounte((counte) => counte + 10)
    }, 10)
    if (!isActive) {
      setTimeout(() => {
        clearInterval(timerId);
        console.log("Таймер остановлен");
      }, 0);
    } 
    return () => clearInterval(timerId)
  }, [isActive])


  const startStopTimer = () => {
    setActive(!isActive)
  }

  const time = {
    min: Math.floor((counte / 60000) % 60),
    sec: Math.floor((counte / 1000) % 60),
    ms: counte % 1000 /10
  }

  const addLap = () => {
    setLaps(laps => laps.concat(time) )
  }

  const resetTimer = () => {
    setActive(false);
    setCounte(0);
    setLaps([]);
  }


  return {
    isActive,
    time,
    laps,
    addLap,
    startStopTimer,
    resetTimer
  }
}

export default useTimer
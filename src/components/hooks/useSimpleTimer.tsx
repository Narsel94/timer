import React, { useEffect, useState } from "react";

export type TLap = {
  hours: number;
  minutes: number;
  sec: number;
  ms: number;
};

const useSimpleTimer = () => {
  const [counte, setCounte] = useState<number>(0);
  const [isActive, setActive] = useState(false);
  const [laps, setLaps] = useState<TLap[]>([]);

  useEffect(() => {
    const timerId = setInterval(() => {
      setCounte((counte) => counte + 10);
    }, 10);
    if (!isActive) {
      setTimeout(() => {
        clearInterval(timerId);
      }, 0);
    }
    return () => clearInterval(timerId);
  }, [isActive]);

  const startStopTimer = () => {
    setActive(!isActive);
  };

  const addLap = () => {
    const lap = getTime();
    setLaps((laps) => laps.concat(lap));
  };

  const getTime = (): TLap => {
    const hours = new Date(counte).getUTCHours();
    const minutes = new Date(counte).getMinutes();
    const sec = new Date(counte).getSeconds();
    const ms = new Date(counte).getMilliseconds();
    return {
      hours: hours,
      minutes: minutes,
      sec: sec,
      ms: ms,
    };
  };

  const clearLaps = () => {
    setLaps([]);
  };

  const resetTimer = () => {
    setActive(false);
    setCounte(0);
  };

  const startTimer = () => {
    setActive(true);
  };
  const stopTimer = () => {
    setActive(false);
  };

  return {
    isActive,
    laps,
    startTimer,
    stopTimer,
    getTime,
    startStopTimer,
    resetTimer,
    addLap,
    clearLaps,
  };
};

export default useSimpleTimer;

import React, { useState, useEffect, useCallback } from "react";
import useSimpleTimer from "./useSimpleTimer";
type TLap = {
  hours: number;
  minutes: number;
  sec: number;
  ms: number;
};

export const useTimerWithIntervals = () => {
  const [counte, setCounte] = useState<number>(0);
  const [laps, setLaps] = useState<TLap[]>([]);
  const [isActive, setActive] = useState(false);

  const [pauseCounte, setPauseCounte] = useState<number>(0);

  useEffect(() => {
    const timerId = setInterval(() => {
      setCounte((counte) => counte + 10);
    }, 10);
    if (!isActive) {
      setTimeout(() => {
        setPauseCounte(0);
        clearInterval(timerId);
      }, 0);
    }
    return () => {
      clearInterval(timerId);
    };
  }, [isActive]);

  const startStopTimer = useCallback(() => {
    setActive(!isActive);
  }, [isActive]);

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

  const addLap = () => {
    const lap = getTime();
    setLaps((laps) => laps.concat(lap));
  };

  const resetTimer = () => {
    setActive(false);
    setCounte(0);
    setLaps([]);
  };

  return {
    startStopTimer,
    pauseCounte,
    getTime,
    resetTimer,
    addLap,
    isActive,
    laps,
  };
};

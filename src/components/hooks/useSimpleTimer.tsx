import React, { useEffect, useState } from "react";

export type TLap = {
  hours: number;
  minutes: number;
  sec: number;
};

const useSimpleTimer = () => {
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [isActive, setActive] = useState(false);
  const [laps, setLaps] = useState<TLap[]>([]);

  useEffect(() => {
    const timer = setInterval(() => {
      setSeconds((seconds) => seconds + 1);

      if (seconds === 59) {
        setSeconds(0);
        setMinutes((minutes) => minutes + 1);

        if (minutes === 59) {
          setMinutes(0);
          setHours((hours) => hours + 1);
        }
      }
    }, 1000);
    if (!isActive) {
      setTimeout(() => {
        clearInterval(timer);
      }, 0);
    }
    return () => {
      clearInterval(timer);
    };
  }, [seconds, minutes, hours, isActive]);

  const startStopTimer = () => {
    setActive(!isActive);
  };

  const addLap = () => {
    const lap: TLap = {
      hours: hours,
      minutes: minutes,
      sec: seconds,
    };
    setLaps((laps) => laps.concat(lap));
  };

  const clearLaps = () => {
    setLaps([]);
  };

  const resetTimer = () => {
    setActive(false);
    setHours(0);
    setSeconds(0);
    setMinutes(0);
  };

  const startTimer = () => {
    setActive(true);
  };

  const stopTimer = () => {
    setActive(false);
  };

  return {
    hours,
    minutes,
    seconds,
    isActive,
    laps,
    startTimer,
    stopTimer,
    startStopTimer,
    resetTimer,
    addLap,
    clearLaps,
  };
};

export default useSimpleTimer;

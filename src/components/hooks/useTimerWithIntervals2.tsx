import React from "react";
import useSimpleTimer from "./useSimpleTimer";

const useTimerWithIntervals2 = () => {
  const {
    isActive,
    hours,
    minutes,
    seconds,
    startStopTimer,
    resetTimer,
    startTimer,
    stopTimer,
  } = useSimpleTimer();
  const {
    resetTimer: resetIntevalTimer,
    addLap: addInerval,
    startTimer: startInterval,
    stopTimer: stopInterval,
    laps: intervals,
    clearLaps: clearIntervals,
  } = useSimpleTimer();

  const startStopTimerInterval = () => {
    if (!isActive) {
      resetIntevalTimer();
      addInerval();
      startTimer();
      stopInterval();
    } else {
      stopTimer();

      startInterval();
    }
  };

  const resetTimerInterval = () => {
    resetTimer();
    clearIntervals();
    resetIntevalTimer();
  };

  return {
    startStopTimerInterval,
    resetTimerInterval,
    addInerval,
    isActive,
    intervals,
    hours,
    minutes,
    seconds,
  };
};

export default useTimerWithIntervals2;

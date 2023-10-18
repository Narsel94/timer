import React from "react";
import useSimpleTimer from "./useSimpleTimer";

const useTimerWithIntervals2 = () => {
  const {
    isActive,
    startStopTimer,
    resetTimer,
    getTime,
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
      addInerval();
      resetIntevalTimer();
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
    getTime,
    addInerval,
    isActive,
    intervals,
  };
};

export default useTimerWithIntervals2;

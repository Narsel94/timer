import React from "react";
import { useTimerWithIntervals } from "../../hooks/useTimerWithIntervals";
import Button from "../../ui/button/button";
import styles from "./new-timer.module.css";
import TimeCounter from "../../ui/time-counter/time-counter";

const TimerWithIntervals = () => {
  const {
    startStopTimer,
    isActive,
    resetTimer,
    addLap,
    getTime,
  } = useTimerWithIntervals();
  const { hours, minutes, sec, ms } = getTime();
  return (
    <div className={styles.timer}>
      <div className={styles.flexRow}>
        <TimeCounter time={hours} />
        <TimeCounter time={minutes} />
        <TimeCounter time={sec} />
        <TimeCounter time={ms} />
      </div>
      <div className={styles.flexRow}>
        <Button htmlType="button" onClick={startStopTimer}>
          {!isActive ? "Start" : "Stop"}{" "}
        </Button>
        <Button htmlType="button" onClick={resetTimer}>
          Reset
        </Button>
        <Button htmlType="button" onClick={addLap}>
          Laps
        </Button>
      </div>
    </div>
  );
};

export default TimerWithIntervals;

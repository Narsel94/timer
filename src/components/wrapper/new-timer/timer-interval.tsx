import React, { useId } from "react";
// import { useTimerWithIntervals } from "../../hooks/useTimerWithIntervals";
import useTimerWithIntervals2 from "../../hooks/useTimerWithIntervals2";
import Button from "../../ui/button/button";
import styles from "./new-timer.module.css";
import TimeCounter from "../../ui/time-counter/time-counter";
import TimeBlock from "../../ui/time-block/time-block";

const TimerIntervals = () => {
  const {
    getTime,
    startStopTimerInterval,
    resetTimerInterval,
    isActive,
    intervals,
    addInerval,
  } = useTimerWithIntervals2();
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
        <Button htmlType="button" onClick={startStopTimerInterval}>
          {!isActive ? "Start" : "Stop"}{" "}
        </Button>
        <Button htmlType="button" onClick={resetTimerInterval}>
          Reset
        </Button>
      </div>
      <div className={styles.intervalsBlock}>
        {intervals &&
          intervals.map((interval) => <TimeBlock time={interval} />)}
      </div>
    </div>
  );
};

export default TimerIntervals;

import React, { useEffect } from "react";
import useTimerWithIntervals2 from "../../hooks/useTimerWithIntervals2";
import Button from "../../ui/button/button";
import styles from "./new-timer.module.css";
import TimeCounter from "../../ui/time-counter/time-counter";
import TimeBlock from "../../ui/time-block/time-block";

const TimerIntervals = () => {
  const {
    hours,
    minutes,
    seconds,
    startStopTimerInterval,
    resetTimerInterval,
    addInerval,
    isActive,
    intervals,
  } = useTimerWithIntervals2();

  useEffect(() => {
    document.title = `${hours} : ${minutes} : ${seconds}`;
  }, [hours, minutes, seconds]);

  return (
    <div className={styles.timer}>
      <div className={styles.flexRow}>
        <TimeCounter time={hours} />
        <TimeCounter time={minutes} />
        <TimeCounter time={seconds} />
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
          intervals
            .slice(1)
            .map((interval, index) => (
              <TimeBlock key={index} time={interval} />
            ))}
      </div>
    </div>
  );
};

export default TimerIntervals;

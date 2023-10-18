import React, { useEffect, useState } from "react";
import styles from "./wrapper.module.css";
import useTimer from "../hooks/useTimer";
import Counter from "../ui/counter/counter";
import Laps from "../laps/laps";

const Timer2 = () => {
  const { time, laps, addLap, isActive, startStopTimer, resetTimer } =
    useTimer();
  const { min, sec, ms } = time;

  return (
    <div className={styles.timer}>
      <div className={styles.flexBlock}>
        <Counter time={min} />
        <Counter time={sec} />
        <Counter time={ms} />
      </div>
      <div className={styles.flexBlock}>
        <button className={styles.button} onClick={startStopTimer}>
          {!isActive ? "Start!" : "Stop!"}{" "}
        </button>

        <button className={styles.button} onClick={resetTimer}>
          Reset
        </button>
        <button className={styles.button} onClick={addLap}>
          Laps
        </button>
      </div>
      <ul className={styles.lapsList}>
        {laps.length > 0 &&
          laps.map((lap, index) => (
            <Laps
              key={index}
              counte={index + 1}
              minutes={lap.min}
              sec={lap.sec}
              milisec={lap.ms}
            ></Laps>
          ))}
      </ul>
    </div>
  );
};

export default Timer2;

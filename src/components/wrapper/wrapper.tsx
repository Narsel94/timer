import React, { useEffect, useState } from "react";
import styles from "./wrapper.module.css";
import clsx from "clsx";
import classNames from "classnames";
import Laps from "../laps/laps";
import Counter from "../ui/counter/counter";
import Button from "../ui/button/button";

type TLaps = {
  min: number;
  sec: number;
  milisec: number;
};

const Timer = () => {
  const [isActive, setActive] = useState(false);
  const [timer, setTimer] = useState(false);

  const [laps, setLaps] = useState<TLaps[]>([]);

  const [count, setCount] = useState(0);

  const className = classNames([styles.timer], {
    [styles.active]: isActive,
  });
  let timerId: NodeJS.Timer;

  useEffect(() => {
    timerId = setInterval(() => {
      setCount((prevCount) => prevCount + 10);
    }, 10);
    if (!timer) {
      setTimeout(() => {
        clearInterval(timerId);
        console.log("Таймер остановлен");
      }, 0);
    }
    return () => clearInterval(timerId);
  }, [timer]);

  const startStopTimer = () => {
    setTimer(!timer);
  };

  const getTime = (miliseconds: number) => {
    const minutes = Math.floor((miliseconds / 60000) % 60);
    const sec = Math.floor((miliseconds / 1000) % 60);
    const milisec = miliseconds % 1000;
    return { min: minutes, sec: sec, milisec: milisec };
  };

  const reset = () => {
    setTimer(false);
    setCount(0);
    setLaps([]);
  };

  const { min, sec, milisec } = getTime(count);

  const lap = (data: TLaps) => {
    setLaps((prevLaps) => prevLaps.concat(data));
  };

  const width = (sec * 1.7);

  const style = {
    "width": `${width}%`,
    "transition": "1.5s"
  };

  return (
    <div className={className}>
      <div className={styles.bar}>
        <div className={styles.inner} style={style}></div>
      </div>

      <div className={styles.flexBlock}>
        <Counter time={min} />
        <Counter time={sec} />
        <Counter time={milisec / 10} />
      </div>
      <div className={styles.flexBlock}>
        <Button htmlType="button" onClick={startStopTimer}>{!timer ? "Start!" : "Stop!"}</Button>
        
        <button className={styles.button} onClick={startStopTimer}>{!timer ? "Start!" : "Stop!"}</button>

        <button className={styles.button} onClick={reset}>Reset</button>
        <button className={styles.button} onClick={() => lap({ min: min, sec: sec, milisec: milisec })}>
          Lap
        </button>
      </div>

      {laps.length > 0 &&
        laps.map((lap, index) => (
          <Laps
            key={index}
            minutes={lap.min}
            sec={lap.sec}
            milisec={lap.milisec}
          ></Laps>
        ))}
    </div>
  );
};

export default Timer;

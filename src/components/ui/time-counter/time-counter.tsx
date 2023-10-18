import React, { FC } from "react";
import styles from "./time-counter.module.css";

type TTimerCounter = {
  time: number;
};

const TimeCounter: FC<TTimerCounter> = ({ time, ...rest }) => {
  return (
    <div className={styles.counter} {...rest}>
      {time < 10 ? `0${time}` : time}
    </div>
  );
};

export default TimeCounter;

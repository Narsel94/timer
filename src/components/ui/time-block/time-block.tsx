import { FC } from "react";
import styles from "./time-block.module.css";
import { TLap } from "../../hooks/useSimpleTimer";

type TimeBlock = {
  time: TLap;
};

const TimeBlock: FC<TimeBlock> = ({ time, ...rest }) => {
  const { hours, minutes, sec } = time;

  const pauseHour = hours < 10 ? `0${hours}` : hours;
  const pauseMinutes = minutes < 10 ? `0${minutes}` : minutes;
  const pauseSec = sec < 10 ? `0${sec}` : sec;

  return (
    <div
      className={styles.block}
      {...rest}
    >{`${pauseHour}: ${pauseMinutes}: ${pauseSec}`}</div>
  );
};

export default TimeBlock;

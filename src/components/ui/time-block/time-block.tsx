import React, {FC, useId} from 'react';
import styles from './time-block.module.css'
import { TLap } from '../../hooks/useSimpleTimer'


type TimeBlock = {
  time: TLap
}

const TimeBlock:FC<TimeBlock> = ({time, ...rest}) => {
  
  const {hours, minutes, sec, ms} = time;

  const pauseHour = hours < 10? `0${hours}` : hours;
  const pauseMinutes = minutes < 10? `0${minutes}` : minutes;
  const pauseSec = sec < 10? `0${sec}` : sec;

  
  const keyId = useId()


  return (
    <div key={keyId} className={styles.block} {...rest}>{`${pauseHour}: ${pauseMinutes}: ${pauseSec}: ${ms}`}</div>
  )
}

export default TimeBlock
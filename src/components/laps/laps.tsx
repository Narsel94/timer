import React from 'react';
import styles from './laps.module.css'

type TLaps = {
  minutes: number,
  sec: number,
  milisec: number,
  counte?: number
}


const Laps = ({minutes, sec, milisec, counte}:TLaps) => {
  return (
    <li className={styles.listItem}>
      Lap {counte? counte: ''}: {minutes}m {sec}s {milisec}ms
    </li>
  )
}

export default Laps
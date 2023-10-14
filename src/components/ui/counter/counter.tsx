import React from 'react'
import styles from './counter.module.css'

type TCounter = {
  time: number
}

const Counter = ({time, ...rest}:TCounter) => {
  return (
    <div {...rest} className={styles.counter}>{time < 10? `0${time}`: time}</div>
  )
}

export default Counter
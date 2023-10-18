import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Timer from "./components/wrapper/wrapper";
import Timer2 from "./components/wrapper/test-timer";
import Button from "./components/ui/button/button";
import TimerWithIntervals from "./components/wrapper/new-timer/new-timer";
import TimerIntervals from "./components/wrapper/new-timer/timer-interval";

function App() {
  return (
    <>
      
{/*       
      <Timer></Timer>
      <Timer2 /> */}
      <TimerIntervals/>
      <TimerWithIntervals/>
    </>
  );
}

export default App;

import React, { useEffect, useState } from "react";
import TimeSetter from "./TimeSetter";

const MyTimer = () => {
  const [minutes, setMinutes] = useState(60);
  const [seconds, setSeconds] = useState(0);
  const [timerRunning, setTimerRunning] = useState(false);
  useEffect(() => {
    let timer;

    if (timerRunning) {
      timer = setInterval(() => {
        if (seconds > 0) {
          setSeconds(seconds - 1);
        } else if (minutes > 0) {
          setMinutes(minutes - 1);
          setSeconds(59);
        } else {
          clearInterval(timer);
          setTimerRunning(false);
        }
      }, 1000);
    } else {
      clearInterval(timer);
    }

    return () => {
      clearInterval(timer);
    };
  }, [timerRunning, minutes, seconds]);
  return (
    <div class="container mt-5">
      <div class="row">
        <div class="col-md-12 ">
          <div id="timer" class="text-center" className="timer">
            <span id="minutes">{minutes}</span>:
            <span id="seconds">{seconds}</span>
          </div>
        </div>
      </div>
      <TimeSetter
        setMinutes={setMinutes}
        setSeconds={setSeconds}
        setTimerRunning={setTimerRunning}
      />
    </div>
  );
};

export default MyTimer;

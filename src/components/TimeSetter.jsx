import React from "react";

const TimeSetter = ({ setMinutes, setSeconds, setTimerRunning }) => {
  return (
    <div>
      <div className="row">
        <div class="form-group text-center mt-5 col-md-6">
          <label for="minutes">Хвилини:</label>
          <input
            type="number"
            id="minutes"
            class="form-control"
            placeholder="Хвилини"
            min="0"
            max="60"
            onChange={(e) => {
              setMinutes(e.target.value);
            }}
          />
        </div>
        <div class="form-group text-center mt-5 col-md-6">
          <label for="seconds">Секунди:</label>
          <input
            type="number"
            id="seconds"
            class="form-control"
            placeholder="Секунди"
            min="0"
            max="59"
            onChange={(e) => {
              setSeconds(e.target.value);
            }}
          />
        </div>
      </div>
      <div>
        <button
          type="button"
          className="btn btn-dark mt-5 mx-2"
          onClick={() => {
            setTimerRunning(true);
          }}
        >
          <h2>Start</h2>
        </button>
        <button
          type="button"
          className="btn btn-dark mt-5 mx-2"
          onClick={() => {
            setTimerRunning(false);
          }}
        >
          <h2>Stop</h2>
        </button>
      </div>
    </div>
  );
};

export default TimeSetter;

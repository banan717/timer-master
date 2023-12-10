import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap";
import "./styles/app.css";
import MyTimer from "./components/MyTimer";
function App() {
  return (
    <div className="text-center mt-5">
      <h1 className="RacingSansOne">Timer</h1>
      <MyTimer />
    </div>
  );
}

export default App;

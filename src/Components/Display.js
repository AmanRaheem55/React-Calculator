import React from "react";
import "../Assets/Display.css";

function Display({ display }) {
  return (
    <div className="display">
      <input className=" display__textInput" value={display} onChange={e => (display = e.key )}/>
    </div>
  );
}

export default Display;

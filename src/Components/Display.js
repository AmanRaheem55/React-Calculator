import React from "react";
import '../Assets/Display.css'

function Display({ display, }) {
  return (
    <div className="display">
      <input
        className="display__textInput"
        type="text"
        value={display}
      />
    </div>
  );
}

export default Display;

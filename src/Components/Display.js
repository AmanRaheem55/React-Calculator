import React from "react";
import '../Assets/Display.css'

function Display({ display,  handleData, calculate }) {
  return (
    <div className="display">
      <input
        className="display__textInput"
        type="text"
        value={display}
        onChange={handleData}
        onKeyPress={(e) => (e.charCode === 13 ? calculate() : null)}
      />
    </div>
  );
}

export default Display;

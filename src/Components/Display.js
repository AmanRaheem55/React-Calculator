import React from "react";
import '../Assets/Display.css'

function Display({ display,calculate }) {
  return (
    <div className="display">
      <input
        className="display__textInput"
        type="text"
        value={display} 
       
        onKeyPress={(e) => (e.charCode === 13 ? calculate() : null)}
      />
    </div>
  );
}

export default Display;

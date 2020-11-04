import React, { useState } from "react";
import KeyPad from "./Components/KeyPad";
import "./App.css";

function App() {
  const [display, setDisplay] = useState("");

  const calculate = () => {
    let resulls = String(eval(display));
    console.log(resulls)
    setDisplay(resulls);
  };

  const displayData = (data) => {
    setDisplay(display + data);
  };

const clearDisplay = () => {
  setDisplay("")
}

const backSpace = () =>  {
  let data = display
    let result = data.slice(0, -1)
      setDisplay(result)
  
   
}
  return (
    <div className="App btn-group-vertical  " role="group"  >

        <input
          className="display text-center form-control-xl"
          type="text"
          value={display}
          onChange={(e) => setDisplay(e.target.value)}
        />

        <KeyPad className=""
          displayData={displayData}
          calculate={calculate}
          backSpace={backSpace}
          clearDisplay={clearDisplay}
        />

      </div>

  );
}

export default App;

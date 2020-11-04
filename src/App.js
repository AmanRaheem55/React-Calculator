import React, { useState, } from "react";
import KeyPad from "./Components/KeyPad";
import "./App.css";

function App() {
  const [display, setDisplay] = useState("");

     

  const displayData = (data) => {
    setDisplay(display + data);
  };

    const calculate = () => {
    let data = display
    let resulls = eval(data)
    setDisplay(resulls);
  };



  const backSpace = () => {
    let data = display
    let result = data.slice(0, -1)
    setDisplay(result)
  }

  const clearDisplay = () => {
    setDisplay("")
  }



  const handleClickEvent = (event) => {
   const {value}= event.target
   value === "C"  ? clearDisplay() : value === "Ac" ? backSpace() : value === "="  ? calculate() :  displayData(value) 
  }


  return (
    <div className="App btn-group-vertical   container-fluid " role="group"  >
      <input
        className="display text-center form-control"
        type="text"
        value={display}
        onChange={(e) => setDisplay(e.target.value)}
      />
      <KeyPad className=""
        handleClickEvent={handleClickEvent}
      />


    </div>

  );
}

export default App;

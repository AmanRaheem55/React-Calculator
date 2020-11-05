import React, { useState, } from "react";
import KeyPad from "./Components/KeyPad";
import "./App.css";
import db from "./firebaseConfig"
import firebase from "firebase"
function App() {
  const [display, setDisplay] = useState("");


  

  const handleData = (e) => {
    const data = e.target.value
    let filteredData = data.replace(/[a-z @ ! # $  ^ & ( ) ~ ` " " : ; > <. ? |]/g, '');
   setDisplay(filteredData)
 
  }

  const displayData = (data) => {
    setDisplay(display + data);
  };

  const calculate = () => {
    let data = display;
    let resulls = eval(data);
    setDisplay(resulls);
  };

  const backSpace = () => {
    let data = display;
    let result = data.slice(0, -1);
    setDisplay(result);
  };

  const clearDisplay = () => {
    setDisplay("");
  };

 
  const handleClickEvent = (event) => {
    const { value } = event.target;
    value === "C" ? clearDisplay():value === "Ac" ? backSpace() : value === "=" ? calculate() : displayData(value);
    console.log(event)
  };

  return (
    <div className="App btn-group-vertical container-fluid "role="toolbar" aria-label="Toolbar with button groups">
      <input
        className="display text-center form-control"
        type="text"
        value={display}
        onChange={handleData}
        onKeyPress={e => e.charCode === 13 ? calculate(): null}
      />
      <KeyPad className="" handleClickEvent={handleClickEvent} />    
    </div>
  );
}

export default App;

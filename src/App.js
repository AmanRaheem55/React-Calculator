import React, { useState, useEffect } from "react";
import KeyPad from "./Components/KeyPad";
import "./Assets/App.css";
import "./firebaseConfig";
import "firebase";
import Display from "./Components/Display";

function App() {


  const [display, setDisplay] = useState("");

  const handleKeyPress = (event) => {
    const { key, keyCode } = event;

    keyCode === 13
      ? calculate()
      : keyCode === 8
      ? backSpace()
      : displayData(key, keyCode);
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyPress);

    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  });

  const handleClickEvent = (event) => {
    const { value } = event.target;
    value === "C"
      ? clearDisplay()
      : value === "Ac"
      ? backSpace()
      : value === "="
      ? calculate()
      : displayData(value);
  };

  const displayData = (data, keyCode) => {
    let filteredData = data.replace(
      /[a-z A-Z @ ! # $ ^ & ( ) ~}[  ` " " : ; > <. ? |]/g,""
    );
    keyCode === 221 || keyCode === 220
      ? setDisplay((display) => display + "")
      : setDisplay((display) => display + filteredData);
  };

  const calculate = () => {
    let data = display;
    let resulls = eval(data);
    let newData = String(resulls);
    setDisplay(newData);
  };

  const backSpace = () => {
    let data = display;
    let result = data.slice(0, -1);
    setDisplay(result);
  };
  const clearDisplay = () => setDisplay("");

  return (
    <React.Fragment>
      <h2 className="display-4  App__header">React calculator</h2>
      <div className="App">
        <div className="App__display">
          <Display 
             className="App__textInput" 
             display={display}  
            />
        </div>
        <KeyPad className="App__keypad" handleClickEvent={handleClickEvent} />
      </div>
    </React.Fragment>
  );
}

export default App;

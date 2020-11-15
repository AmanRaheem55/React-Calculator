import React, { useState } from "react";
import KeyPad from "./Components/KeyPad";
import "./App.css";
import "./firebaseConfig";
import firebase from "firebase";

import Display from "./Components/Display";
function App() {
  const [display, setDisplay] = useState("");

  const handleData = (e) => {
    const data = e.target.value;
    let filteredData = data.replace(/[a-z @ ! # $  ^ & ( ) ~ ` " " : ; > <. ? |]/g,"");
    setDisplay(filteredData);
  };

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
  const clearDisplay = () => setDisplay("");

  const handleClickEvent = (event) => {
    const { value } = event.target;
      value === "C"  ? clearDisplay()
    : value === "Ac" ? backSpace()
    : value === "="  ? calculate()
    : displayData(value);
  };

  return (
    <React.Fragment>
      <h2 className="display-4 text-center App__header">React calculator</h2>
      <div className="App">
        <div className="App__display">
          <Display
            className="App__textInput"
            handleData={handleData}
            calculate={calculate}
            display={display}
          />
        </div>
        <KeyPad className="App__keypad" handleClickEvent={handleClickEvent} />
      </div>
    </React.Fragment>
  );
}

export default App;

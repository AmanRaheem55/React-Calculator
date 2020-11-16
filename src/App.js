import React, { useState, useEffect } from "react";
import KeyPad from "./Components/KeyPad";
import "./Assets/App.css";
import "./firebaseConfig";
import Display from "./Components/Display";

function App() {



  const handleKeyPress = event => {
    console.log(event)
    const { key, keyCode } = event;
    console.log("pressed" + keyCode)
    let filteredData = key.replace(/[a-z @ ! # $ E B^ & ( ) ~ ` " " : ; > <. ? |]/g, "");
    keyCode === 13 ? calculate() : displayData(filteredData)
  };
  const [display, setDisplay] = useState("");


  useEffect(() => {
    window.addEventListener('keypress', handleKeyPress);
    return () => {
      window.removeEventListener('keypress', handleKeyPress);
    };
  });


  const handleClickEvent = (event) => {
    const { value } = event.target;
    value === "C" ? clearDisplay() : value === "Ac" ? backSpace() : value === "=" ? calculate() : displayData(value);
  };


  const displayData = (data) => {
    setDisplay(display => display + data);
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





  return (
    <React.Fragment>
      <h2 className="display-4 text-center App__header">React calculator</h2>
      <div className="App">
        <div className="App__display">
          <Display
            className="App__textInput"
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

import React, { useState, useEffect } from "react";
import KeyPad from "./Components/KeyPad";
import "./Assets/App.css";
import "./firebaseConfig";
import Display from "./Components/Display";

function App() {


 const [display, setDisplay] = useState("");

  const handleKeyPress = event => {
    console.log(event)
    const { key, keyCode } = event;
    console.log("KeyCode " + keyCode  +" key " + key)
    
   keyCode === 220 ? displayData(""): keyCode === 221 ? displayData("") :  keyCode === 13 ? calculate() : keyCode === 8 ? backSpace(): displayData(key)
  };
 

  useEffect(() => {
    window.addEventListener('keydown', handleKeyPress);
    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  });


  const handleClickEvent = (event) => {
    const { value } = event.target;
    value === "C" ? clearDisplay() : value === "Ac" ? backSpace() : value === "=" ? calculate() : displayData(value);
  };


  const displayData = (data) => {
    let filteredData = data.replace(/[a-z A-Z @ ! # $ ^ & ( ) ~}[  ` " " : ; > <. ? |]/g, "");
    setDisplay(display => display + filteredData);
  };




  const calculate = () => {
    let data = display;
    let resulls = eval(data);
    let newData = String(resulls)
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

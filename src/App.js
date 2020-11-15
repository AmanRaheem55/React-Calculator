import React, { useState, useEffect } from "react";
import KeyPad from "./Components/KeyPad";
import "./Assets/App.css";
import "./firebaseConfig";


import Display from "./Components/Display";
function App() {

  const handleKeyPress = event => {
    const { key, } = event;
    setDisplay(display => display + key)
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyPress);

    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, []);

  const [display, setDisplay] = useState("");


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
    value === "C" ? clearDisplay():value === "Ac" ? backSpace() :value === "=" ? calculate():displayData(value);
  };



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

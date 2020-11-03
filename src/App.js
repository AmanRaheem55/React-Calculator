import React, { useState } from "react";
import KeyPad from "./Components/KeyPad";
import "./App.css";

function App() {
  const [display, setDisplay] = useState("");

  const calculate = () => {
    let resulls  =  String(eval(display));
    console.log(resulls)
    setDisplay(resulls);
  };

  const displayData = (data) => {
    setDisplay(display + data);
  };

  return (
    <div className="App   card" >
  
      <div class="card-body">
          <input
        className="display"
        type="text"
        value={display}
        onChange={(e) => setDisplay(e.target.value)}
      />
     
          <KeyPad className=""
          displayData={displayData}
          calculate={calculate}
        /> 
       
      </div>

      {/* <input   className="" type="text" value={display} onChange={e => setDisplay(e.target.value)}/>
        <KeyPad className=""
          displayData={displayData}
          calculate={calculate}
        /> */}
    </div>
  );
}

export default App;

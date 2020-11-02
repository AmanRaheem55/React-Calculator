import React, { useState} from 'react';
import './App.css';

function App() {

  const [display, setDisplay] = useState("")


  const calculate = () =>{
   const resulls = eval(display)
    setDisplay(resulls)
  }

  const displayData= (data) => {
    setDisplay(display + data)
  }

  return (
    <div className="App">
        <input type="text" value={display} onChange={e => setDisplay(e.target.value)}/>
        <button onClick={e => {calculate()}}> =</button>



    </div>
    
  );
}

export default App;

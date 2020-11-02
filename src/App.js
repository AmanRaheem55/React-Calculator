import React, { useState} from 'react';
import './App.css';

function App() {

  const [display, setDisplay] = useState("")
  const calculat = () =>{
   const resulls = eval(display)
    setDisplay(resulls)
  }
  return (
    <div className="App">
        <input type="text" value={display} onChange={e => setDisplay(e.target.value)}/>
        <button onClick={e => {calculat()}}> =</button>
    </div>
  );
}

export default App;

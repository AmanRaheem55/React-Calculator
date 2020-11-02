import React, { useState} from 'react';
import './App.css';

function App() {

  const [display, setDisplay] = useState("")


  const calculat = () =>{
   const resulls = eval(display)
    setDisplay(resulls)
  }

  const displayData= (data) => {
    setDisplay(display + data)
  }

  return (
    <div className="App">
        <input type="text" value={display} onChange={e => setDisplay(e.target.value)}/>
        <button onClick={e => {calculat()}}> =</button>

        <div class="btn-group">
        <button  onClick={e => (displayData(e.target.value))} id="num-1" class="btn btn-light" value="1">1</button>
        <button  onClick={e => (displayData(e.target.value))} id="num-2" class="btn btn-light" value="2">2</button>
        <button  onClick={e => (displayData(e.target.value))} id="num-3" class="btn btn-light" value="3">3</button>
        <button  onClick={e => (displayData(e.target.value))} id="add"   class="btn btn-light" value="+">+</button>
      </div>

      <div class="btn-group">
        <button id="num-4" class="btn btn-light" value="4">4</button>
        <button id="num-5" class="btn btn-light" value="5">5</button>
        <button id="num-6" class="btn btn-light" value="6">6</button>
        <button id="sub"   class="btn btn-light" value="-">-</button>
      </div>

      <div class="btn-group">
        <button id="num-7" class="btn btn-light" value="7">7</button>
        <button id="num-8" class="btn btn-light" value="8">8</button>
        <button id="num-9" class="btn btn-light" value="9">9</button>
        <button id="mult"  class="btn btn-light" value="*">*</button>
      </div>

      <div class="btn-group">
        <button id="num-0" class="btn btn-light" value="0">0</button>
        <button id="C" class="btn btn-danger" value="C">C</button>
        <button id="Ac" class="btn btn-warning" value="Ac">Ac</button>
        <button id="equl" class="btn btn-primary" value="=">=</button>
        <button id="div" class="btn btn-light" value="/">/</button>
      </div>
    
    </div>
    
  );
}

export default App;

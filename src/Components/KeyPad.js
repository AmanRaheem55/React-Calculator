import React from 'react'
import "../Assets/keyPad.css"

function KeyPad({ calculate, displayData, backSpace }) {
    return (
        <div className="keyPad" >
        
        <div className="btn-group">
                <button id="equl" onClick={calculate} className="btn btn-primary" value="=">=</button>
                <button onClick={backSpace} id="Ac" className="btn btn-warning" value="Ac">Ac</button>
                <button id="C" className="btn btn-danger" value="C">C</button>
            </div>
            
            <div className="btn-group">
                <button onClick={e => (displayData(e.target.value))} id="num-1" className="btn btn-dark" value="1">1</button>
                <button onClick={e => (displayData(e.target.value))} id="num-2" className="btn btn-dark" value="2">2</button>
                <button onClick={e => (displayData(e.target.value))} id="num-3" className="btn btn-dark" value="3">3</button>

            </div>

            <div className="btn-group">
                <button onClick={e => (displayData(e.target.value))} id="num-4" className="btn btn-dark" value="4">4</button>
                <button onClick={e => (displayData(e.target.value))} id="num-5" className="btn btn-dark" value="5">5</button>
                <button onClick={e => (displayData(e.target.value))} id="num-6" className="btn btn-dark" value="6">6</button>

            </div>

            <div className="btn-group ">
                <button onClick={e => (displayData(e.target.value))} id="num-7" className="btn btn-dark" value="7">7</button>
                <button onClick={e => (displayData(e.target.value))} id="num-8" className="btn btn-dark" value="8">8</button>
                <button onClick={e => (displayData(e.target.value))} id="num-9" className="btn btn-dark" value="9">9</button>
            </div>

            <div className="btn-group">
                <button onClick={e => (displayData(e.target.value))} id="add" className="btn btn-dark" value="+">+</button>
                <button onClick={e => (displayData(e.target.value))} id="num-0" className="btn btn-dark" value="0">0</button>
                <button onClick={e => (displayData(e.target.value))} id="sub" className="btn btn-dark" value="-">-</button>
            </div>

            <div className="btn-group">
                <button onClick={e => (displayData(e.target.value))} id="div" className="btn btn-dark" value="/">/</button>
                <button onClick={e => (displayData(e.target.value))} id="C" className="btn btn-dark " value="%">%</button>
                <button onClick={e => (displayData(e.target.value))} id="mult" className="btn btn-dark" value="*">*</button>
            </div>

            
        </div>
    )
}

export default KeyPad

import React from 'react'
import "../Assets/keyPad.css"

function KeyPad({handleEvents}) {


    return (
        <div className="keyPad " >
        
        <div className="btn-group">
                <button  id="equl" onClick={handleEvents} className=" keyPad__key btn btn-primary" value="=">=</button>
                <button onClick={handleEvents} id="Ac"   className=" keyPad__key btn btn-warning" value="Ac">Ac</button>
                <button onClick={handleEvents} id="C" className=" keyPad__key btn btn-danger"  value="C">C</button>
            </div>
            
            <div className="btn-group">
                <button onClick={handleEvents} id="num-1" className=" keyPad__key btn btn-dark" value="1">1</button>
                <button onClick={handleEvents} id="num-2" className=" keyPad__key btn btn-dark" value="2">2</button>
                <button onClick={handleEvents} id="num-3" className=" keyPad__key btn btn-dark" value="3">3</button>

            </div>

            <div className="btn-group">
                <button onClick={handleEvents} id="num-4" className=" keyPad__key btn btn-dark" value="4">4</button>
                <button onClick={handleEvents} id="num-5" className=" keyPad__key btn btn-dark" value="5">5</button>
                <button onClick={handleEvents} id="num-6" className=" keyPad__key btn btn-dark" value="6">6</button>

            </div>

            <div className="btn-group ">
                <button onClick={handleEvents} id="num-7" className=" keyPad__key btn btn-dark" value="7">7</button>
                <button onClick={handleEvents} id="num-8" className=" keyPad__key btn btn-dark" value="8">8</button>
                <button onClick={handleEvents} id="num-9" className=" keyPad__key btn btn-dark" value="9">9</button>
            </div>

            <div className="btn-group">
                <button onClick={handleEvents} id="add" className=" keyPad__key btn btn-dark" value="+">+</button>
                <button onClick={handleEvents} id="num-0" className=" keyPad__key btn btn-dark" value="0">0</button>
                <button onClick={handleEvents} id="sub" className=" keyPad__key btn btn-dark" value="-">-</button>
            </div>

            <div className="btn-group">
                <button onClick={handleEvents} id="div" className="keyPad__key btn btn-dark" value="/">/</button>
                <button onClick={handleEvents} id="C" className= "keyPad__key btn btn-dark" value="%">%</button>
                <button onClick={handleEvents} id="mult" className=" keyPad__key btn btn-dark" value="*">*</button>
            </div>

            
        </div>
    )
}

export default KeyPad

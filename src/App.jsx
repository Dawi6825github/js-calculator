// src/App.js

import React, { useState } from 'react';
import './App.css';
import { evaluate } from 'mathjs';

function App() {
  const [display, setDisplay] = useState(''); // state for calculator display
  const [isOn, setIsOn] = useState(true); // state for calculator on/off

  // Function to handle number and operator clicks
  const handleClick = (value) => {
    if (isOn) {
      // Avoid appending multiple operators or invalid inputs
      if (/[+\-*/]$/.test(display) && /[+\-*/]/.test(value)) {
        setDisplay((prev) => prev.slice(0, -1) + value); // replace the last operator
      } else {
        setDisplay((prev) => prev + value);
      }
    }
  };

  // Function to clear the display
  const clearDisplay = () => {
    if (isOn) setDisplay('');
  };

  // Function to handle equals operation using math.js evaluate
  const calculate = () => {
    if (isOn) {
      try {
        // Remove leading zeroes and trailing operators for accurate calculation
        const cleanedDisplay = display.replace(/(^0+|\D$)/g, '');
        const result = evaluate(cleanedDisplay); // safely evaluate the expression
        setDisplay(result.toString());
      } catch (error) {
        setDisplay('Error'); // in case of invalid input
      }
    }
  };

  // Function to toggle the on/off state
  const togglePower = () => {
    setIsOn((prev) => !prev);
    if (isOn) {
      setDisplay('Off'); // Show "Off" when calculator is off
    } else {
      setDisplay(''); // Clear display when calculator is turned on
    }
  };

  return (
    <div className="App">
       
     

          {/* Add the ParticlesBackground component */}
      <div className="calculator">
        <div className="display">{isOn ? display || '0' : 'Off'}</div>
        <div className="buttons">
          <button id="power" onClick={togglePower}>On/Off</button> {/* On/Off button */}
          <button id="clear" onClick={clearDisplay}>AC</button> {/* AC button */}
          <button id="seven" onClick={() => handleClick('7')}>7</button>
          <button id="eight" onClick={() => handleClick('8')}>8</button>
          <button id="nine" onClick={() => handleClick('9')}>9</button>
          <button id="division" onClick={() => handleClick('/')}>/</button>
          <button id="four" onClick={() => handleClick('4')}>4</button>
          <button id="five" onClick={() => handleClick('5')}>5</button>
          <button id="six" onClick={() => handleClick('6')}>6</button>
          <button id="multiplication" onClick={() => handleClick('*')}>*</button>
          <button id="one" onClick={() => handleClick('1')}>1</button>
          <button id="two" onClick={() => handleClick('2')}>2</button>
          <button id="three" onClick={() => handleClick('3')}>3</button>
          <button id="substraction" onClick={() => handleClick('-')}>-</button>
          <button id="zero" onClick={() => handleClick('0')}>0</button>
          <button id="decimal" onClick={() => handleClick('.')}>.</button>
          <button id="equals" onClick={calculate}>=</button>
          <button id="add" onClick={() => handleClick('+')}>+</button>
        </div>
      </div>
    </div>
  );
}

export default App;

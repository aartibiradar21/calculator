"use client";

import React, { useState } from 'react';
import './globals.css'; // Your CSS

const Calculator = () => {
  const [input, setInput] = useState(''); // Store expression
  const [result, setResult] = useState(''); // Store result

  // Helper function to validate input before calculation
  const isValidExpression = (expr) => {
    // Regular expression to detect invalid patterns (e.g., consecutive operators)
    const invalidPattern = /[\/*+\-]{2,}$/; 
    return !invalidPattern.test(expr) && /^[0-9/*+\-]+$/.test(expr);
  };

  // Handle button clicks to update input expression
  const handleClick = (value) => {
    setInput((prev) => prev + value);
  };

  // Calculate the result from the input expression
  const calculate = () => {
    console.log("Calculating:", input); // Check input value

    // Avoid empty input or invalid expressions
    if (input.trim() === '' || !isValidExpression(input)) {
      setResult('Error');
      return;
    }

    try {
      // Use Function constructor for safer evaluation
      const evaluatedResult = new Function(`return ${input}`)();
      setResult(evaluatedResult.toString());
    } catch (error) {
      console.error("Calculation Error:", error);
      setResult('Error');
    }
  };

  // Clear both input and result
  const clear = () => {
    setInput('');
    setResult('');
  };

  return (
    <div className="calculator">
      <div className="display">
        <p>Input: {input || '0'}</p>
        <p>Result: {result}</p>
      </div>
      <div className="buttons">
        <button onClick={clear}>C</button>
        <button onClick={() => handleClick('/')}>÷</button>
        <button onClick={() => handleClick('*')}>×</button>
        <button onClick={() => handleClick('-')}>−</button>
        <button onClick={() => handleClick('7')}>7</button>
        <button onClick={() => handleClick('8')}>8</button>
        <button onClick={() => handleClick('9')}>9</button>
        <button onClick={() => handleClick('+')}>+</button>
        <button onClick={() => handleClick('4')}>4</button>
        <button onClick={() => handleClick('5')}>5</button>
        <button onClick={() => handleClick('6')}>6</button>
        <button onClick={() => handleClick('1')}>1</button>
        <button onClick={() => handleClick('2')}>2</button>
        <button onClick={() => handleClick('3')}>3</button>
        <button onClick={calculate}>=</button>
        <button onClick={() => handleClick('0')} className="zero">0</button>
        <button onClick={() => handleClick('.')}>.</button>
      </div>
    </div>
  );
};

export default Calculator;

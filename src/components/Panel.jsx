/* eslint-disable react/prop-types */
import React from 'react';

function Panel({ clickHandle }) {
  const handleClick = (buttonName) => {
    clickHandle(buttonName);
  };

  return (
    <>
      <button onClick={() => handleClick('AC')} className="gray calculator__item clear" type="button">AC</button>
      <button onClick={() => handleClick('+/-')} className="gray calculator__item negative" type="button">+/-</button>
      <button onClick={() => handleClick('%')} className="gray calculator__item rest" type="button">%</button>
      <button onClick={() => handleClick('÷')} className="orange calculator__item divide" type="button">÷</button>
      <button onClick={() => handleClick('7')} className="gray calculator__item seven" type="button">7</button>
      <button onClick={() => handleClick('8')} className="gray calculator__item eight" type="button">8</button>
      <button onClick={() => handleClick('9')} className="gray calculator__item nine" type="button">9</button>
      <button onClick={() => handleClick('x')} className="orange calculator__item multipyNum" type="button">x</button>
      <button onClick={() => handleClick('4')} className="gray calculator__item four" type="button">4</button>
      <button onClick={() => handleClick('5')} className="gray calculator__item five" type="button">5</button>
      <button onClick={() => handleClick('6')} className="gray calculator__item six" type="button">6</button>
      <button onClick={() => handleClick('-')} className="orange calculator__item subtract" type="button">-</button>
      <button onClick={() => handleClick('1')} className="gray calculator__item one" type="button">1</button>
      <button onClick={() => handleClick('2')} className="gray calculator__item two" type="button">2</button>
      <button onClick={() => handleClick('3')} className="gray calculator__item three" type="button">3</button>
      <button onClick={() => handleClick('+')} className="orange calculator__item add" type="button">+</button>
      <button onClick={() => handleClick('0')} className="gray calculator__item cero" type="button">0</button>
      <button onClick={() => handleClick('.')} className="gray calculator__item comma" type="button">.</button>
      <button onClick={() => handleClick('=')} className="orange calculator__item total" type="button">=</button>
    </>
  );
}

export default Panel;

import React from 'react';

function CalculatorItems() {
  return (
    <>
      <div className="result">0</div>
      <div className="calculator__item clear">AC</div>
      <div className="calculator__item negative">+/-</div>
      <div className="calculator__item rest">%</div>
      <div className="calculator__item divide">/</div>
      <div className="calculator__item seven">7</div>
      <div className="calculator__item eight">8</div>
      <div className="calculator__item nine">9</div>
      <div className="calculator__item multipyNum">x</div>
      <div className="calculator__item four">4</div>
      <div className="calculator__item five">5</div>
      <div className="calculator__item six">6</div>
      <div className="calculator__item subtract">-</div>
      <div className="calculator__item one">1</div>
      <div className="calculator__item two">2</div>
      <div className="calculator__item three">3</div>
      <div className="calculator__item add">+</div>
      <div className="calculator__item cero">0</div>
      <div className="calculator__item comma">.</div>
      <div className="calculator__item total">=</div>
    </>
  );
}

export default CalculatorItems;

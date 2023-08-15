/* eslint-disable no-unused-vars */
/* eslint-disable max-len */
import { useState } from 'react';
import Panel from '../components/Panel';
import calculate from '../logic/calculate';
import Result from '../components/Result';

function Calculator() {
  const [value, setValue] = useState({
    total: null,
    next: null,
    operation: null,
  });

  const handleClick = (buttonName) => {
    setValue(calculate(value, buttonName));
  };

  return (
    <section className="calculator__section">
      <article className="calculator__container">
        <h2 className="calculator__title">
          Let&#39;s do some math!
        </h2>
        <div className="features__calculator__container">
          <Result value={value.next || value.total || '0'} />
          <Panel clickHandle={handleClick} />
        </div>
      </article>
    </section>
  );
}

export default Calculator;

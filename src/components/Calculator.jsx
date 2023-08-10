/* eslint-disable no-unused-vars */
/* eslint-disable max-len */
import { useEffect, useState } from 'react';
import Panel from './Panel';
import calculate from '../logic/calculate';
import Result from './Result';
import ApiCall from './ApiCall';

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
    <section className="calculator">
      <article className="calculator__container">
        <Result value={value.next || value.total || '0'} />
        <Panel clickHandle={handleClick} />
      </article>
      <ApiCall />
    </section>
  );
}

export default Calculator;

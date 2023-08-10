/* eslint-disable max-len */
import { useState } from 'react';
import Panel from './Panel';

/* eslint-disable react/prop-types */
function Result({ value }) {
  return (
    <section>
      <article>
        <p>{value}</p>
      </article>
    </section>
  );
}

function Calculator() {
  const [value, setValue] = useState(0);

  const valueHandleClick = (valueClick) => {
    setValue(valueClick);
  };

  return (
    <>
      <Result value={value} />
      <Panel valueClick={valueHandleClick} />
    </>
  );
}

export default Calculator;

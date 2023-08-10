/* eslint-disable no-unused-vars */
/* eslint-disable no-param-reassign */
/* eslint-disable react/prop-types */
export default function Button({ buttonName, buttonSelected }) {
  const buttonHandleClick = (e) => {
    const selected = e.target.textContent;
    buttonSelected(selected);
  };

  return (
    <section>
      <article>
        <button onClick={buttonHandleClick} type="button">{buttonName}</button>
      </article>
    </section>
  );
}

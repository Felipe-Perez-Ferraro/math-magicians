/* eslint-disable react/prop-types */
import React from 'react';
import Button from './Button';

function Panel({ valueClick }) {
  const panelHandleClick = (e) => {
    console.log(valueClick(e));
  };

  return (
    <>
      <Button buttonSelected={panelHandleClick} buttonName="AC" />
      <Button buttonSelected={panelHandleClick} buttonName="+/-" />
      <Button buttonSelected={panelHandleClick} buttonName="%" />
      <Button buttonSelected={panelHandleClick} buttonName="/" />
      <Button buttonSelected={panelHandleClick} buttonName="7" />
      <Button buttonSelected={panelHandleClick} buttonName="8" />
      <Button buttonSelected={panelHandleClick} buttonName="9" />
      <Button buttonSelected={panelHandleClick} buttonName="x" />
      <Button buttonSelected={panelHandleClick} buttonName="4" />
      <Button buttonSelected={panelHandleClick} buttonName="5" />
      <Button buttonSelected={panelHandleClick} buttonName="6" />
      <Button buttonSelected={panelHandleClick} buttonName="-" />
      <Button buttonSelected={panelHandleClick} buttonName="1" />
      <Button buttonSelected={panelHandleClick} buttonName="2" />
      <Button buttonSelected={panelHandleClick} buttonName="3" />
      <Button buttonSelected={panelHandleClick} buttonName="+" />
      <Button buttonSelected={panelHandleClick} buttonName="0" />
      <Button buttonSelected={panelHandleClick} buttonName="." />
      <Button buttonSelected={panelHandleClick} buttonName="=" />
    </>
  );
}

export default Panel;

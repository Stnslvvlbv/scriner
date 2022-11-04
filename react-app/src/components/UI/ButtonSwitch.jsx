import React from 'react';
import {useState, } from 'react';

export const ButtonSwitch = (props) => {

  let styleSwitch = []
  const ChangeActive = () => {
    props.setChange((prev) => !prev)
  }

  props.flag ? styleSwitch=['switch', 'isActive'] :  styleSwitch=['switch',];
  return (
    <div className={styleSwitch.join(' ')} onClick={ChangeActive}>
      <div className="switch__button"></div>
    </div>
  )
}

import React from 'react';
import {useState, } from 'react';

export const ButtonSwitch = (props) => {

  const [styleSwitch, setStyleSwitch] = useState(['switch',]);
  const ChangeActive = () => {
    props.setChange((prev) => !prev)
  }
  console.log(props.flag)
  return (
    <div className={styleSwitch.join(' ')} onClick={ChangeActive}>
      <div className="switch__button"></div>
    </div>
  )
}

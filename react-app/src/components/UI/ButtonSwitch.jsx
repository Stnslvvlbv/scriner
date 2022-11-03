import React from 'react';

export const ButtonSwitch = (props) => {

  const styleSwitch = ["switch", ]
  const Active = () => {
    props.Function()
    console.log("был клик")
  }
  return (
    <div className={styleSwitch.join(' ')} onClick={Active}>
      <div className="switch__button"></div>
    </div>

  )
}

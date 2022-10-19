import React from 'react';

const DPrice__long = (props) => {

  return (
    <div className="dprice__long-element">
      <h1>
        <span>{props.symbol}</span>
      </h1>
      <h1>
        <span> {props.priceChangePercent}%</span>
      </h1>
    </div>
  )
}

export { DPrice__long }

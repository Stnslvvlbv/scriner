import React from 'react';

const DPrice__long = (props) => {

  return (
    <div className="dprice__long-element">
      <h1>{props.symbol}</h1>
      <h1>{props.lastPrice} {props.priceChangePercent}%</h1>
    </div>
  )
}

export { DPrice__long }

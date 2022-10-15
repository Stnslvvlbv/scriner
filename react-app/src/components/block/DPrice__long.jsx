import React from 'react';

const DPrice__long = (props) => {

  return (
    <div className="dprice__long-element">
      <h1>{props.symbol}</h1>
      <p>{props.lastPrice} {props.priceChangePercent}%</p>
    </div>
  )
}

export { DPrice__long }

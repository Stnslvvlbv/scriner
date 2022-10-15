import React from 'react';
import {DPrice__long} from './DPrice__long'

const DPrice = (props) => {
  const style = ["dprice"]
  console.log(props.dailyFutures);


  // let ArayResponse = new Array();

  // console.log(response);
  // alert(response);

  return(
    <div className="dprice">
      <div className="price__buttom">
      <h1>price</h1>
      <h1>1d</h1>
      </div>
      <div className="dprice__coins">
        <div className="dprice__long">
        {props.dailyFutures.map(coin =>
          <DPrice__long key = {coin.symbol}
            symbol = {coin.symbol}
            lastPrice = {coin.lastPrice}
            priceChangePercent = {coin.priceChangePercent}
           />

        )}

        </div>
        <div className="dprice__short">
          <div className="dprice__short-element">
            <h1>ethusdt</h1>
            <h1>1 500</h1>
          </div>
          <div className="dprice__short-element">
            <h1>ethusdt</h1>
            <h1>1 500</h1>
          </div>
          <div className="dprice__short-element">
            <h1>ethusdt</h1>
            <h1>1 500</h1>
          </div>
          <div className="dprice__short-element">
            <h1>ethusdt</h1>
            <h1>1 500</h1>
          </div>
          <div className="dprice__short-element">
            <h1>ethusdt</h1>
            <h1>1 500</h1>
          </div>
          <div className="dprice__short-element">
            <h1>ethusdt</h1>
            <h1>1 500</h1>
          </div>
          <div className="dprice__short-element">
            <h1>ethusdt</h1>
            <h1>1 500</h1>
          </div>
          <div className="dprice__short-element">
            <h1>ethusdt</h1>
            <h1>1 500</h1>
          </div>
          <div className="dprice__short-element">
            <h1>ethusdt</h1>
            <h1>1 500</h1>
          </div>
          <div className="dprice__short-element">
            <h1>ethusdt</h1>
            <h1>1 500</h1>
          </div>
          <div className="dprice__short-element">
            <h1>ethusdt</h1>
            <h1>1 500</h1>
          </div>
        </div>
      </div>
    </div>
  )
}

export {DPrice}

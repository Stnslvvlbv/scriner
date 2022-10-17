import React from 'react';
import {DPrice__long} from './DPrice__long'

const DPrice = (props) => {

  const amountCoins = 10;
  const style = ["dprice"];
  const Sort = "priceChangePercent";
  let dailyLong = [];
  let dailyShort = [];
  const sortCoin = (Sort) => {
    const DailyActive = JSON.parse(JSON.stringify(props.dailyFutures))
    DailyActive.forEach(item => {
      item[Sort] = Number(item[Sort]);
    })
    DailyActive.sort((a, b) => a[Sort] > b[Sort] ? 1 : -1);
    console.log('sorted');
    dailyShort = DailyActive.slice(0, amountCoins);
    dailyLong = DailyActive.slice(DailyActive.length - amountCoins, DailyActive.length)
    dailyLong.sort((a, b) => a[Sort] < b[Sort] ? 1 : -1);
  };
  sortCoin(Sort);
  console.log(dailyLong);
  console.log(dailyShort);

  return(
    <div className="dprice">
      <div className="price__buttom">
      <h1>price</h1>
      <h1>1d</h1>
      </div>
      <div className="dprice__coins">
        <div className="dprice__long">
        {dailyLong.map(coin =>
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

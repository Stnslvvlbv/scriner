import React from 'react';
import {DPrice__long} from './DPrice__long'

const DPrice = (props) => {

  const amountCoins = 10;
  const style = ["dprice"];
  const Sort = "priceChangePercent";
  let dailyLong = [];
  let dailyShort = [];
  const sortCoin = (Sort) => {
    const DailyActiveFilt = [];
    const DailyActive = JSON.parse(JSON.stringify(props.dailyFutures))
    DailyActive.forEach(item => {
      item[Sort] = Number(item[Sort]);
      item.symbol = item.symbol.slice(0, -4);
    })
    DailyActive.sort((a, b) => a[Sort] > b[Sort] ? 1 : -1);
    console.log('sorted');
    const SymbolCleaner = [];

    function contains(arr, elem) {
      if (arr.length > 0) {
        if  (arr[arr.length-1] === elem) {return true;} else {return false;}
      }
      return false;
    }
    DailyActive.forEach((item) => {
      if (!contains(SymbolCleaner, item.symbol)) {
        SymbolCleaner.push(item.symbol);
        DailyActiveFilt.push(item);
      }
    });
    dailyShort = DailyActiveFilt.slice(0, amountCoins);
    dailyLong = DailyActiveFilt.slice(DailyActiveFilt.length - amountCoins, DailyActiveFilt.length).reverse()
    // dailyLong.sort((a, b) => a[Sort] < b[Sort] ? 1 : -1);
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
        {dailyShort.map(coin =>
          <DPrice__long key = {coin.symbol}
            symbol = {coin.symbol}
            lastPrice = {coin.lastPrice}
            priceChangePercent = {coin.priceChangePercent}
           />
         )}
        </div>
      </div>
    </div>
  )
}

export {DPrice}

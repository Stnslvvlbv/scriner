import React from 'react';

import DailyActive from 'D:/pr/scriner/react-app/src/API/DailyActive'

const DPrice = () => {
  const style = ["dprice"]

  const priceData = new Promise(function(resolve, reject) {
    console.log('conection');
    const response = DailyActive;
    resolve(response);
  })

  priceData.then((data) => {
    console.log(data)
  })

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
          <div className="dprice__long-element">
            <h1>btcusdt</h1>
            <h1>21 000</h1>
          </div>
          <div className="dprice__long-element">
            <h1>btcusdt</h1>
            <h1>21 000</h1>
          </div>
          <div className="dprice__long-element">
            <h1>btcusdt</h1>
            <h1>21 000</h1>
          </div>
          <div className="dprice__long-element">
            <h1>btcusdt</h1>
            <h1>21 000</h1>
          </div>
          <div className="dprice__long-element">
          <h1>btcusdt</h1>
          <h1>21 000</h1>
          </div>
          <div className="dprice__long-element">
            <h1>btcusdt</h1>
            <h1>21 000</h1>
            </div>
            <div className="dprice__long-element">
            <h1>btcusdt</h1>
            <h1>21 000</h1>
            </div>
            <div className="dprice__long-element">
            <h1>btcusdt</h1>
            <h1>21 000</h1>
            </div>
            <div className="dprice__long-element">
            <h1>btcusdt</h1>
            <h1>21 000</h1>
            </div>
            <div className="dprice__long-element">
            <h1>btcusdt</h1>
            <h1>21 000</h1>
            </div>
            <div className="dprice__long-element">
            <h1>btcusdt</h1>
            <h1>21 000</h1>
            </div>
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

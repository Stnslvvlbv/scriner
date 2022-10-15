import React, { useState } from 'react';

import { DPrice } from '../components/block/DPrice';
import DailyActive from 'D:/pr/scriner/react-app/src/API/DailyActive';

const Screener = function(props) {

  const [dailyFutures, setDeilyFutures] = useState([
    {symbol: 'APEBUSD', priceChange: '-0.1510000', priceChangePercent: '-3.237', weightedAvgPrice: '4.5658818', lastPrice: '4.5140000',},
    {symbol: 'BAKEUSDT', priceChange: '-0.0072', priceChangePercent: '-3.183', weightedAvgPrice: '0.2211', lastPrice: '0.2190',},
    {symbol: 'NKNUSDT', priceChange: '-0.00353', priceChangePercent: '-4.146', weightedAvgPrice: '0.08234', lastPrice: '0.08161',},
    {symbol: 'XEMUSDT', priceChange: '-0.0009', priceChangePercent: '-2.302', weightedAvgPrice: '0.0382', lastPrice: '0.0382',},
    {symbol: 'FOOTBALLUSDT', priceChange: -46.31000, priceChangePercent: '-5.312', weightedAvgPrice: '848.72226', lastPrice: '825.51000',},
    {symbol: 'LRCUSDT', priceChange: '-0.00540', priceChangePercent: '-2.061', weightedAvgPrice: '0.25750', lastPrice: '0.25660',},
    {symbol: 'ZECUSDT', priceChange: '-2.08', priceChangePercent: '-4.001', weightedAvgPrice: '50.63', lastPrice: '49.91',},
    {symbol: 'LINAUSDT', priceChange: '-0.00028', priceChangePercent: '-3.815', weightedAvgPrice: '0.00718', lastPrice: '0.00706',},
    {symbol: 'YFIUSDT', priceChange: '-340.0', priceChangePercent: '-4.303', weightedAvgPrice: '7721.7', lastPrice: '7562.0',},
  ]);
  const priceData = new Promise(function(resolve, reject) {
    console.log('conection');
    const response = DailyActive;
    resolve(response);
  })

  priceData.then((data) => {
    let ArrayResponse = new Array();
    for (let key in data) {
      ArrayResponse.push(data[key]);

    };
    // console.log(ArrayResponse);

  })
  return(
    <div className="page">

      < DPrice dailyFutures={dailyFutures}/>
      <div>

      </div>
    </div>
  )
}

export {Screener}

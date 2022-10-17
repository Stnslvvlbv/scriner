import React, { useState, useEffect } from 'react';

import { DPrice } from '../components/block/DPrice';
import DailyActive from 'D:/pr/scriner/react-app/src/API/DailyActive';

const Screener = function(props) {

  const [dailyFutures, setDeilyFutures] = useState([
    {symbol: 'loading', priceChange: '...', priceChangePercent: '', weightedAvgPrice: '', lastPrice: '',},
  ]);

useEffect(() => {
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
    setDeilyFutures(ArrayResponse);
    console.log(ArrayResponse);

  })
}, [])


  return(
    <div className="page">

      < DPrice dailyFutures={dailyFutures}/>
      <div>

      </div>
    </div>
  )
}

export {Screener}

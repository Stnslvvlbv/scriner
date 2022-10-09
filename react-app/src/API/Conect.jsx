import React from 'react'

const Conect = () => {
  const Binance = require('node-binance-api');
  const binance = new Binance().options({
    APIKEY: "",
    APISECRET: "",
  });

  return(binance);
}

export { Conect }

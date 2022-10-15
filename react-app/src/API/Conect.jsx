import React from 'react'

const Conect = () => {
const { Spot } = require('@binance/connector')

const apiKey = ''
const apiSecret = ''
const client = new Spot(apiKey, apiSecret)

client.account({ recvWindow: 2000 }).then(response => client.logger.log(response.data))

  return(
    <div>
      'binance'
    </div>
    );
}

export default Conect;

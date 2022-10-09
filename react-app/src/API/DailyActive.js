

const DailyActive = () => {

    const Binance = require('node-binance-api');
    const binance = new Binance().options({
      APIKEY: '',
      APISECRET: ''
    });
    const response = binance.futuresDaily()

    
    return(response)
}
 export default DailyActive();

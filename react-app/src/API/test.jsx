const Binance = require('node-binance-api');
const binance = new Binance().options({
  APIKEY: 'YWOHb3woqFpcr8BJg2ec7QdE3Ob6doVqFPfylzQ0X7rpzSwz3iYfh4C0awW8hiyU',
  APISECRET: 'DT2x4TpqhGuYJ1jgg8n8j8RMslxA2Gd6hO2Ll73PUevIGmiTZsnXta5Dt14ouZRC'
});

console.info( await binance.futuresPrices() );

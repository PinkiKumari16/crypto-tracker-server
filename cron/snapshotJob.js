const cron = require('node-cron');
const axios = require('axios');
require('dotenv').config();

const History = require('../models/History');

const COINGECKO_URL =
  'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1';

// Run every hour
cron.schedule('0 * * * *', async () => {
  try {
    const { data } = await axios.get(COINGECKO_URL);
    const currentDate = new Date().toISOString().split('T')[0]; // 'YYYY-MM-DD'

    for (const coin of data) {
      const coinData = {
        coinId: coin.id,
        name: coin.name,
        symbol: coin.symbol.toUpperCase(),
        price: coin.current_price,
        marketCap: coin.market_cap,
        change24h: coin.price_change_percentage_24h,
        timestamp: new Date(),
        date: currentDate,
      };

      await History.findOneAndUpdate(
        { coinId: coin.id, date: currentDate },
        coinData,
        { upsert: true, new: true, setDefaultsOnInsert: true }
      );
    }

    console.log('[Cron] Snapshot saved or updated at', new Date());
  } catch (err) {
    console.error('[Cron] Error:', err.message);
  }
});

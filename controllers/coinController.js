const axios = require("axios");
const Coin = require("../models/Coin");
const History = require("../models/History");

const COINGECKO_URL =
  "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1";
// GET: Live Coin Data from CoinGecko
exports.getCoins = async (req, res) => {
  try {
    const coins = await Coin.find();

    // If DB has data and it's not stale, return it
    if (coins.length > 0) {
      const lastUpdated = new Date(coins[0].timestamp);
      const now = new Date();
      const minutes = (now - lastUpdated) / (1000 * 60);

      if (minutes < 30) {
        // console.log('return data from database....');
        return res.json(coins); // return cached version
      }
    }


    // Otherwise, fetch new data from CoinGecko
    const { data } = await axios.get(COINGECKO_URL);

    // Format response & prepare insert objects
    const formattedCoins = data.map((coin) => ({
      coinId: coin.id,
      name: coin.name,
      symbol: coin.symbol.toUpperCase(),
      image: coin.image,
      price: coin.current_price,
      marketCap: coin.market_cap,
      change24h: coin.price_change_percentage_24h,
      lastUpdated: coin.last_updated,
      timestamp: new Date(),
    }));
    // Overwrite Coin collection
    await Coin.deleteMany({});
    await Coin.insertMany(formattedCoins);
    // console.log('return dara from CoinGecko .....');
    res.json(formattedCoins);
  } catch (err) {
    console.error("Error fetching coin data:", err.message);
    res.status(500).json({ error: "Failed to fetch coin data" });
  }
};

exports.storeSnapshot = async (req, res) => {
  try {
    const { data } = await axios.get(COINGECKO_URL);

    const coinsToInsert = data.map((coin) => ({
      coinId: coin.id,
      name: coin.name,
      symbol: coin.symbol.toUpperCase(),
      price: coin.current_price,
      marketCap: coin.market_cap,
      change24h: coin.price_change_percentage_24h,
      timestamp: new Date(),
    }));

    // Format date as YYYY-MM-DD
    const currentDate = new Date().toISOString().split("T")[0];

    // Upsert into History collection by coinId + date
    for (const coin of coinsToInsert) {
      await History.findOneAndUpdate(
        { coinId: coin.coinId, date: currentDate },
        { ...coin, date: currentDate },
        { upsert: true, new: true, setDefaultsOnInsert: true }
      );
    }

    res.status(201).json({ message: "Snapshot stored in DB" });
  } catch (err) {
    console.error("Snapshot error:", err.message);
    res.status(500).json({ error: err.message });
  }
};

// GET: Historical Data by Coin ID (for charts)
exports.getHistoryByCoinId = async (req, res) => {
  try {
    const { coinId } = req.params;
    const history = await History.find({ coinId }).sort({ timestamp: 1 }); // sort by time
    res.json(history);
  } catch (err) {
    console.error("History fetch error:", err.message);
    res.status(500).json({ error: err.message });
  }
};
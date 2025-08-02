const mongoose = require('mongoose');

const coinSchema = new mongoose.Schema({
  coinId: String,
  name: String,
  symbol: String,
  image: String,
  price: Number,
  marketCap: Number,
  change24h: Number,
  lastUpdated: Date,
  timestamp: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Coin', coinSchema);

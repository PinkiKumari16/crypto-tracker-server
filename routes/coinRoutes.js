const express = require('express');
const router = express.Router();
const {
  getCoins,
  storeSnapshot,
  getHistoryByCoinId
} = require('../controllers/coinController');

router.get('/coins', getCoins);              // GET /api/coins
router.post('/history', storeSnapshot);      // POST /api/history
router.get('/history/:coinId', getHistoryByCoinId); // GET /api/history/:coinId

module.exports = router;

# 💹 Crypto Tracker

A full-stack cryptocurrency tracking dashboard where users can monitor real-time prices of top 10 coins, view historical trends, and store daily snapshots. Built using the MERN stack and powered by the CoinGecko API.

---

## 🔧 Tech Stack

### Frontend
- **React.js**
- **Tailwind CSS** for styling
- **Axios** for HTTP requests
- **Recharts** for chart visualization

### Backend
- **Node.js** with **Express.js**
- **MongoDB** with **Mongoose**
- **Node-Cron** for automated snapshots
- **CoinGecko API** for crypto data

### Deployment
- **Frontend**: [Vercel](https://vercel.com/)
- **Backend**: [Render](https://render.com/)
- **Database**: [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)

---

## 🚀 Live Demo
- **GitHub**: [Server Code](https://github.com/PinkiKumari16/crypto-tracker-server.git),
- **Frontend**: [Live Frontend URL](https://crypto-tracker-client-delta.vercel.app/)
- **Backend**: [Live API URL](https://crypto-tracker-server-qjd0.onrender.com/)

---

## 🔑 Features

### 📈 Live Dashboard
- Top 10 cryptocurrencies by market cap
- Search and sort coins by price
- Responsive card layout

### 🕒 Daily Snapshots
- Automated snapshot every hour using `node-cron`
- Stores price, market cap, and 24h change

### 📊 Historical Charts
- Visualize daily price history of any coin
- Clean and interactive charts with Recharts

### ➕ Manual Snapshot Trigger
- Button available to manually trigger history snapshot

---

## 🛠️ Getting Started

### 1. Clone the Repositories

```bash
git clone https://github.com/PinkiKumari16/server-crypto-tracker.git
cd server-crypto-tracker
```
### 2. Setup Backend

```
npm install
```

#### 1. 🔐 Environment Variables
Create a .env file inside the server directory with the following content:

```bash
PORT=5000
MONGO_URI=your_mongodb_atlas_connection_string
```

#### 2. ▶️ Run the Backend Server
```bash
npm run dev
```
Server will run on: http://localhost:5000

## ✅ Additional Features
- GET /api/coins → Live coin data
- POST /api/history → Store current snapshot to DB
- GET /api/history/:coinId → Get historical data of a coin

## 📧 Contact
**Pinki**
- pinkikmr2672002@gmail.com
- [Linkedin](https://www.linkedin.com/in/pinki-kumari-42b409257/)

## License
This project was created for evaluation as part of an interview assignment.


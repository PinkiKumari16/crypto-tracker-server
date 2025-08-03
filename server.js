const express = require('express');
const cors = require('cors');
const connectDB = require('./connection/dbConnection');
const dotenv = require('dotenv');
const coinRoutes = require("./routes/coinRoutes");
require('./cron/snapshotJob')

dotenv.config();

const app = express();

app.use(cors({
    origin: "https://crypto-tracker-client-delta.vercel.app/",
    methods: ["GET", "POST"],
    credentials: true
}));

connectDB();

app.use(express.json());

app.use("/api", coinRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT,()=>{
    console.log(`Server running on port ${PORT}`);
});
const express = require('express');
const morgan = require("morgan");
const axios = require("axios");

// Create Express Server
const app = express();

// Configuration
const PORT = 4040;
const HOST = "localhost";

const API_BASE_ENDPOINT = 'https://api.weather.yandex.ru/v2';

const cors = require('cors')

require('dotenv').config()

if (!process.env.WEATHER_API_KEY) {
  throw new Error('Вы забыли указать WEATHER_API_KEY в файле .env');
}

app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true,
  optionSuccessStatus: 200
}));

app.use(morgan('dev'));

app.get("/forecast", async (req, res) => {
  const requestUrl = `${API_BASE_ENDPOINT}/informers?lat=${req.query.lat}&lon=${req.query.lon}`;
  try {
    const response = await axios.get(
      requestUrl, {
      headers: {
        'X-Yandex-API-Key': process.env.WEATHER_API_KEY
      }
    }
    );
    res.status(200).send(response.data);
  } catch (e) {
    console.error('ERROR > ', e);
    return res.status(500).send();
  }
});

app.listen(PORT, HOST, () => {
  console.log(`Starting Proxy at ${HOST}:${PORT}`);
});
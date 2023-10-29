const express = require("express");
const stocks = require("./data/stocksData");
const mulberry32 = require("./lib/mulberry32");
const cors = require("cors");
const delayPromise = require("./lib/delayPromise");

const app = express();
const port = 3100;

app.use(cors());

function randomNumberFromString(str) {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = (hash << 5) - hash + str.charCodeAt(i);
    hash |= 0; // convert to 32-bit integer
  }
  return hash;
}

app.get("/api/stocks", async (req, res) => {
  await delayPromise(Math.random() * 500);
  res.send(stocks);
});

app.get("/api/stocks/last-prices", (req, res) => {
  res.send(stocks);
});

app.get("/api/stock/history/:id", async (req, res) => {
  await delayPromise(Math.random() * 2500 + 100);

  const generator = mulberry32(
    randomNumberFromString(req.params.id.toLowerCase())
  );
  let currDate = new Date();
  currDate.setSeconds(0);

  res.send({
    symbol: req.params.id,
    history: [...new Array(40)].map((_, i) => {
      return {
        time: currDate - 60 * 1000 * i,
        price: (generator() * 10).toFixed(3),
      };
    }),
  });
});

app.listen(port, () => {
  console.log(`Backend server listening on port ${port}`);
});

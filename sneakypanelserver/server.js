const express = require("express");
const cors = require("cors");
const config = require("config");

const fs = require("fs");

const app = express();

app.use(cors());
app.use(express.json());

app.post("/", function (req, res) {
  console.log(req.body);

  const label = req.body.label;
  const value = req.body.value;
  const profit = req.body.profit;
  const amount = req.body.amount;

  try {
    fs.appendFileSync(
      "data.txt",
      label + ":" + value + ":" + amount + ":" + profit + "\n"
    );

    res.json("success");
  } catch (err) {
    console.error(err);
  }
});

app.get("/", function (req, res) {
  fs.readFile("data.txt", "utf8", (err, data) => {
    if (err) res.json(err);
    res.json(data);
  });
});

app.get("/currencylist", (req, res) => {
  fetch("https://api.swapspace.co/api/v2/currencies", {
    headers: {
      Authorization: config.get("SwapSpaceApiKey"),
      Accept: "application/json",
    },
  })
    .then((r) => {
      r.json().then((r) => {
        res.json(r);
      });
    })
    .catch((e) => {
      res.json(e);
    });
});

const Port = 4000;

app.listen(Port, () => {
  console.log(`Server running on http://localhost:${Port}`);
});

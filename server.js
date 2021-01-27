const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const path = require("path");

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const app = express();

const port = process.env.PORT || 5000;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "client/build")));

  app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "client/build", "index.html"));
  });
}

app.post("/payment", (req, res) => {
  console.log("Body:", req.body);
  const body = {
    source: req.body.token.id,
    amount: req.body.amount,
    currency: "usd",
  };

  stripe.charges.create(body, (stripeError, stripeResponse) => {
    console.log("erro", stripeError);
    console.log("response", stripeResponse);
    if (stripeError) {
      res.status(500).send({ error: stripeError });
    } else {
      res.status(200).send({ success: stripeResponse });
    }
  });
});

app.listen(port, (error) => {
  if (error) throw error;
  console.log(`server running on : ${port}`);
});

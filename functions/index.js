const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51HwXwNJfI07XRe3Xhze1UfvIFp8BfB4GG47gRd1fJpzyduKXPhZ1TcsAYp558LWZGX6GpAzu0FrQxL6nOcDlqXxy00ShG7YQvW"
);

const app = express();

app.use(cors({ origin: true }));
app.use(express.json());

app.get("/", (request, response) =>
  response.status(200).send("cloud function working")
);
app.get("/ketan", (request, response) =>
  response.status(200).send("cloud function working ketan")
);

app.post("/payments/create", async (request, response) => {
  const total = request.query.total;

  console.log("payment recieved = ", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "inr",
  });

  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

exports.api = functions.https.onRequest(app);

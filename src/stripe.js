const stripe = require("stripe")(
  "sk_test_51HwXwNJfI07XRe3Xhze1UfvIFp8BfB4GG47gRd1fJpzyduKXPhZ1TcsAYp558LWZGX6GpAzu0FrQxL6nOcDlqXxy00ShG7YQvW"
);
const express = require("express");
const app = express();
app.use(express.static("."));

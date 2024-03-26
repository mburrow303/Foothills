require("dotenv").config();

const express = require("express");
const app = express();

const mongoose = require("mongoose");
const { PORT, MONGO } = process.env;
mongoose.connect(`${process.env.MONGO}/Foothills`);
const db = mongoose.connection;
db.once("open", () => console.log(`Connected to: ${MONGO}`));

const profile = require("./Controllers/profile.controller");
const quote = require("./Controllers/quote.controller");
const order = require("./Controllers/order.controller");

app.use(express.json());
app.use(require("cors")());

app.use("/profile", profile);
app.use("/quote", quote);
app.use("/order", order);

app.listen(PORT, () => console.log(`App is listening on port ${PORT}`));
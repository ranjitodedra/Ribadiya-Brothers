const express = require("express");
const errorMiddleware = require("./middleware/error")
const cookieParser = require("cookie-parser");
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());
app.use(cookieParser());

const product = require("./routes/productRoutes");
const user = require("./routes/userRoutes");
const order = require("./routes/orderRoutes");

app.use("/api/v1", product);
app.use("/api/v1", user);
app.use("/api/v1", order);

app.use(errorMiddleware)

module.exports = app

const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");

const itemsRoute = require("./routes");

const app = express();

app.use(helmet());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(morgan("combined"));

// routes
app.get("/api/version", (req, res) => res.send("1.0.0.0"));
app.use("/api", itemsRoute);

app.listen(3000, () => console.log("Listening on port 3000"));

module.exports = { app };

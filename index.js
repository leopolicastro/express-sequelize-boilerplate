if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const express = require("express");
const port = process.env.PORT || 8080;
const cors = require("cors");

const app = express();
// ALLOW CORS
app.use(cors());

app.listen(port, () =>
  console.info(`Express router listening on port ${port}!`)
);

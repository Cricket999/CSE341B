const express = require("express");
const bodyParser = require("body-parser");

const app = express();

const port = 3000;

app.use(bodyParser.json())
app.use("/", require("./routes"));

app.listen(port, () => {
    console.log(`app listening on port ${port}`);
  });
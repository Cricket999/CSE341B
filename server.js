const express = require("express");
const bodyParser = require("body-parser");
const { auth, requiresAuth, requiredScopes } = require('express-openid-connect');
require('dotenv').config();

const config = {
  authRequired: false,
  auth0Logout: true,
  secret: process.env.SECRET,
  baseURL: process.env.BASE_URL,
  clientID: process.env.CLIENT_ID,
  issuerBaseURL: process.env.ISSUER_BASE_URL
};

const port = 3000;

const app = express();

app.use(auth(config));

app.use(bodyParser.json())
app.use("/", require("./routes"));

app.listen(port, () => {
    console.log(`app listening on port ${port}`);
  });
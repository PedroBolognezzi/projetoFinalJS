const express = require('express');
const app = express();
const cors = require('cors');

require('dotenv-safe').config();

const db = require('./database/mongoConfig');
const animeRoute = require('./routes/animeRoute');

db.connect() ;

app.use(cors());
app.use(express.json());
app.use("/projeto-final", animeRoute);

module.exports = app;
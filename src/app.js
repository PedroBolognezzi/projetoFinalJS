const express = require('express');
const app = express();
const cors = require('cors');

require('dotenv-safe').config();

const db = require('./database/mongoConfig');
const livroRoutes = require('./routes/livrosRoutes');

db.connect() ;

app.use(cors());
app.use(express.json());
app.use("/projeto-final", livroRoutes);

module.exports = app;
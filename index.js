'use strict';

const express = require('express');
require('dotenv').config();
const cors = require('cors');

const CONNECTION_URL = process.env.CONNECTION_URL;
const PORT = process.env.PORT || 5000;
const app = express();
app.use(express.json());
app.use(cors());

const gameRoutes = require('./routes/games.js');

app.use(gameRoutes);

const mongoose = require('mongoose');


mongoose.connect(CONNECTION_URL)
.then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
.catch((error) => console.log(error.message));
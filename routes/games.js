const express = require('express');

const { getGames, createGame } =  require('../controllers/games.js');

const router = express.Router();

router.get('/games', getGames);
router.post('/games', createGame);

module.exports = router;

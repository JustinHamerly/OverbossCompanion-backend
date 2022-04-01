const express = require('express');

const { getGames, createGame, updateGame } =  require('../controllers/games.js');

const router = express.Router();

router.get('/games', getGames);
router.post('/games', createGame);
router.put('/games/:id', updateGame)

module.exports = router;

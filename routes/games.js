const express = require('express');

const { getGames, createGame, updateGame, deleteGame } =  require('../controllers/games.js');

const router = express.Router();

router.get('/games', getGames);
router.post('/games', createGame);
router.put('/games/:id', updateGame);
router.delete('/games/:id', deleteGame)

module.exports = router;

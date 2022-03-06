const SaveGame = require('../models/saveGame.js');

const getGames = async (req, res) => {
  try{
    const saveGames = await SaveGame.find();
    res.status(200).json(saveGames);
  }catch(error){
    res.status(404).json({message: error.message});
  }
}

const createGame = async (req, res) => {
  const game = req.body;

  const newGame = new SaveGame(game);

  try{
    await newGame.save();
    res.status(201).json(newGame);
  }catch(error){
    res.status(409).json({message: error.message});
  }
}

module.exports = {
  getGames,
  createGame
}
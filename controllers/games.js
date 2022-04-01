const mongoose = require('mongoose');
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

const updateGame = async (req, res) => {
  const { id } = req.params;
  const game = req.body

  if(!mongoose.Types.ObjectId.isValid(id)){
    return res.status(404).send('No post with ID')
  }
  try {
    const updatedGame = await SaveGame.findByIdAndUpdate(id, game);
    console.log(updatedGame)
    res.json(updatedGame);
  } catch (error) {
    console.log(error.message);
    res.send(error);
  }

}

module.exports = {
  getGames,
  createGame,
  updateGame
}
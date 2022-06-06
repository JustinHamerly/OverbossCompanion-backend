const mongoose = require('mongoose');
const SaveGame = require('../models/saveGame.js');

const getGames = async (req, res) => {
  try{
    const saveGames = await SaveGame.find({});
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
    return res.status(404).send('No game found')
  }
  try {
    const updatedGame = await SaveGame.findByIdAndUpdate(id, game);
    res.json(updatedGame);
  } catch (error) {
    res.status(409).json({message: error.message});
  }

}

const deleteGame = async (req, res) => {
  const { id } = req.params;
  if(!mongoose.Types.ObjectId.isValid(id)){
    return res.status(409).send('Cannot Delete Resource')
  }
  try{
    await SaveGame.findByIdAndDelete(id);
    res.status(204).send('successfully deleted game')
  }catch (error) {
    res.status(409).json({message: error.message});
  }
}

module.exports = {
  getGames,
  createGame,
  updateGame, 
  deleteGame
}
const mongoose = require('mongoose');

const saveGameSchema = mongoose.Schema({
  owner: String,
  terrain: [],
  playercount: Number,
  players: [],
  tilePool: [],
  tokenPool: [],
  tileDiscard: [],
  tokenDiscard: [],
  display: [],
  createdAt: {
    type: Date,
    default: new Date()
  }
});

const SaveGame = mongoose.model('SaveGame', saveGameSchema);

module.exports = SaveGame;
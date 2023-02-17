const mongoose = require('mongoose');

const saveGameSchema = mongoose.Schema({
  owner: String,
  terrain: [],
  playercount: Number,
  players: [],
  draw: {
    tile: [],
    token: []
  },
  discard: {
    tile: [],
    token: []
  },
  display: [],
  createdAt: {
    type: Date,
    default: new Date()
  }
});

const SaveGame = mongoose.model('SaveGame', saveGameSchema);

module.exports = SaveGame;
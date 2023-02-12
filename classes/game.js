const terrainLibrary = require('../data/terrainTypes')

class Game {
  constructor(terrainTypesArr = [], owner, playersArr) {
    this.terrainTypes = this._generateTypeLibrary(terrainTypesArr);
    this.draw = {
      tile: [],
      token: []
    };
    this.discard = {
      tile: [],
      token: []
    };
    this.display = {
      token: [],
      tile: []
    };
    this.history = [];
    this.activePlayer = 0;
    this.players = playersArr;
    this.owner = owner;

    this._fillPools();
  }

  _generateTypeLibrary(terrainTypes) {
    const typeLibrary = {};
    terrainTypes.forEach(type => typeLibrary[type] = terrainLibrary.get(type));
    return typeLibrary;
  }

  _fillPools() {
    for (let type in this.terrainTypes) {
      let obj = this.terrainTypes[type];

      if (obj.variants) {
        for (let v of obj.variants) {
          this.draw.tile.push(new Tile(type, v))
        }
      } else {
        for (let i = 0; i < 12; i++) {
          this.draw.tile.push(new Tile(type))
        }
      }

      for (let i = 0; i < 10; i++) {
        this.draw.token.push(new Token(obj.creatureName))
      }

      this.draw.token.push(new Token(type + 'crystal'))
    }

    for (let i = 0; i < 8; i++) {
      this.draw.tile.push(new Tile('dungeon'));
    }

    for (let i = 0; i < 7; i++) {
      this.draw.token.push(new Token('portal'));
    }

    for (let i = 0; i < 6; i++) {
      this.draw.token.push(new Token('miniboss'));
    }

    this.shuffle();
  }

  _replaceTokenByIdx(idx){
    const newToken = this.draw.token.pop();
    this.display.token[idx] = newToken ? newToken : null;
  }

  _replaceTileByIdx(idx){
    const newTile = this.draw.tile.pop();
    this.display.tile[idx] = newTile ? newTile : null;
  }

  _moveToHistory(idx){
    const selectedToken = this.display.token[idx];
    const selectedTile = this.display.tile[idx];
    const historyObj = {
      tile: selectedTile,
      token: selectedToken,
      player: this.activePlayer,
      position: idx
    }
    this.history.push(historyObj);
  }

  _nextPlayer(){
    const next = this.activePlayer+1;
    if(next<this.players.length){
      this.activePlayer = next;
    }else{
      this.activePlayer = 0;
    }
  }

  _prevPlayer(){
    const prev = this.activePlayer-1;
    if(prev<0){
      this.activePlayer = prev;
    }else{
      this.activePlayer = this.players.length-1;
    }
  }

}

Game.prototype.shuffle = function() {
  let m = this.draw.tile.length, n = this.draw.token.length, temp, idx;

  while (m) {
    idx = Math.floor(Math.random() * m--);
    temp = this.draw.tile[m];
    this.draw.tile[m] = this.draw.tile[idx];
    this.draw.tile[idx] = temp;
  };

  while (n) {
    idx = Math.floor(Math.random() * n--);
    temp = this.draw.token[n];
    this.draw.token[n] = this.draw.token[idx];
    this.draw.token[idx] = temp;
  }
}

Game.prototype.fillDisplay = function(){
  while(this.display.token.length<4 && this.draw.token.length){
    const tokenToDisplay = this.draw.token.pop();
    this.display.token.push(tokenToDisplay);
  }
  while(this.display.tile.length<4 && this.draw.tile.length){
    const tileToDisplay = this.draw.tile.pop();
    this.display.tile.push(tileToDisplay);
  }
}

Game.prototype.pickPair = function(idx = null){
  if(idx === null || idx>=4) return;

  this._moveToHistory(idx)
  this._replaceTileByIdx(idx);
  this._replaceTokenByIdx(idx);
  this._nextPlayer()
}

Game.prototype.undoPick = function(){
  const lastHistoryObj = this.history.pop();
  if(lastHistoryObj){
    const position = lastHistoryObj.position;

    const tokenToReturn = this.display.token[position];
    const tileToReturn = this.display.tile[position];
    if(tokenToReturn) this.draw.token.push(tokenToReturn);
    if(tileToReturn) this.draw.tile.push(tileToReturn);

    this.display.tile[position] = lastHistoryObj.tile;
    this.display.token[position] = lastHistoryObj.token;

    this._prevPlayer();
    this.shuffle();
  }
}

function Tile(tileName, variant = null){
  this.tileName = tileName;
  this.tileImg = variant ? tileName + variant : tileName
  this.variant = variant
}

function Token(tokenName){
  this.tokenName = tokenName;
  this.tokenImg = tokenName;
}

module.exports = {
  Token, 
  Tile, 
  Game
}

const { Game } = require('../classes/game');

const testInfo = {
  terrainArr: ['forest', 'cloudisland', 'graveyard', 'cave', 'camp'],
  testUser: 'user@email.com',
  testPlayerArr: ['player1', 'player2', 'player3']
}

test('can create a game', () => {
  const newGame = new Game(testInfo.terrainArr, testInfo.testUser, testInfo.testPlayerArr);
  expect(newGame).toBeDefined()
});

test('can randomize tiles and tokens in draw pile', () => {
  const newGame = new Game(testInfo.terrainArr, testInfo.testUser, testInfo.testPlayerArr);
  const tileString = newGame.draw.tile.reduce((prev, curr) => prev + curr.tileName, '');
  const tokenString = newGame.draw.token.reduce((prev, curr) => prev + curr.tokenName, '');
  newGame.shuffle();
  const randomTileString = newGame.draw.tile.reduce((prev, curr) => prev + curr.tileName, '');
  const randomTokenString = newGame.draw.token.reduce((prev, curr) => prev + curr.tokenName, '');

  expect(tileString).not.toEqual(randomTileString);
  expect(tokenString).not.toEqual(randomTokenString);
});

test('fillDisplay adds 4 tiles and tokens to the display', () => {
  const newGame = new Game(testInfo.terrainArr, testInfo.testUser, testInfo.testPlayerArr);
  newGame.fillDisplay();
  const displayTileLength = newGame.display.tile.length;
  const displayTokenLength = newGame.display.token.length;

  expect(displayTileLength).toEqual(4);
  expect(displayTokenLength).toEqual(4);
});

test('fillDisplay removes 4 tiles and tokens from the draw pool', () => {
  const newGame = new Game(testInfo.terrainArr, testInfo.testUser, testInfo.testPlayerArr);
  const tilePoolLength = newGame.draw.tile.length;
  const tokenPoolLength = newGame.draw.token.length;
  newGame.fillDisplay();
  const newTilePoolLength = newGame.draw.tile.length;
  const newTokenPoolLength = newGame.draw.token.length;

  const tilesRemoved = tilePoolLength - newTilePoolLength;
  const tokensRemoved = tokenPoolLength - newTokenPoolLength;

  expect(tilesRemoved).toEqual(4);
  expect(tokensRemoved).toEqual(4);
});

test('adds token and tile to history when picking a pair', () => {
  const newGame = new Game(testInfo.terrainArr, testInfo.testUser, testInfo.testPlayerArr);
  newGame.pickPair(1);
  newGame.pickPair(3);
  newGame.pickPair(0);
  expect(newGame.history.length).toEqual(3);
});

test('does not add to history when idx is not a number', () => {
  const newGame = new Game(testInfo.terrainArr, testInfo.testUser, testInfo.testPlayerArr);
  newGame.pickPair('hello');
  newGame.pickPair(false);
  newGame.pickPair({idx: 3});
  expect(newGame.history.length).toEqual(0);
})

test('does not add tile or token to history when picking a pair with no idx given', () => {
  const newGame = new Game(testInfo.terrainArr, testInfo.testUser, testInfo.testPlayerArr);
  newGame.pickPair(1);
  newGame.pickPair(3);
  newGame.pickPair();
  newGame.pickPair();
  expect(newGame.history.length).toEqual(2);
});

test('pickPair changes active player to the next player', () => {
  const newGame = new Game(testInfo.terrainArr, testInfo.testUser, testInfo.testPlayerArr);
  const firstPlayer = newGame.activePlayer;
  newGame.pickPair(1);
  const secondPlayer = newGame.activePlayer;
  expect(secondPlayer).toEqual(firstPlayer+1);
})

test('pickPair cycles to the first player when player moved forward at last idx', () => {
  const newGame = new Game(testInfo.terrainArr, testInfo.testUser, testInfo.testPlayerArr);
  const playerLength = newGame.players.length;
  for(let i=0; i<playerLength; i++){
    newGame.pickPair(0);
  }
  const currentPlayer = newGame.activePlayer;
  expect(currentPlayer).toEqual(0);
})
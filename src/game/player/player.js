// Import Gameboard and Ship classes
const Gameboard = require('../board/gameBoard');
const Ship = require('../ships/ship');

class Player {
	constructor(type) {
		this.type = type;
		this.gameBoard = new Gameboard();
		//! The add ship thing will need to be modified with the ships created in the ships folder.
		this.gameBoard.addShip = new Ship(3);
	}
}

module.exports = Player;

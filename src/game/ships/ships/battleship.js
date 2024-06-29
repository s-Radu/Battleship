const Ship = require('../ship');

// Dynamically create a subclass of Ship for Battleship
class Battleship extends Ship {
	constructor() {
		super(4, 'Battleship');
	}
}

module.exports = Battleship;

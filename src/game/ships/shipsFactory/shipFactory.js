// Import the ship classes
const Battleship = require('../ships/battleship');
const Carrier = require('../ships/carrier');
const Cruiser = require('../ships/cruiser');
const Destroyer = require('../ships/destroyer');
const Submarine = require('../ships/submarine');

function createFleet() {
	return {
		battleship: new Battleship(),
		carrier: new Carrier(),
		cruiser: new Cruiser(),
		destroyer: new Destroyer(),
		submarine: new Submarine(),
	};
}

module.exports = { createFleet };

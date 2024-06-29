// Import the ship instances
const battleship = require('../ships/battleship');
const carrier = require('../ships/carrier');
const cruiser = require('../ships/cruiser');
const destroyer = require('../ships/destroyer');
const submarine = require('../ships/submarine');

function createFleet() {
	return {
		battleship,
		carrier,
		cruiser,
		destroyer,
		submarine,
	};
}

module.exports = { createFleet };

console.log(createFleet());

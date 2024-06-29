const GameBoard = require('../board/gameBoard');
const { createFleet } = require('../ships/shipsFactory/shipFactory');

class Player {
	constructor(type) {
		this.type = type;
		this.gameBoard = new GameBoard();
		const fleet = createFleet();
		// Convert the fleet object into an array of its values (ship instances)
		Object.values(fleet).forEach((ship, index) => {
			const x = index; // Simplistic horizontal placement
			const y = 0; // Start at the top row
			const orientation = 'horizontal'; // Simplistic orientation
			this.gameBoard.placeShip(ship, { x, y }, orientation);
		});
	}
}

const player = new Player('human');
console.dir(player, { depth: null });

// Player at the moment positions all the ships in the first square, will need worked on so we can choose where we put them.

module.exports = Player;

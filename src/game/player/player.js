const GameBoard = require('../board/gameBoard');
const { createFleet } = require('../ships/shipsFactory/shipFactory');

class Player {
	constructor(type, boardSize = 10) {
		// Default boardSize to 10 if not provided
		this.type = type;
		this.gameBoard = new GameBoard(boardSize); // Pass boardSize correctly

		// Create a fleet of ships for the player
		const fleet = createFleet();

		// Attempt to place each ship in the fleet on the game board
		Object.values(fleet).forEach((ship) => {
			let placed = false;
			// The while loop will repeat on and on again untill all the ships are placed in a random position.
			// Test passes but it tries a lot of times before.
			while (!placed) {
				// Generate random coordinates within the board boundaries
				const x = Math.floor(Math.random() * boardSize);
				const y = Math.floor(Math.random() * boardSize);

				// Randomly choose the ship's orientation
				const orientation = Math.random() > 0.5 ? 'horizontal' : 'vertical';

				// Attempt to place the ship on the game board with the generated position and orientation
				placed = this.gameBoard.placeShip(ship, { x, y }, orientation);
			}
		});
	}
}

// const player = new Player('human');
// console.dir(player, { depth: null });

module.exports = Player;

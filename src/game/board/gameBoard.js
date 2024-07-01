class GameBoard {
	constructor() {
		this.boardSize = 10;
		this.ships = [];
		this.missedAttacks = [];
		// Initialize a 10x10 board with null values

		this.board = Array.from({ length: this.boardSize }, () =>
			Array(this.boardSize).fill(null),
		);
	}

	placeShip(ship, { x, y }, orientation) {
		// Check if the ship placement is within board boundaries
		if (
			(orientation === 'horizontal' && x + ship.length > this.boardSize) ||
			(orientation === 'vertical' && y + ship.length > this.boardSize)
		) {
			console.log('Ship placement exceeds board boundaries.');
			return false; // Prevent placement if it exceeds boundaries
		}

		// Check for collision
		for (let i = 0; i < ship.length; i++) {
			if (orientation === 'horizontal') {
				if (this.board[y][x + i] && this.board[y][x + i].ship) {
					console.log('Collision detected. Cannot place ship here.');
					return false; // Prevent placement on collision
				}
			} else {
				// Vertical
				if (this.board[y + i][x] && this.board[y + i][x].ship) {
					console.log('Collision detected. Cannot place ship here.');
					return false; // Prevent placement on collision
				}
			}
		}

		// Place the ship if no collision and within boundaries
		for (let i = 0; i < ship.length; i++) {
			if (orientation === 'horizontal') {
				this.board[y][x + i] = { ship, part: i };
			} else {
				// Vertical
				this.board[y + i][x] = { ship, part: i };
			}
		}
		this.ships.push(ship);
		return true; // Successfully placed the ship
	}
	receiveAttack({ x, y }) {
		const target = this.board[y][x];
		if (target) {
			target.ship.hit(target.part);
			return true; // Hit
		} else {
			this.missedAttacks.push({ x, y });
			return false; // Miss
		}
	}

	areAllShipsSunk() {
		return this.ships.every((ship) => ship.isSunk());
	}

	hasShipAt({ x, y }) {
		return this.board[y][x] !== null;
	}
}

module.exports = GameBoard;

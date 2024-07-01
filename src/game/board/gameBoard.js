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
		// Debugging log to inspect values
		console.log(
			`Placing ship at x: ${x}, y: ${y}, orientation: ${orientation}`,
		);

		// Validate x, y, and ship.length are numbers and within bounds
		if (
			typeof x !== 'number' ||
			typeof y !== 'number' ||
			x < 0 ||
			y < 0 ||
			x >= this.boardSize ||
			y >= this.boardSize
		) {
			console.log('Invalid x or y coordinate.');
			return false;
		}

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
			let targetX = x + (orientation === 'horizontal' ? i : 0);
			let targetY = y + (orientation === 'vertical' ? i : 0);

			// Ensure target coordinates are within the board
			if (targetX >= this.boardSize || targetY >= this.boardSize) {
				console.log('Ship placement exceeds board boundaries.');
				return false;
			}

			if (this.board[targetY][targetX] && this.board[targetY][targetX].ship) {
				console.log('Collision detected. Cannot place ship here.');
				return false; // Prevent placement on collision
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

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
		for (let i = 0; i < ship.length; i++) {
			if (orientation === 'horizontal') {
				this.board[y][x + i] = { ship, part: i };
			} else {
				this.board[y + i][x] = { ship, part: i };
			}
		}
		this.ships.push(ship);
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

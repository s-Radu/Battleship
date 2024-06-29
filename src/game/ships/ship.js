class Ship {
	constructor(length) {
		this.length = length;
		this.hits = 0;
	}

	// Increase the hits on the ship.
	hit() {
		this.hits += 1;
	}

	// Check if the hit ship has any life left ( took more hits then the length of the ship )
	isSunk() {
		return this.hits >= this.length;
	}

	// Reset method to reinitialize the ship's state
	reset() {
		this.hits = 0;
		this.sunk = false;
	}
}

module.exports = Ship;

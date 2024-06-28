class Ship {
	constructor(length, hit, sunk) {
		this.length = length;
		this.hit = hit;
		this.sunk = sunk;
	}

	// Increase the amount of times the ship has been hit, and decrease the length of the ship
	hit() {
		let shipHit = 0;
		shipHit++;
		this.length = this.length - 1;
	}

	// Determinate if the ship is sunk based on the hits it took and it's remaining length.
	sunk() {
		shipIsSunk = false;
		if (this.length === 0) {
			shipIsSunk = true;
		}
	}
}

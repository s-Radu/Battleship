// Import the specific ship modules
const battleShip = require('../ships/battleship');
const carrier = require('../ships/carrier');
const cruise = require('../ships/cruiser');
const destroyer = require('../ships/destroyer');
const submarine = require('../ships/submarine');

describe('Ships functionality', () => {
	beforeEach(() => {
		// Reset each ship before every test
		battleShip.reset();
		carrier.reset();
		cruise.reset();
		destroyer.reset();
		submarine.reset();
	});

	describe('Battleship', () => {
		test('hits are recorded', () => {
			battleShip.hit();
			expect(battleShip.hits).toBe(1);
		});

		test('Battleship sinks after enough hits', () => {
			for (let i = 0; i < 4; i++) {
				// Hit the ship 4 times
				battleShip.hit();
			}
			expect(battleShip.isSunk()).toBe(true);
		});

		test('Battleship is not sunk with fewer hits than its length', () => {
			battleShip.hit();
			battleShip.hit();
			expect(battleShip.isSunk()).toBe(false);
		});
	});

	describe('Carrier', () => {
		test('hits are recorded', () => {
			carrier.hit();
			expect(carrier.hits).toBe(1);
		});

		test('Carrier sinks after enough hits', () => {
			for (let i = 0; i < 5; i++) {
				// Hit the ship 5 times
				carrier.hit();
			}
			expect(carrier.isSunk()).toBe(true);
		});

		test('Carrier is not sunk with fewer hits than its length', () => {
			carrier.hit();
			carrier.hit();
			expect(carrier.isSunk()).toBe(false);
		});
	});

	describe('Cruise', () => {
		test('hits are recorded', () => {
			cruise.hit();
			expect(cruise.hits).toBe(1);
		});

		test('Cruise sinks after enough hits', () => {
			for (let i = 0; i < 5; i++) {
				// Hit the ship 5 times
				cruise.hit();
			}
			expect(cruise.isSunk()).toBe(true);
		});

		test('Cruise is not sunk with fewer hits than its length', () => {
			cruise.hit();
			cruise.hit();
			expect(cruise.isSunk()).toBe(false);
		});
	});

	describe('Destroyer', () => {
		test('hits are recorded', () => {
			destroyer.hit();
			expect(destroyer.hits).toBe(1);
		});

		test('Destroyer sinks after enough hits', () => {
			for (let i = 0; i < 2; i++) {
				// Hit the ship 2 times
				destroyer.hit();
			}
			expect(destroyer.isSunk()).toBe(true);
		});

		test('Destroyer is not sunk with fewer hits than its length', () => {
			destroyer.hit();
			expect(destroyer.isSunk()).toBe(false);
		});
	});

	describe('Submarine', () => {
		test('hits are recorded', () => {
			submarine.hit();
			expect(submarine.hits).toBe(1);
		});

		test('Submarine sinks after enough hits', () => {
			for (let i = 0; i < 3; i++) {
				// Hit the ship 3 times
				submarine.hit();
			}
			expect(submarine.isSunk()).toBe(true);
		});

		test('Submarine is not sunk with fewer hits than its length', () => {
			submarine.hit();
			submarine.hit();
			expect(submarine.isSunk()).toBe(false);
		});
	});
});

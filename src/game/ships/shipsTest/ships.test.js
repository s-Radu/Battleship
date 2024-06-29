// Import the specific ship classes
const BattleShip = require('../ships/battleship');
const Carrier = require('../ships/carrier');
const Cruiser = require('../ships/cruiser');
const Destroyer = require('../ships/destroyer');
const Submarine = require('../ships/submarine');

describe('Ships functionality', () => {
	let battleShip, carrier, cruiser, destroyer, submarine;

	beforeEach(() => {
		// Instantiate ship objects once before all tests
		if (!battleShip) {
			battleShip = new BattleShip();
			carrier = new Carrier();
			cruiser = new Cruiser();
			destroyer = new Destroyer();
			submarine = new Submarine();
		} else {
			// Reset ship state before each test
			battleShip.reset();
			carrier.reset();
			cruiser.reset();
			destroyer.reset();
			submarine.reset();
		}
	});

	describe('Battleship', () => {
		test('hits are recorded', () => {
			battleShip.hit();
			expect(battleShip.hits).toBe(1);
		});

		test('Battleship sinks after enough hits', () => {
			for (let i = 0; i < battleShip.length; i++) {
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

	describe('Cruiser', () => {
		test('hits are recorded', () => {
			cruiser.hit();
			expect(cruiser.hits).toBe(1);
		});

		test('Cruiser sinks after enough hits', () => {
			for (let i = 0; i < cruiser.length; i++) {
				cruiser.hit();
			}
			expect(cruiser.isSunk()).toBe(true);
		});

		test('Cruiser is not sunk with fewer hits than its length', () => {
			cruiser.hit();
			cruiser.hit();
			expect(cruiser.isSunk()).toBe(false);
		});
	});

	describe('Carrier', () => {
		test('hits are recorded', () => {
			carrier.hit();
			expect(carrier.hits).toBe(1);
		});

		test('Carrier sinks after enough hits', () => {
			for (let i = 0; i < carrier.length; i++) {
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

	describe('Destroyer', () => {
		test('hits are recorded', () => {
			destroyer.hit();
			expect(destroyer.hits).toBe(1);
		});

		test('Destroyer sinks after enough hits', () => {
			for (let i = 0; i < destroyer.length; i++) {
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
			for (let i = 0; i < submarine.length; i++) {
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

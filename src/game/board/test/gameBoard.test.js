const Gameboard = require('../gameBoard');
const Ship = require('../../ships/ship');

describe('Gameboard', () => {
	let gameboard;

	beforeEach(() => {
		gameboard = new Gameboard();
	});

	test('can place ships at specific coordinates', () => {
		const ship = new Ship(3);
		gameboard.placeShip(ship, { x: 2, y: 2 }, 'horizontal');
		expect(gameboard.hasShipAt({ x: 2, y: 2 })).toBe(true);
		expect(gameboard.hasShipAt({ x: 3, y: 2 })).toBe(true);
		expect(gameboard.hasShipAt({ x: 4, y: 2 })).toBe(true);
	});

	test('receives attacks and marks hits correctly', () => {
		const ship = new Ship(3);
		gameboard.placeShip(ship, { x: 2, y: 2 }, 'horizontal');
		gameboard.receiveAttack({ x: 2, y: 2 });
		expect(ship.hits).toBe(1);
	});

	test('receives attacks and records misses correctly', () => {
		gameboard.receiveAttack({ x: 5, y: 5 });
		expect(gameboard.missedAttacks).toContainEqual({ x: 5, y: 5 });
	});

	test('can report if all ships have been sunk', () => {
		const ship1 = new Ship(1);
		gameboard.placeShip(ship1, { x: 0, y: 0 }, 'horizontal');
		gameboard.receiveAttack({ x: 0, y: 0 }); // Sinks ship1

		const ship2 = new Ship(1);
		gameboard.placeShip(ship2, { x: 1, y: 1 }, 'horizontal');
		gameboard.receiveAttack({ x: 1, y: 1 }); // Sinks ship2

		expect(gameboard.areAllShipsSunk()).toBe(true);
	});

	test('reports not all ships are sunk if at least one is still afloat', () => {
		const ship1 = new Ship(1);
		gameboard.placeShip(ship1, { x: 0, y: 0 }, 'horizontal');
		gameboard.receiveAttack({ x: 0, y: 0 }); // Sinks ship1

		const ship2 = new Ship(1);
		gameboard.placeShip(ship2, { x: 1, y: 1 }, 'horizontal');
		// ship2 is not attacked and therefore not sunk

		expect(gameboard.areAllShipsSunk()).toBe(false);
	});
});

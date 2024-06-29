const Ship = require('../ship');

describe('Ship status', () => {
	test('Hits are recorde', () => {
		const ship = new Ship(3);
		ship.hit();
		expect(ship.hits).toBe(1);
	});

	test('Ship sinks after enough hits', () => {
		const ship = new Ship(3);
		ship.hit();
		ship.hit();
		ship.hit();
		expect(ship.isSunk()).toBe(true);
	});

	test('Ship is not sunk after enough hits', () => {
		const ship = new Ship(3);
		ship.hit();
		ship.hit();
		expect(ship.isSunk()).toBe(false);
	});
});

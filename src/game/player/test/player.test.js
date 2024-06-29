const Player = require('../player');

describe('Player class', () => {
	test('should be able to instantiate a Player', () => {
		const player = new Player('real');
		expect(player).not.toBeUndefined();
	});

	test('should have two types of players: "real" and "computer"', () => {
		const realPlayer = new Player('real');
		const computerPlayer = new Player('computer');
		expect(realPlayer.type).toBe('real');
		expect(computerPlayer.type).toBe('computer');
	});

	test('each player should contain its own gameboard', () => {
		const player = new Player('real');
		expect(player.gameBoard).not.toBeUndefined();

		expect(player.gameBoard).toHaveProperty('ships');
	});
});

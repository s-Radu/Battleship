const { createFleet } = require('../shipFactory');

describe('Testing the creation of our ships', () => {
	it('should create a fleet with the correct ship instances', () => {
		const fleet = createFleet();
		expect(fleet).toEqual({
			battleship: expect.objectContaining({ length: 4, hits: 0 }),
			carrier: expect.objectContaining({ length: 4, hits: 0 }),
			cruiser: expect.objectContaining({ length: 4, hits: 0 }),
			destroyer: expect.objectContaining({ length: 4, hits: 0 }),
			submarine: expect.objectContaining({ length: 4, hits: 0 }),
		});
	});
});

const Ship = require('../ship');

class Cruiser extends Ship {
	constructor() {
		super(4, 'Cruiser');
	}
}

module.exports = Cruiser;

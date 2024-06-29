const Ship = require('../ship');

class Carrier extends Ship {
	constructor() {
		super(4, 'Carrier');
	}
}

module.exports = Carrier;

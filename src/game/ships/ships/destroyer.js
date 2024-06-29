const Ship = require('../ship');

class Destroyer extends Ship {
	constructor() {
		super(4, 'Destroyer');
	}
}

module.exports = Destroyer;

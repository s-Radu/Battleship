const Ship = require('../ship');

class Submarine extends Ship {
	constructor() {
		super(4, 'Submarine');
	}
}

module.exports = Submarine;

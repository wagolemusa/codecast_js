let assert = require('chai').assert;
describe('#sum', function() {
	it('should return the total of some numbers', function() {
		let array = [50, 100, 150];
		let actual = sum(array);
		let expected = 300;
		assert.equal(actual, expected);
	});
});

describe('#max', function() {
	it('should return the largest of some numbers', function() {
		let array = [47, -125, 25];
		let actual = max(array);
		let expected = 47;
		assert.equal(actual, expected);
	});
});

describe('#reducePath', function() {
	let object = { 
	  user: { 
		name: { 
		  first: 'Dan', 
		  last: 'Nolan' 
		}
	  } 
	};
	it('should find the value in the path', function() {
		let path = 'user.name.first';
		let actual = find(object, path);
		let expected = 'Dan';
		assert.equal(actual, expected);
	});
	it('should return null for bad paths', function() {
		let path = 'user.wallet.money';
		let actual = find(object, path);
		let expected = null;
		assert.equal(actual, expected);
	});
});




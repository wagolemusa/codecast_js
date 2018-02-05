const chai = require('chai'),
	  assert = chai.assert;
	  
describe('cache', function() {
	describe('api', function() {
		it('should be an object', function() {
			assert.isObject(cache);
		});
		['add', 'remove', 'has', 'get', 'clear'].forEach(name => {
			it(`should implement the ${name} method`, function() {
				assert.isFunction(cache[name]);
			});
		});
	});
	describe('caching values', function() {
		beforeEach(function() {
			cache.add('TreeImage', { title: 'tree.jpg' });
			cache.add('CatPhoto', { title: 'cat.png' });
		});
		it('should let us check if we cached the value', function() {
			assert.equal(cache.has('TreeImage'), true);
		});
		it('should let us lookup the cached values', function() {
			assert.equal(cache.get('TreeImage').title, 'tree.jpg');
		});
		describe('removing a cached values', function() {
			beforeEach(function() {
				cache.remove('TreeImage');
			});
			it('should no longer have that value', function() {
				assert.equal(cache.has('TreeImage'), false);
			});
			it('should retain the other cached value', function() {
				assert.equal(cache.has('CatPhoto'), true);
			});
		});
		describe('clearing cached values', function() {
			beforeEach(function() {
				cache.clear()
			});
			it('should no longer have either value', function() {
				assert.equal(cache.has('TreeImage'), false);
				assert.equal(cache.has('CatPhoto'), false);
			});
		});
		afterEach(function() {
			cache.clear();
		});
	});
});

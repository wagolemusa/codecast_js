let cache = (function(){
	var _localChache = {};
	function add(key, value){
		//store the value in the localcache
		_localChache[key] = value;

	}
	function remove(value){
		delete _localChache[value];

	}
	function has(){
		// check if the localChache has the value
		return _localChache.hasOwnProperty(value);

	}
	function get(value){
		// return the value in the localChache
		return _localChache[value];

	}

	function clear(){
		_localChache = {};

	}
	return {
		add,
		remove,
		has,
		get,
		clear
	}
}());
function sum(numbers){
	//Find sum of the number
	return numbers.reduce(function(total, number){
		return total + number

	}, 0);
}

function max(numbers){
	//Find max of the number
	return numbers.reduce(function(max, number){
		return max > number ? max : number;
			} -Infinity);
}

function find(object, path){
	//Find the value store of the object
		// designated by the path i.e.'data.user.name.first'
		let properties = path.aplit('.');
		return properties.reduce(function(obj, prop){
			return obj && obj[prop]
		}, object);


}
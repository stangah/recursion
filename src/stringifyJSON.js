// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to have to write it from scratch:
var stringifyJSON = function (obj) {
  // your code goes here
  var temp = [];
  if (obj === null) {
  	return 'null';
  } else if (Array.isArray(obj)) {
  	for (var i = 0; i < obj.length; i++) {
  		temp.push(stringifyJSON(obj[i]));
  	}
  	return '[' + temp.join(',') + ']';
  } else if (typeof obj === 'object') {	
  	for (var key in obj) {
  		if (typeof obj[key] === 'function' || obj[key] === undefined) {
  			continue;
  		}
  		temp.push(stringifyJSON(key) + ':' + stringifyJSON(obj[key]));
  	}
  	return '{' + temp.join(',') + '}';
  } else if (typeof obj === 'string') {
  	return '"' + obj + '"';
  } else {
  	return obj.toString();
  }
};

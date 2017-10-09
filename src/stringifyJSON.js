// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  //convert strings into strings
  if (typeof obj === 'string') {
    return '"' + obj + '"';
  }

  //convert arrays into string
  if (Array.isArray(obj)) {
    //var to store obj array results
    var stringifiedResults = [];
    for (var i = 0; i < obj.length; i++) {
      stringifiedResults.push(stringifyJSON(obj[i]));
    }
    //convert arrays within something
    return '[' + stringifiedResults + ']';
  }

  //turn objects into strings
  if (typeof obj === 'object' && obj !== null) {
    //convert objects within something
    var result = [];
    for (var key in obj) {
      if (typeof obj[key] !== 'undefined' && typeof obj[key] !== 'function') {
        result.push(stringifyJSON(key) + ':' + stringifyJSON(obj[key]));
      }
    }
    return '{' + result.join(',') + '}';
  }

  //add ' ' to obj input to convert obj input into strings for numbers,etc.
  return '' + obj;
};

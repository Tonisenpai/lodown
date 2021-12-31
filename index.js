'use strict';

// YOU KNOW WHAT TO DO //

/**
 * identity: Designed to take in a value and return that value unchanged.
 * 
 * @param {Value}: Function takes in a value 
 * @returns {Value}: Function returns that value unchanged
 */
function identity(value) {
    return value;
}
module.exports.identity = identity;

/**
 * typeOf: Designed to take in a value and return the type of data that value represents. It 
 * must do special checks in order to ensure that all the datatypes that the interpreter would
 * return as 'object' are correctly identified as the datatype they really are.
 * 
 * @param {Value}: Function takes in a value and checks if it is an array, null or instance
 * of Date. If it is not, then it checks the type of value it is. If it is none of the other 
 * values, the function returns 'object'.
 * @returns {String}: Function returns a string indicating what datatype the value is
 */
function typeOf(value) {
    if (Array.isArray(value) === true) {
        return 'array';
    } else if (typeof value === 'object' && value === null) {
        return 'null';
    } else if (typeof value === 'object' && value instanceof Date) {
        return 'date';
    } else if (typeof value !== 'object') {
        return typeof value;
    } else {
        return 'object';
    }

}
module.exports.typeOf = typeOf;

/**
 * first: Designed to take in an array and a number and return the first elements that match
 * the number in the array.
 * 
 * @param {Array}: Function takes in an array 
 * @param {Number}: Function takes in a number 
 * @returns {Elements of Array}: Function returns the first elements of array
 */
function first(array, number) {
    // create a conditional statement that checks if the array is or is not actually an array
    if (!Array.isArray(array)) {
        // return an empty array
        return [];
    } else {
        // iterate over the array
        for (let i = 0; i < array.length; i++){

        }
        // create another conditional statement: if - there is no number or it's not a number
        if (number < 0) {
            // return an empty array
            return [];
            // else if: the number is NaN or it's type does not equal 'number'
        } else if (number === NaN || typeof number !== 'number') {
            // return the first element of the array
            return array[0];
            // else if: the number is greater than the array's length
        } else if (number > array.length) {
            // return the entire array
            return array;
            // else: 
        } else {
            // use the slice method to return a sliced copy of the first items of array up until the index of the number provided
            return array.slice(0, number);
        }
    }

    
}
module.exports.first = first;

/**
 * last: Designed to take in an array and a number and return the last elements that match
 * the number in the array.
 * 
 * @param {Array}: Function takes in an array 
 * @param {Number}: Function takes in a number 
 * @returns {Elements of Array}: Function returns the last elements of array
 */
 function last(array, number) {
    // create a conditional statement that checks if the array is or is not actually an array
    if (!Array.isArray(array)) {
        // return an empty array
        return [];
    } else {
        // iterate over the array backwards
        for (let i = 0; i < array.length; i++){

        }
        // create another conditional statement: if - there is no number or it's not a number
        if (number < 0) {
            // return an empty array
            return [];
            // else if: the number is NaN or it's type does not equal 'number'
        } else if (number === NaN || typeof number !== 'number') {
            // return the last element of the array
            return array[array.length - 1];
            // else if: the number is greater than the array's length
        } else if (number > array.length) {
            // return the entire array
            return array;
            // else: 
        } else {
            // use the slice method to return a sliced copy of the last items of array up until the index of the number provided
            // to get the last number of items, must use negative number and array.length to access it
            return array.slice(-number, array.length);
        }
    }
}
module.exports.last = last;

/**
 * indexOf: Designed to loop through an array to find if an element that is passed in is located 
 * in that array. If it is, then the function returns that value and if not it returns -1.
 *
 * @param {Array} : Function takes a parameter that is an array.
 * @param {Value} : Function takes a second parameter that is a number.
 * @returns {Index of First Occurrence of Value or -1}
 * Returns the index of the array that is the first occurrance of value (or)
 * returns -1, if the passed-in value is not in the array.
 * 
 */
 function indexOf(arr, value) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === value) {
          return i;
      } 
    }
    return -1;
  }
module.exports.indexOf = indexOf;

/**
 * contains: Designed to use the ternary operator and check if the value passed
 * into the function is an element inside the array, returning a boolean value.
 * 
 * @param {Array} collection: Function takes in an array
 * @param {Value} action: Function takes in a value
 * @returns {Boolean}: Function returns true if array contains value and false if not
 */
 function contains(array, value) {
    // use ternary operator and the includes method to check if array includes the value
    return array.includes(value) ? true : false;
}
module.exports.contains = contains;

/**
 * each: Designed to loop over a collection, Array or Object, and applies the 
 * action Function to each value in the collection.
 * 
 * @param {Array or Object} collection: The collection over which to iterate.
 * @param {Function} action: The Function to be applied to each value in the 
 * collection
 */
function each(collection, action) {
    if(Array.isArray(collection)) {
        for(var i = 0; i < collection.length; i++) {
            action(collection[i], i, collection);
        }
    } else {
        for (var key in collection) {
            action(collection[key], key, collection);
        }
    }
}
module.exports.each = each;

/**
 * unique: Designed to loop over an Array and pull out the values that are the
 * first instance of that value and put these in a new array without any of the
 * duplicate values.
 * 
 * @param {Array} collection: The collection over which to iterate
 * @returns {Array}: returns an array with only unique values and no duplicates
 */
 function unique(array) {
    // create a new set and initialize it to a variable called special
    let special = [...new Set(array)];
    // return the variable
    return special;
}
module.exports.unique = unique;

/**
 * filter: Designed to loop over an Array and use a test function to pull out the 
 * values that match or returns true for what the test function is supposed to return and then 
 * at the end, it is suppsosed to return an array that includes those elements.
 * 
 * @param {Array} collection: The collection over which to iterate
 * @param {Function}: takes in a test function with rules in which to filter the elements
 * @returns {Array}: returns a new array of elements for which calling the function 
 * returned true
 */
 function filter(array, test) {
    // create a new array variable and initialize it to array literal
    let outputArr = [];
    
    // iterate over the array
    for (let i = 0; i < array.length; i++) {
        // create conditional: if - call of function === true
        if (test(array[i], i, array)) {
            // push the current index of the array to the output array
            outputArr.push(array[i]);
        }
    }
    // return the output array
    return outputArr;
}
module.exports.filter = filter;

/**
 * reject: Designed to loop over an Array and use a test function to pull out the 
 * values that doesn't match or returns false for what the test function is supposed to return 
 * and then at the end, it is suppsosed to return an array that includes those elements.
 * 
 * @param {Array} collection: The collection over which to iterate
 * @param {Function}: takes in a test function with rules in which to test for false elements
 * @returns {Array}: returns a new array of elements for which calling the function 
 * returned false for the elements in the array
 */
function reject(array, test) {
    // create a new array variable and initialize it to array literal
    let outputArr = [];
    
    // iterate over the array
    for (let i = 0; i < array.length; i++) {
        // create conditional: if - call of function === true
        if (!test(array[i], i, array)) {
            // push the current index of the array to the output array
            outputArr.push(array[i]);
        }
    }
    // return the output array
    return outputArr;
}
module.exports.reject = reject;

/**
 * partition: Designed to loop over an Array and use a test function to separate the truthy
 * values and falsy values into two separate arrays and return an array that has both arrays 
 * in it as values.
 * 
 * @param {Array or Object} collection: The collection over which to iterate
 * @param {Function}: takes in a test function to act on collection
 * @returns {Array}: returns an array of arrays - the array of truthy elements and the array
 * of falsy elements, both inside of the new array 
 */
 function partition(array, test) {
    // create 2 new array variables and initialize it to array literal
    let output1 = [];
    let output2 = [];
    
    // iterate over the array
    for (let i = 0; i < array.length; i++) {
        // create conditional: if - call of function === true
        if (test(array[i], i, array)) {
            // push the current index of the array to the output array
            output1.push(array[i]);
        } else { // else, push it into the second output array
            output2.push(array[i]);
        }
    }
    // return the output array with both arrays "partitioned" in an outer array
    return [output1, output2];
}
module.exports.partition = partition;

/**
 * map: Designed to loop over an Array and use a test function to act on each element in the
 * array, modifying the elements at each iteration and then return an array containing the 
 * modified elements.
 * 
 * @param {Array or Object} collection: The collection over which to iterate
 * @param {Function}: takes in a test function to act on collection
 * @returns {Array}: returns an array containing elements modified by passed in function  
 */
function map(collection, func) {
    // create output array
    let output = [];

    // determine if colletion is an array
    if (Array.isArray(collection)) {
        // iterate through array
        for (let i = 0; i < collection.length; i++) {
            // call input function, passing in current array value, current index and collection
            var result = func(collection[i], i, collection);
            output.push(result);
        }
    } else {
        for (var key in collection) {
            var result = func(collection[key], key, collection);
            output.push(result);
        }
    }
    // return the output array
    return output;
}
module.exports.map = map;

/**
 * pluck: Designed to loop over an Array of objects and return a new array containing 
 * the values of the passed in property from each key/value pair in the object.
 * 
 * @param {Array of Objects} collection: The collection over which to iterate
 * @param {Property}: takes in a test function to act on collection
 * @returns {Array}: returns an array containing only the values of the passed in 
 * property from each key/value pair in the object  
 */
function pluck(array, prop) {
    // create an output variable and set it equal to the mapped function
  let output = _.map(array, function(value) {
      // return the property of the current value
      return value[prop];
  });
  // return the output
  return output;
}
module.exports.pluck = pluck;

/**
 * every: Designed to loop over an Array or Object and call a passed in function for every
 * element in the collection and return true if every element is truthy or false if not
 * 
 * @param {Array or Object} collection: The collection over which to iterate
 * @param {Function}: takes in a test function to act on collection
 * @returns {Boolean}: returns true if condition in passed in function is truthy for every
 * element and false if not.  
 */
 function every(collection, test) {
    // if function is undefined, return true
    if (test === undefined) {
        if (Array.isArray(collection)) {
            // iterate through array
            for (let i = 0; i < collection.length; i++) {
                // test if every element has a falsy value, if so, return false
                if (!collection[i]) {
                    return false;
                }
            }
        } else {// iterate through the object
            for (var key in collection) {
                // test if every element has a falsy value, if so, return false
                if (!collection[key]) {
                return false;
                }
            }
        }
        // determine if colletion is an array
    } else { 
        if (Array.isArray(collection)) {
            // iterate through array
            for (let i = 0; i < collection.length; i++) {
                // test if every element is not true and return false if even one is not true
                if (!test(collection[i], i, collection)) {
                    return false;
                } 
            }
        } else {
        for (var key in collection) {
            if (!test(collection[key], key, collection)) {
                return false;
                } 
            }
        }
    }
    // return true outside of conditional statement
    return true;
}
module.exports.every = every;

/**
 * some: Designed to loop over an Array or Object and call a passed in function for every
 * element in the collection and return false if every element is falsy or true if not
 * 
 * @param {Array or Object} collection: The collection over which to iterate
 * @param {Function}: takes in a test function to act on collection
 * @returns {Boolean}: returns false if condition in passed in function is falsy for every
 * element and true if not.  
 */
 function some(collection, test) {
    // if function is undefined, return true
    if (test === undefined) {
        if (Array.isArray(collection)) {
            // iterate through array
            for (let i = 0; i < collection.length; i++) {
                // test if every element has a falsy value, if so, return false
                if (collection[i]) {
                    return true;
                }
            }
        } else {// iterate through the object
            for (var key in collection) {
                // test if every element has a falsy value, if so, return false
                if (collection[key]) {
                return true;
                }
            }
        }
        // determine if colletion is an array
    } else { 
        if (Array.isArray(collection)) {
            // iterate through array
            for (let i = 0; i < collection.length; i++) {
                // test if every element is not true and return false if even one is not true
                if (test(collection[i], i, collection)) {
                    return true;
                } 
            }
        } else {
        for (var key in collection) {
            if (!test(collection[key], key, collection)) {
                return true;
                } 
            }
        }
    }
    // return true outside of conditional statement
    return false;
}
module.exports.some = some;

/**
 * reduce: Designed to loop over every element in the array and use the "previous result" as 
 * the starting point of each iteration. The passed in function does a calculation on each 
 * element, accumulating with each previous result and the function returns the return value
 * of the final function call at the last iteration. If a seed is present, at the first 
 * iteration, the seed is the starting point. If there is no seed, the first element in the 
 * array is the starting point.
 * 
 * @param {Array} collection: The collection over which to iterate
 * @param {Function}: takes in a test function to act on collection
 * @returns {Number or Value}: returns a number that results in the accumulated result from 
 * the passed in function's iteration. If the seed is an empty array or empty object, then 
 * that is the type of value reduce will return  
 */
 function reduce(array, test, seed) {
    // if seed is not present
    if (seed === undefined) {
        // set seed to first value in the array
        seed = array[0];
        // iterate through array starting at the 1 index
        for (let i = 1; i < array.length; i++) {
            // assign function call to seed variable, will change at each iteration
            seed = test (seed, array[i], i);
        } 
    } else {
        // iterate through the array normally, with index equal to 0
        for (let i = 0; i < array.length; i++) {
            // assign function call to seed variable, will change at each iteration
            seed = test(seed, array[i], i);
        }
    }
    // return the seed
    return seed;
}
module.exports.reduce = reduce;

/**
 * extend: Designed to take in any number of objects, use the first object as an accumulator
 * and copy the contents of all the other objects passed in as arguments into the first
 * object, then return the resulting accumulated object.
 * 
 * @param {Object} collection: The collection over which to iterate
 * @param {...Objects}: takes in a test function to act on collection
 * @returns {Object}: returns an accumulated object 
 */
 function extend(...obj1) {
    // use the Object.assign method to copy the properties
    let newObj = Object.assign(...obj1);

    // return the object
    return newObj;
}
module.exports.extend = extend;
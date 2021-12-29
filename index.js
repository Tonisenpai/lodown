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

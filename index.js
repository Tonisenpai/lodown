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
 * typeOf: Designed to take in a value and return 
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

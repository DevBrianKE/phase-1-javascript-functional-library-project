// Iterates over a collection, applying a callback function to each element
function myEach(collection, callback) {
    for (let key in collection) {
      callback(collection[key]);
    }
    return collection; // Returns the original collection
  }
  
  // Creates a new array by applying a callback function to each element in the collection
  function myMap(collection, callback) {
    let newArr = [];
    for (let key in collection) {
      newArr.push(callback(collection[key]));
    }
    return newArr; // Returns the transformed array
  }
  
  // Reduces a collection to a single value based on a callback function
  function myReduce(collection, callback, acc) {
    let keys = Object.keys(collection);
    let index = 0;
  
    if (acc === undefined) { // If no initial value is provided, use the first element
      acc = collection[keys[0]];
      index = 1;
    }
  
    for (; index < keys.length; index++) {
      acc = callback(acc, collection[keys[index]], collection);
    }
    return acc; // Returns the accumulated value
  }
  
  // Finds and returns the first element in the collection that satisfies the predicate function
  function myFind(collection, predicate) {
    for (let key in collection) {
      if (predicate(collection[key])) return collection[key];
    }
    return undefined; // Returns undefined if no match is found
  }
  
  // Filters the collection, returning an array of elements that satisfy the predicate function
  function myFilter(collection, predicate) {
    let result = [];
    for (let key in collection) {
      if (predicate(collection[key])) {
        result.push(collection[key]);
      }
    }
    return result; // Returns the filtered array
  }
  
  // Returns the number of elements in an array or object
  function mySize(collection) {
    return Object.keys(collection).length;
  }
  
  // Returns the first element or first n elements of an array
  function myFirst(array, n = 1) {
    return n === 1 ? array[0] : array.slice(0, n);
  }
  
  // Returns the last element or last n elements of an array
  function myLast(array, n = 1) {
    return n === 1 ? array[array.length - 1] : array.slice(-n);
  }
  
  // Returns an array of keys from an object
  function myKeys(object) {
    return Object.keys(object);
  }
  
  // Returns an array of values from an object
  function myValues(object) {
    return Object.values(object);
  }
  

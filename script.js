/*
  Object.defineProperties & Trainings
*/

const myObject = {
  a: 1,
  b: 2,
}

Object.defineProperty(myObject, "a", {
  writable: true,       // false : will not change the value
  enumerable: false,     // false : will not include added value 
  configurable: false,  // false : will not delete a value
  value: 500,
});

Object.defineProperty(myObject, "c", {
  value: 3,
});

myObject.d = 4;

Object.defineProperties(myObject, {
  e: {
    writable: false,
    enumerable: false,
    configurable: false,
    value: 5,
  },
  f: {
    writable: false,
    enumerable: false,
    configurable: false,
    value: 6,
  },
  g: {
    writable: true,
    enumerable: true,
    configurable: true,
    value: 7,
  }
});

console.log(myObject);
console.log(Object.getOwnPropertyDescriptor(myObject, "a"));
console.log(Object.getOwnPropertyDescriptor(myObject, "c"));
console.log(Object.getOwnPropertyDescriptor(myObject, "d"));

console.log(Object.getOwnPropertyNames(myObject));
console.log(Object.keys(myObject));   // return vlaues that only can loops / enumerable: false
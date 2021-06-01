/*
  Object Metadata
  writable
  enumerable
  configurable
  ============
  Object.defineProperty(obj, prop, descriptor)
*/

const myObject = {
  a: 1,
  b: 2,
}

Object.defineProperty(myObject, "c", {
  writable: true,       // false : will not change the value
  enumerable: true,     // false : will not include added value 
  configurable: false,  // false : will not delete a value
  value: 3,
});

// Object.defineProperty(myObject, "c", {
//   writable: true,
// });

console.log(delete myObject.c);
myObject.c = 500;

console.log(myObject);

console.log('#'.repeat(10));

for (let prop in myObject) {
  console.log(prop, myObject[prop]);
}

console.log('#'.repeat(10));

console.log(Object.getOwnPropertyNames(myObject));
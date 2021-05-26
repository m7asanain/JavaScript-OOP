/*
  Prototype 3
*/

let myString = "Mustafa";

console.log(String.prototype);

String.prototype.zFill = function(width) {
  let theResult = this;

  while (theResult.length < width) {
    theResult = `0${theResult}`;
  }

  return theResult.toString();
};

console.log("54".zFill(6));
console.log("654".zFill(6));
console.log("8464".zFill(6));
console.log("48465".zFill(6));
console.log("151186".zFill(6));

console.log("--------------");

String.prototype.sayYouLoveMe = function() {
  return `I love you ${this}`;
}

console.log("Mustafa".sayYouLoveMe());
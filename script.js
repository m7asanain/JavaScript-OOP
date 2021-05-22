/*
  Defining Object
  [1] Object Literal
  [2] With New Keyword
  [3] With Object.create()
*/

let mainObj = {
    hasDiscount: true,
    showMsg: function() {
        return `You${this.hasDiscount ? "" : " Don't"} Have a Discount`;
    }
}

console.log(mainObj.hasDiscount);
console.log(mainObj.showMsg());
console.log('---------------');

let otherObj = Object.create(mainObj);

otherObj.hasDiscount = false;
console.log(otherObj.hasDiscount);
console.log(otherObj.showMsg());
console.log('---------------');

let lastObj = Object.create(mainObj);

// lastObj.hasDiscount = true;
console.log(lastObj.hasDiscount);
console.log(lastObj.showMsg());
console.log('---------------');
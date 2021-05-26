/*
  Constructor Function 80%
  Built In Constructors
*/

function User(name) {
  this.name = name;
  this.welcome = function() {
    return `Welcome ${this.name}`;
  };
}

let user1 = new User("Mustafa");
let user2 = new User("Ahmed");

let obj1 = new Object({ a: 1 });
let obj2 = new Object({ b: 2 });
let obj3 = { c: 3 };    // best way

let num1 = new Number(1);
let num2 = new Number(2);
let num3 = 3;    // best way

let str1 = new String("Mustafa");
let str2 = new String("Mahmood");
let str3 = "Hasanain";    // best way
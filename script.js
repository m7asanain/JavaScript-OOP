/*
  Class Syntax
  Static Properties & Methods
*/

class User {
  // static properties
  static counter = 0;

  constructor(name, email, counter) {
    this.name = name;
    this.email = email;
    this.counter = counter;
    User.counter++;
  }
  sayHello() {
    return `Hello ${this.name}`;
  }
  showEmail() {
    return `Yor Email Is: ${this.email}`;
  }

  // * if it's not static => objectName.method
  objectCounter = function() {
    // this => get individul count / User get all count
    return `${this.counter} Objects Created!`;
  }

  // static method
  // * if it's static => className.method
  // static objectCounter = function() {
  //   return `${User.counter} Objects Created!`;
  // }
}

let user1 = new User("Mustafa", "m7@k.com", 2);
// let user2 = User("Mustafa", "m7@k.com");    // Uncaught TypeError: Class constructor User cannot be invoked without 'new'
let user3 = new User("Mustafa", "m7@k.com", 2);
let user4 = new User("Mustafa", "m7@k.com", 2);
let user5 = new User("Mustafa", "m7@k.com", 2);

console.log(typeof User);   // function
console.log(User === User.prototype.constructor);   // true

console.log(user1.objectCounter());

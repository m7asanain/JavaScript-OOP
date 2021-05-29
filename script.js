/*
  Class Syntax
*/

class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }
  sayHello() {
    return `Hello ${this.name}`;
  }
  showEmail() {
    return `Yor Email Is: ${this.email}`;
  }
}

// function User(name, email) {
//   this.name = name;
//   this.email = email;
//   this.sayHello = function() {
//     return `Hello ${this.name}`;
//   };
// }

let user1 = new User("Mustafa", "m7@k.com");
let user2 = new User("Mahmood", "h7@k.com");

console.log(user1);
console.log(user2);
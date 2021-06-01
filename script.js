/*
  Class Syntax
  Getters and Setters
*/

class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }

  sayHello() {
    return `Hello ${this.name}`;
  }

  // get will change the method to property

  // use get + () when we call it = Uncaught TypeError
  // use get w/ ()
  // use () w/ get
  get showInfo() {
    return `Name: ${this.name}, Email: ${this.email}`;
  }

  changeName(newName) {
    this.name = newName;
  }

  set changeEmail(newEmail) {
    this.email = newEmail;
  }
}

let user1 = new User("Mustafa", "m7@mail.com")
console.log(user1.name);
console.log(user1.email);
console.log(user1.showInfo);

console.log('~~~~');

user1.changeName("Musta")
// user1.name = "Musta";  other method
console.log(user1.name);
console.log(user1.showInfo);

console.log('~~~~');

user1.changeEmail = 'mustafa@mail.com';
console.log(user1.name);
console.log(user1.email);
console.log(user1.showInfo);
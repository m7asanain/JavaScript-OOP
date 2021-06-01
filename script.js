/*
  Importants Notes And The End
  [1] Arrow Functions Do Not Have a Prototype Property.
  [2] You Can Use Objects Inside Constructor Freely
  [3] f = function () {} ==== f() {}
*/

class User {
  constructor(fName, lName, age, email) {
    this.name = {
      first: fName,
      last: lName,
    };
    this.age = age;
    this.email = email;
  }
  sayHello = function () {    // *same
    return `Say Hello`;
  };
  sayHi() {    // *same - more preferred
    return `Say Hi`;
  }
}

let userData = new User("Mustafa", "Alkamali", 20, "m7@mail.com");
// console.log(userData);

// console.log("#".repeat(10));

// userData.fName = "Mustafa";
// console.log(userData.fName);

// userData.lName = "Alkamali";
// console.log(userData.lName);

// userData.age = 20;
// console.log(userData.age);

// userData.email = "m7@mail.com";
// console.log(userData.email);

// console.log(userData.sayHello());
// console.log(userData.sayHi());

console.log(userData.name.first);
console.log(userData.name.last);
console.log(userData.age);
console.log(userData.email);
console.log(userData.sayHello());
console.log(userData.sayHi());
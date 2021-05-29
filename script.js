/*
  Class Syntax
  Inheritance
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
  writeMsg() {
    return 'Message from perant class!';
  }
}

class Admin extends User {
  constructor(name, email) {
    super(name, email);
  }
  adminMsg() {
    return 'You are the Admin!';
  }
  writeMsg() {
    return 'Message from child class!';
  }
}

let admin1 = new Admin("Mustafa", "m7@mail.com")
console.log(admin1);
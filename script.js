/*
  Constructor Function
  Dealing With Properties
  40% to 60%
*/

function  User(firstName, lastName, age, countrty) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
  this.country = countrty;
  this.fullName = function() {
    return `Full Name: ${this.firstName} ${this.lastName}`;
  };
  this.ageInDays = function() {
    return `Age in days = ${age * 365}`;
  };
}

// User.country = "Iraq";   Wrong

let user1 = new User("Mustafa", "Alkamali", 20, "Istanbul");
// user1.country = "Istanbul";
let user2 = new User("Ahmed", "Hamdi", 50, "Iraq");
// user2.country = "Iraq";


console.log(user1);
// console.log(`Full Name: ${user1.firstName} ${user1.lastName}`);  // same *
console.log(user1.fullName());  // best choise - same *
console.log(user1.ageInDays()); 

console.log("-----------"); 

console.log(user2);
// console.log(`Full Name: ${user2.firstName} ${user2.lastName}`);  // same *
console.log(user2.fullName());  // best choise - same *
console.log(user2.ageInDays()); 
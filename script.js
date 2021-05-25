/*
  Constructor Function
  60% To 70%
  Trainings
*/
function User(name, email, age, showEmail) {
  this.name = name;
  this.email = email;
  this.age = age;
  this.updateName = function(newName) {
    if (this.age > 18) {
      this.name = newName;
    } else {
      console.log('You cannot change your name cause age restriction!');;
    }
  };
  this.showEmail = function() {
    if (showEmail === true) {
       return `Email is: ${this.email}`;
    } else {
      return 'Data is privte!';
    }
  }
}
let user1 = new User("Mustafa", "mustafa@email.com", 20, true);

console.log(user1.name);
user1.updateName("Ahmed");  // update value
console.log(user1.name);
console.log(user1.showEmail());
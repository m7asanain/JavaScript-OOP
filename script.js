/*
  Defining Object
  [1] Object Literal
*/

let user = {
    // properties
    firstName: "Mustafa",
    lastName: "Alkamali",
    age: 20,
    addresses: {
        iq: 'Baghdad',
        tr: 'Istanbul',
        usa: 'New York',

        // getMainAddress: function() {
        //     return `${user.firstName}'s main address is in Iraq - ${user.addresses.iq}`;
        // }
        getMainAddress: () => `${user.firstName}'s main address is in Iraq - ${user.addresses.iq}`,
    },

    // Method
    getFullName: () => `Full Name: ${user.firstName} ${user.lastName}`,

    getAgeInDays: () => `${user.firstName}'s age in days: ${user.age * 365}`,
}

// Accessing object properties
console.log(user.firstName); // dot notation
// console.log(user['firstName']); // bracket notation
console.log('--------'); 

console.log(typeof user.firstName); // string

// Method object properties
console.log(typeof user.getFullName); // function
console.log('--------'); 

console.log(user.getFullName()); 
console.log(user.getAgeInDays()); 
console.log('--------'); 

console.log(user.addresses.iq);
console.log(user.addresses['tr']);
console.log(user['addresses']['usa']);
console.log('--------'); 

console.log(user.addresses.getMainAddress());
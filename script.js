/*
  For ... In Loop
  Loop Through The Properties Of The Objects
*/

const user = {
  name: "Mustafa",
  country: "Iraq",
  age: 20,
};

let finalData = '';


for (let info in user) {
  console.log(`The ${info} is => ${user[info]}`);
  finalData += `<div>The ${info} is => ${user[info]}</div>`;
}

// console.log(user.country);
// console.log(user["name"]);

console.log(finalData);

document.getElementById("info").innerHTML = finalData;
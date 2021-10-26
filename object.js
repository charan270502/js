var users = {
  firstName: "charan",
  lastName: "Murugan",
};
console.log(users.firstName);
console.log(users["firstName"]);

function Person(fName) {
  this.firstName = fName;
}

var person1 = new Person("charan");

console.log(person1.firstName);

console.table(users);

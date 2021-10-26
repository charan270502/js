function User(fName, lName, age) {
  (this.firstName = fName),
    (this.lastName = lName),
    (this.age = age),
    (this.fullName = function () {
      return `${this.firstName}${this.lastName} is ${this.age} years old`;
    });
}

User.prototype.firstNameMethod = function () {
  console.log(this.firstName);
};

var user1 = new User("charan", "murugan", 19);

console.log(user1.fullName());
user1.firstNameMethod();

console.log(user1.hasOwnProperty("firstName"));

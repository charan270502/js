var user = {
  firstName: "charan",
  lastName: "murugan",
  role: "student",
  age: 19,
  fullName: function () {
    // return `My FullName is ${this.firstName} ${this.lastName}`;
    return this;
  },
};

console.log(user.fullName());

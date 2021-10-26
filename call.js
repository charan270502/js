const user = {
  fullName: function (city, state) {
    console.log(
      `${this.firstName}${this.lastName} is staying in ${city},${state}`
    );
  },
};

var person2 = {
  firstName: "charan",
  lastName: "murugan",
};

user.fullName.call(person2, "krishnagiri", "TN");

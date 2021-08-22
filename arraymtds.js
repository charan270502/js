const ages = [10, 23, 15, 78, 45];

ages.forEach((age) => {
  console.log(age);
});

const result = ages.map((age) => Math.pow(age, 2));

console.log(result);

const resultTwo = ages.filter((age) => age > 18);
console.log(resultTwo);

const resultThree = ages.reduce((total, num) => total + num);
console.log(resultThree);

ages.fill(1);
console.log(ages);

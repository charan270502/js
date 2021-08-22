var num = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(num);
console.log(num.length);
num[0] = 10;

num.push(23);
num.unshift(27);

console.log(num);

num.pop();
num.shift();
console.log(num);
console.log(num.indexOf(4));

var myName = "charan";

console.log(myName.split(""));

console.log(Array.from(myName));

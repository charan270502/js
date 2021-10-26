function init() {
  let firstName = "charan";
  function sayFirstName() {
    console.log(firstName);
  }
  return sayFirstName;
}
let result = init();
result();

function mathematicalOperation(x) {
  return function operation(y) {
    return x + y;
  };
}

let firstResult = mathematicalOperation(2);

var secondResult = firstResult(5);

console.log(secondResult);
console.log(mathematicalOperation(5)(5));

//FUNCTION DECLARATION
function isEligible(ele) {
  if (ele > 18) {
    console.log("eligible 4");
  } else {
    console.log("not eligible");
  }
}
isEligible(24);
//FUNCTION EXPRESSION

var isEligible = function (ele) {
  if (ele > 17) {
    console.log("eligible 14");
  } else {
    console.log("not eligible");
  }
};
isEligible(24);
//arrow function

var isEligible = (ele) => {
  if (ele > 17) {
    console.log("eligible 24");
  } else {
    console.log("not eligible");
  }
};
isEligible(24);

//callback functions

console.log([2, 4, 6, 8, 10].every((num) => num % 2 === 0));

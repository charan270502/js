var votingAge = 18;
var myAge = 19;

if (myAge >= votingAge) {
  console.log("vote to eligible");
} else {
  console.log("not eligible to vote");
}

var google = true,
  faacebook = false,
  email = true;

if ((google && faacebook) || email) {
  console.log("Succesfully logged in");
}

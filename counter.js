let counter = document.getElementById("count");
let followers = document.getElementById("followers");

let count = 1;
setInterval(() => {
  if (count < 1000) {
    count++;
    counter.innerText = count;
  }
}, 1);

setTimeout(() => {
  followers.innerText = "Followers on Instagram";
}, 4200);

console.log(window.getComputedStyle(counter).borderRadius);

var myButton = {
  content: "OK",
  click() {
    console.log(this.content + " clicked");
  },
};

var btn = {
  content: "done",
};
myButton.click.call(btn);

var looseClick = myButton.click;
looseClick(); // not bound, 'this' is not myButton - it is the globalThis

var boundClick = myButton.click.bind(myButton);
boundClick(); // bound, 'this' is myButton

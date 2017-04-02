// defined fucntion but cannot do anyting because we have not *Called* the functions as of yet.
var speak = function(saySomething) {
  alert(saySomething);
};

var subtract = function(number1,number2) {
  return number1 - number1;
};
// We know * Call* the function speak which we defined abve
speak("this is calling the function");

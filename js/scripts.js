// defined fucntion but cannot do anyting because we have not *Called* the functions as of yet.
var speak = function(saySomething) {
  alert(saySomething);
};

var add = function(number1,number2) {
  return number1 + number1;
};
// We know * Call* the function speak which we defined abve
speak("this is calling the function");

// this add function because has a return value the console will display it but if we want our application to display it , we have to let the computer know to return and show the value we add in the add method : add(10,5);
// Therefore we define a result variable and put in our add function we defined above and we choose alert to return the value.
var result = add(20,5);
alert(result);

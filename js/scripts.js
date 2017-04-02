// // defined fucntion but cannot do anyting because we have not *Called* the functions as of yet.
// var speak = function(saySomething) {
//   alert(saySomething);
// };
//
// var add = function(number1,number2) {
//   return number1 + number1;
// };
// // We know * Call* the function speak which we defined abve
// speak("this is calling the function");
//
// // this add function because has a return value the console will display it but if we want our application to display it , we have to let the computer know to return and show the value we add in the add method : add(10,5);
// // Therefore we define a result variable and put in our add function we defined above and we choose alert to return the value.
// var result = add(20,5);
// alert(result);
//
//
// var speak = function(saySomething) {
//   alert(saySomething);
// };
//
// var add = function(number1,number2){
//   return number1 + number2;
// };
// //  var result passing two arguments 20,10 and calls the add() function.
// var result = add(20,10);
//
// // the result variable now is 30.
//
// // This line concates 4 strings. and assings a new variable outputText. The variable is now assigned "the sum is 30."
// var outputText = "The sum is"  + " " + result + ". ";
//
// // we call our speak function passing it the outputText variable which stands for "the sume is 30."
// speak(outputText);


// refactored above code. DRY coding is important.

var speak = function (saySomething) {
  alert(saySomething);
};

var add = function(number1,number2){
  return number1 + number2;
};

speak("the sum is " + add(20,10) + ". ");

// raher then making a variable called result we pas the add function to our speak function and concate the strings inside

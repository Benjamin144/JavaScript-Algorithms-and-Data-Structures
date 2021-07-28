
// Shopping List

var myList = [
    ["Chocolate", 1], 
    ["Apple", 2], 
    ["Crisps", 3], 
    ["Sandwich", 4], 
    ["Yoghurt", 5],
];

console.log(myList);

// Write Reusable JavaScript with Functions

function reusableFunction() {
    console.log("Hi World");
};

reusableFunction();
reusableFunction();
reusableFunction();

// Passing Values to Functions with Arguments

function functionWithArgs(a, b) {
    console.log(a + b);
};
functionWithArgs(2, 1);
functionWithArgs(8, 8);

// Alternativley THIS..

function functionWithArgs(x, y) {
    console.log(x + y);
  }
  functionWithArgs(1, 2);
  functionWithArgs(6, 2);

  // Global Scope and Functions

// Declare the myGlobal variable below this line
var myGlobal = 10;

function fun1() {
  // Assign 5 to oopsGlobal Here
oopsGlobal = 5;
}
 
// Only change code above this line

function fun2() {
  var output = "";
  if (typeof myGlobal != "undefined") {
    output += "myGlobal: " + myGlobal;
  }
  if (typeof oopsGlobal != "undefined") {
    output += " oopsGlobal: " + oopsGlobal;
  }
  console.log(output);
}


// Local Scope and Functions

function myTest() {
// this is a line of code

// singular lines of code 

// good for in line commentry

/* This is a multi line
comment. You can use this to 
comment out many lines
so that Javascript ignores
the content written 
within */

var myName; 

// -Storing Values with the Assignment Operator

// Setup
var a;

// Only change code below this line

a = 7;
console.log(a);


// Assigning the Value of One Variable to Another

var myVar;
myVar = 5;
var myNum;

myNum = myVar;
console.log(myVar);

// Setup
var a;
a = 7;
var b;

b = a;
console.log(b);

// Initializing Variables with the Assignment Operator

var a = 9
console.log(a);

// Understanding Uninitialized Variables

// Only change code below this line
var a = 5;
var b = 10;
var c = " I am a";
// Only change code above this line

a = a + 1;
b = b + 5;
c = c + " String!";

console.log(c)

// Understanding Case Sensitivity in Variables

// Variable declarations
var studlyCapVar;
var properCamelCase;
var titleCaseOver;

// Variable assignments
studlyCapVar = 10;
properCamelCase = "A String";
titleCaseOver = 9000;

//Add Two Numbers with JavaScript

var sum = 10 + 10;
console.log(sum)

// Subtract One Number from Another with JavaScript

var difference = 45 - 33;
console.log(difference)

// Multiply Two Numbers with JavaScript

var product = 8 * 10;
console.log(product)

//Divide One Number by Another with JavaScript

var quotient = 66 / 33;
console.log(quotient)


// Increment a Number with JavaScript

var myVar = 87;
// Only change code below this line
myVar++;

console.log(myVar)

// Decrement a Number with JavaScript

var myVar = 11;
// Only change code below this line

myVar--;
console.log(myVar)

// Create Decimal Numbers with JavaScript

var ourDecimal = 5.7;

// Only change code below this line

var myDecimal = 5.7;
console.log(myDecimal)

// Multiply Two Decimals with JavaScript

var product = 2.0 * 2.5;
console.log(product)

// Divide One Decimal by Another with JavaScript

var quotient = 0.0 / 2.0;
var quotient = 4.4 / 2.0; // Change the 0.0 so that quotient will equal to 2.2.
console.log(quotient)

// Finding a Remainder in JavaScript

// Only change code below this line

var remainder = 11 % 3;
console.log(remainder)

// Compound Assignment With Augmented Addition

// var a = 3;
// var b = 17;
// var c = 12;

// Only change code below this line
// a = a + 12;
// b = 9 + b;
// c = c + 7;

var a = 3;
var b = 17;
var c = 12;

// Only change code below this line
a += 12;
b += 9;
c += 7;

console.log(a,b,c)

// Compound Assignment With Augmented Subtraction

var a = 11;
var b = 9;
var c = 3;

// Only change code below this line
a = a -= 6;
b = b -= 15;
c = c -= 1;
console.log(a,b,c);

// Compound Assignment With Augmented Multiplication

var a = 5;
var b = 12;
var c = 4.6;

// Only change code below this line
a *= 5;
b *= 3;
c *= 10;
console.log(a,b,c);

// Compound Assignment With Augmented Division

var a = 48;
var b = 108;
var c = 33;

// Only change code below this line
a /= 12;
b /= 4;
c /= 11;

console.log(a, b, c)

// Declare String Variables

var myFirstName = "Joseph";
var myLastName  = "Roberts";

console.log (myFirstName,myLastName)

// Escaping Literal Quotes in Strings

var myStr = "I am a \"double quoted\" string inside \"double quotes\"."; // Change this line

// I am a "double quoted" string inside "double quotes".

console.log(myStr)

// Quoting Strings with Single Quotes

// var myStr = '<a href=\"http://www.example.com\" target=\"_blank\">Link</a>';

var myStr = '<a href="http://www.example.com" target="_blank">Link</a>';
console.log(myStr)

// Escape Sequences in Strings

// Code	Output
// \'	single quote
// \"	double quote
// \\	backslash
// \n	newline
// \r	carriage return
// \t	tab
// \b	word boundary
// \f	form feed 

var myStr = 'FirstLine\n\t\\SecondLine\n\ThirdLine';
console.log (myStr);

//FirstLine
    //\SecondLine
//ThirdLine

// Concatenating Strings with Plus Operator

// Build myStr from the strings This is the start. and This is the end. using the + operator

var myStr = "This is the start. " + "This is the end.";
console.log(myStr);

// Concatenating Strings with the Plus Equals Operator

var ourStr = "I come first. ";
ourStr += "I come second. ";

console.log(ourStr);

var myStr = "This is the first sentence. ";
myStr += "This is the second sentence. ";
 
console.log(myStr)

// Constructing Strings with Variables

// Example:

var ourName = "freeCodeCamp";
var ourStr = "Hello, our name is " + ourName + ", how are you?";

var myName = "Joseph";
var myStr = "My name is " + myName + " and I am well!";

console.log(myStr);

// outputs a random color 

const color = () =>'#' + Math
.floor(Math.random() * 0xffffff)
.toString(16) 
.padEnd(6, '0');

console.log(color());

// Appending Variables to Strings

var someAdjective = "Funkdoobiest!";
var myStr = "Learning to code is ";

myStr += someAdjective;
console.log (someAdjective);

// Find the Length of a String

//Set up the

var lastNameLength  = 0;
var lastName = "Love                                                                     lace";

// Only change the code below this line

lastNameLength = lastName.length
console.log(lastNameLength);

// Use Bracket Notation to Find the First Character in a String

var firstName = "Charles";
var firstLetter = firstName[6];
console.log (firstLetter);

// Setup
var firstLetterOfLastName = "";
var lastName = "Lovelace";

// Only change code below this line
firstLetterOfLastName = lastName[0]; // Change this line
console.log(firstLetterOfLastName);

// Understand String Immutability

// Setup
var myStr = "Jello World";

// Only change code below this line
myStr = "Hello World"; // Changed this line from myStr[0] = "H"
// Only change code above this line
console.log(myStr)

// Use Bracket Notation to Find the Nth Character in a String

var myName = "Joseph";
var thirdLetterOfMyName =myName[2];

console.log(thirdLetterOfMyName);

// Use Bracket Notation to Find the Last Character in a String

var firstName = "Joseph";
var lastLetter = firstName[firstName.length - 1];

// Setup
var lastName = "Roberts";

// Only change code below this line
var lastLetterOfLastName = lastName[lastName.length - 1]; // Change this line

console.log(lastLetterOfLastName);

// Use Bracket Notation to Find the Nth-to-Last Character in a String

// Example: 

var firstName = "Augusta";
var thirdToLastLetter = firstName[firstName.length - 3];

// Setup
var lastName = "Roberts";

// Only change code below this line
var secondToLastLetterOfLastName = lastName[lastName.length - 2]; // Change this line

console.log(secondToLastLetterOfLastName);

var myNoun = "dog";
var myAdjective = "big";
var myVerb = "ran"; 
var myAdverb = "quickly";

// Event Handler - Script Lifecycle

function aFunction() {
    console.log("This is a function");
    return true;
}

aFunction();

// Word Blanks

// Only change code below this line
var wordBlanks = "The Worlds Greatest " + [myNoun] + ", was so " + [myAdjective] + " that it " + [myVerb] + " very " + [myAdverb]; // Change this line

console.log (wordBlanks)
// Only change code above this line

// Store Multiple Values in one Variable using JavaScript Arrays

// Nest one Array within Another Array

// Only change code below this line

var myArray = [["color", 1], ["color", 2]];

// Access Array Data with Indexes
var myArray = [50,60,70];
myArray[0];
var myData = myArray[0];
console.log (myData);

// Modify Array Data With Indexes

var joesArray = [1,44,144000];
joesArray[2] = [29];
console.log(joesArray);

// Access Multi-Dimensional Arrays With Indexes

var arr = [
    [1,2,3],
    [4,5,6],
    [7,8,9],
    [[10,11,12], 13, 14]
  ];
  arr[3];
  arr[3][0];
  arr[3][0][1];

  // arr[3] is [[10, 11, 12], 13, 14], arr[3][0] is [10, 11, 12], and arr[3][0][1] is 11.

var myArray = [[1,2,3], [4,5,6], [7,8,9], [[10,11,12], 13, 14]];

var myData = myArray[2][1];

console.log (myData);

// Manipulate Arrays With push()

var arr1 = [1,2,3];
arr1.push(4);

var arr2 = ["Stimpson", "J", "cat"];
arr2.push(["happy", "joy"]);

// Push ["dog", 3] onto the end of the myArray variable.

// Setup
var myArray = [["John", 23], ["cat", 2]];

// Only change code below this line

myArray.push(["dog" , 3]);
console.log (myArray);

// Manipulate Arrays With pop()

var threeArr = [1, 4, 6];
var oneDown = threeArr.pop();
console.log(oneDown);
console.log(threeArr)

// therefore

//Setup

var myArray = [["John", 23], ["cat", 2]];
// to remove last array use .pop(3)
var removedFromArray = myArray.pop(3);
console.log(myArray);
console.log(removedFromArray); 

// Manipulate Arrays With shift()..removes the first unlike .pop() which removes the last element.

var ourArray = ["Stimpson", "J", ["cat"]];
var removedFromOurArray = ourArray.shift(1);

console.log(removedFromArray)
console.log(ourArray)

// Setup
var myArray = [["John", 23], ["dog", 3]];

// Only change code below this line
var removedFromMyArray =  myArray.shift(0);
console.log(removedFromMyArray);
console.log(myArray);














































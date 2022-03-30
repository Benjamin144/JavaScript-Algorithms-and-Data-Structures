// Understanding Uninitialized Variables

/* When JavaScript variables are declared, they have an initial value of undefined. 
If you do a mathematical operation on an undefined variable your result will be NaN 
which means "Not a Number". If you concatenate a string with an undefined variable,
you will get a string of undefined. */

var a = 5; // previously undefined as var a
var b = 10; // previously undefined as var b
var c = "I am a"; // previously undefined as var c

/* This code once the variables are defined initializes the three variables 
a, b, and c with 5, 10, and "I am a" respectively so that they will not be undefined anymore.*/

a = a + 1;
b = b + 5;
c = c + " String!";

console.log (a, b, c)
/* const has all the awesome features that let has, with the added bonus that variables declared using const are read-only. 
They are a constant value, which means that once a variable is assigned with const, it cannot be reassigned: */

// const FAV_PET = "Cats";
// FAV_PET = "Dogs";

/* You should always name variables you don't want to reassign using the const keyword. 
This helps when you accidentally attempt to reassign a variable that is meant to stay constant. */

/* Change the code so that all variables are declared using let or const. Use let when you want the variable to change, 
and const when you want the variable to remain constant. Also, rename variables declared with const to conform to common practices. */

const FCC = "freeCodeCamp"; // this line was changed from var to const; the variable was changed to upper case FCC
let fact = "is cool!"; // this line was changed from var to let
fact = "is awesome!";
console.log(FCC, fact); // the variable FCC iwas changed here to reflect the const keyword
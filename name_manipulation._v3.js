// continuing with manipulating functions

/* This code calls a function within a function */

function FinalName(first, rest, surname) {
  return (
    firstCapsID.toUpperCase() + restOfLettersID.toLowerCase() + " " + surname
  );
}
function greeting(age, address, surname) {
  var input = prompt("Hello, what is your name?");
  var firstCapsID = input.slice(0, 1);
  var restOfLettersID = input.slice(1, input.length);
  var final = FinalName(first, rest, surname);
  alert(
    "Hello " +
      final +
      " Your age is " +
      age / 16 +
      " and you live in " +
      address
  );
  return final;
}

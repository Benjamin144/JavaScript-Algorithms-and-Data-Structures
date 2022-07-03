// function input(age, address, surname) {
//   var x = prompt("What is your name?");
//   var y = x.slice(0, 1);
//   var z = x.slice(1, x.length);
//   alert(
//     "Hello " +
//       y.toUpperCase() +
//       z.toLowerCase() +
//       " " +
//       surname +
//       " Your age is " +
//       age +
//       ". You live in " +
//       address
//   );
// }

function greeting(age, address, surname) {
  var input = prompt("Hello, what is your name?");
  var firstCapsID = input.slice(0, 1);
  var restOfLettersID = input.slice(1, input.length);
  var finalName =
    firstCapsID.toUpperCase() + restOfLettersID.toLowerCase() + " " + surname;
  alert(
    "Hello " + finalName + " Your age is " + age + " and you live in " + address
  );
  return finalName;
}

function greeting(age, address, surname) {
  var input = prompt("Hello, what is your name?");
  var firstCapsID = input.slice(0, 1);
  var restOfLettersID = input.slice(1, input.length);
  alert(
    "Hello " +
      firstCapsID.toUpperCase() +
      restOfLettersID.toLowerCase() +
      " " +
      surname +
      " Your age is " +
      age +
      ". You live in " +
      address
  );
}

function greeting() {
  var input = prompt("Hello What is your name?");
  var firstCapsID = input.slice(0, 1);
  var restOfLettersID = input.slice(1, input.length);
  alert(
    "Your output would look somthing like this " +
      firstCapsID.toUpperCase() +
      restOfLettersID.toLowerCase() +
      "!"
  );
}

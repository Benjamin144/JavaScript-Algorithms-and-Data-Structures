/* pop() always removes the last element of an array. What if you want to remove the first?

That's where .shift() comes in. It works just like .pop(), except it removes the first element instead of the last. */
const ourArray = ['Stimpson', 'J', ['cat']];
const removedFromOurArray = ourArray.shift();
console.log(removedFromOurArray);

// example 2
const myArray = [["John", 23], ["dog", 3]];
const removedFromMyArray = myArray.shift();
console.log(removedFromMyArray);
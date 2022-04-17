
// // Big O(n) Function

// // Example 1

function linearFunc(arr) {
    for (let i = 0; i < arr.length; i++) { // for each item in the array the function will log this expression which multiplies 1000 times 100000
        console.log(1000 * 10000) /* It will always take the same time to multiply functions so this line of code takes constant time in any case
                                    so in this case they do not matter */
    }                               
}
const arr = [1, 2, 3, 4, 5, 6, 7] // The input to the function is an array of 7 items
linearFunc(arr)


function linearFunc(arr) {
    for (let i = 0; i < arr.length; i++) { // O(n) is prioritised over O(1)
    console.log(1000 * 100000); // constant time ignored
    let something = (200000000 * 200000000) / 2; // constant time ignored
    console.log(something) / // constant time ignored

    } // expression left out to validate position that O(n) results in constant time
}

// O(1) function

function constantFunc(arr) {
/* O(1) */    console.log(1000 * 100000);

}

// O(1) Constant
// O(log n) Logarithmic
// O(n) Linear
// O(n log n) Linearithmic
// O(n2) Quadratic
// O(n3) Cubic
// O(2n) Exponential
// O(n!) Factorial





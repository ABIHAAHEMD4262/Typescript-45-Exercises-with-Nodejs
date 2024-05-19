// Conditional Tests: Write a series of conditional tests. Print a statement describing each test and your prediction for the results of each test. Your code should look something like this:

// let car = 'subaru';

// console.log("Is car == 'subaru'? I predict True.")

// console.log(car == 'subaru')

// • Look closely at your results, and make sure you understand why each line evaluates to True or False.

// • Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.
let car: string = "subaru";

// Test 1: Equality comparison (True)
console.log("Is car == 'subaru'? I predict True.");
console.log(car == 'subaru');// True

//Test 2: Strict equality comparison (True)
console.log("Is car === 'subaru'? I predict True.");
console.log(car === 'subaru'); //True

//Test 3: Inequality comparison (False)
console.log("Is car != 'subaru'? I predict False.");
console.log(car != 'subaru'); //False

//Test 4: Strict Inequality comparison (False)
console.log("Is car !== 'subaru'? I predict False.");
console.log(car !== 'subaru'); //False

//Test 5: Less than comparison (False)
console.log("Is car < 'subaru'? I predict False.");

console.log(car < 'subaru'); //False

//Test 6: Greater than comparison (False)
console.log("Is car > 'subaru'? I predict Falsee.");
console.log(car > 'subaru'); //False

//Test 7: Less than or equal comparison (True)
console.log("Is car <= 'subaru'? I predict True.");
console.log(car <= 'subaru'); //True

//Test 8: Greater than or equal comparison (True)
console.log("Is car >= 'subaru'? I predict True.");
console.log(car >= 'subaru'); //True

//Test 9: Checking Truthiness (True)
console.log("Is car? I predict True.");
console.log(car); //True (non-empty string is truthy)




"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let car = "subaru";
// Test 1: Equality comparison (True)
console.log("Is car == 'subaru'? I predict True.");
console.log(car == 'subaru'); // True
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

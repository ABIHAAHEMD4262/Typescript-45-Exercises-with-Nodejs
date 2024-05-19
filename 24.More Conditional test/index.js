"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let car = 'subaru';
let age = 25;
let number = [1, 2, 3, 4];
//**String Test**
// Test 1: Equality (True)
console.log("Is car == 'Subaru'? I predict True.");
console.log(car == 'Subaru'); //True (case-insensitive)
// Test 2: Strict Equality (False)
console.log("Is car === 'Subaru'? I predict False.");
console.log(car === 'Subaru'); //False (case-sensitive)
// Test 3: Inequality (True)
console.log("Is car != 'Toyota'? I predict True.");
console.log(car != 'Toyota'); //True (case-sensitive)
// Test 4: Inequality (False)
console.log("Is car !== 'Subaru'? I predict False.");
console.log(car !== 'Subaru'); //False (case-sensitive)
//**Lowercase  Function Test**
// Test 5:Lowercase conversion (True)
console.log("Is car.toLowerCase() == 'Subaru'? I predict True");
console.log(car.toLowerCase() == 'Subaru'); //True (case-sensitive)
// Test 6:Lowercase conversion (Falsee)
console.log("Is car === car.toLowerCase()? == 'Subaru'? I predict False");
console.log(car === car.toLowerCase()); //True (case-sensitive)
//Test 7: Equality(True)
console.log("Is age == 25? I prediced True.");
console.log(age == 25); //True
//Test 8: inequality(True)
console.log("Is age != 30? I prediced True.");
console.log(age != 30); //True
//Test 9: Greater than(False)
console.log("Is age > 25? I prediced True.");
console.log(age > 25); //false
//Test 10: Less than or equal(True)
console.log("Is age <= 25? I prediced True.");
console.log(age <= 25); //True
//Test 11: And(True)
console.log("Is age > 20 && age < 30? I prediced True.");
console.log(age > 20 && age < 30); //True (both conditions met)
//Test 12: Or(False)
console.log("Is age > 20 || age < 18? I prediced Falsee.");
console.log(age > 20 || age < 18); //False (neither conditions met)
//**Array Test **
//Test 13: In Array (True)
console.log("Is 3 in number? I predict True.");
console.log(3 in number); //True (checks for index existence)
//Test 13:Not in Array (False)
console.log("Is 5 not in number? I predict False.");
console.log(4, not in number); //True (checks for index existence)

"use strict";
// Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.
// • Make a array of your three favorite fruits and call it favorite_fruits.
Object.defineProperty(exports, "__esModule", { value: true });
// • Write five if statements. Each should check whether a certain kind of fruit is in your array. 
//If the fruit is in your array, the if block should print a statement, such as You really like bananas!
let favorite_fruits = ['apple', 'orange', 'grapes'];
if (favorite_fruits.includes('apple')) {
    console.log('you really like apple!');
}
if (favorite_fruits.includes('orange')) {
    console.log('you really like orange!');
}
if (favorite_fruits.includes('mango')) {
    console.log('you really like mango!');
}
if (favorite_fruits.includes('Bananas')) {
    console.log('you really like grapes!');
}

"use strict";
// Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of
//  magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array.
//   Call show_magicians() with each 
// array to show that you have one array of the original names and one array with the Great added to each magician’s name.
function show_magicians(magicians) {
    magicians.forEach(name => console.log(name));
}
function make_great(magicians) {
    return magicians.map(name => `The Great ${name}`);
}
let magician_names = ["Harry Potter", "Hamza", "Usman"];
//making a copy of original arraythrough .slice()
let copy_magicians_names = magician_names.slice();
//moodify the copied array include"the great" with theie names
let copy_great_magician = make_great(copy_magicians_names);
//show both arrays original and copied
// original
console.log("Original Array\n");
show_magicians(magician_names);
//copied
console.log("\n Copied Array\n");
show_magicians(copy_great_magician);

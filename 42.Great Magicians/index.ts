// Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name.
//  Call show_magicians() to see that the list has actually been modified.
let magicians: string[]= ["DON","Rameez","Chris"];

function make_great(magicians:string[]){
    for(let i =0; i <magicians.length; i++){
        magicians[i] = magicians[i] + " the great";
    }
}
make_great(magicians); //modifies the original array
// show_magicians(magicians); //show modifies names
console.log(magicians)
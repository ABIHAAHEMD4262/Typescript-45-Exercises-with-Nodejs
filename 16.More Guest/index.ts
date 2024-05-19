// More Guests: You just found a bigger dinner table, so now more space is available.
//  Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people 
// that you found a bigger dinner table.

// • Add one new guest to the beginning of your array.

// • Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list.
//  • Print a new set of invitation messages, one for each person in your list.
let guest_list: string[] = ['Maham', 'Aniqa', 'Fareha', 'Hareem' ];

let new_guest: string = "Laiba";
guest_list[1] = new_guest
for(let i=0; i<guest_list.length; i++){
    console.log('Respected Madam ' + guest_list[i]+ ',\nI invited you on dinner tomorrow.\n Thank You\n');
}
guest_list.unshift('Zain', 'Bilal', 'Farhad', 'Faez');
for(let i=0; i<guest_list.length; i++){
    console.log('Respected Madam/Sir ' + guest_list[i]+ ',\nI invited you on dinner tomorrow.We found big table so we invite 4 more persons. \n Thank You\n');
}


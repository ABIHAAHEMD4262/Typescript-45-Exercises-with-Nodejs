"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let guest_list = ['Maham', 'Aniqa', 'Fareha', 'Hareem'];
let not_present = "Aniqa";
let new_guest = "Laiba";
guest_list[1] = new_guest;
guest_list.unshift('Zain', 'Bilal', 'Farhad', 'Faez');
console.log('\nUnfortunately we cannot arrange big table. Only two people are allow.');
while (guest_list.length > 2) {
    let remove_guest = guest_list.pop();
    console.log(`Sorry Sir/Madam,${remove_guest} you are not invited for dinner`);
}
for (let i = 0; i < guest_list.length; i++) {
    console.log('Respected Sir/Madam ' + guest_list[i] + '\nYes you are still invited on dinner.\n Thankyou\n');
}
guest_list.splice(0, 2);
console.log(guest_list);

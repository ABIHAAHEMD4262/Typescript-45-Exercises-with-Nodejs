"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let guest_list = ['Maham', 'Aniqa', 'Fareha', 'Hareem'];
let new_guest = "Laiba";
guest_list[1] = new_guest;
for (let i = 0; i < guest_list.length; i++) {
    console.log('Respected Madam ' + guest_list[i] + ',\nI invited you on dinner tomorrow.\n Thank You\n');
}
guest_list.unshift('Zain', 'Bilal', 'Farhad', 'Faez');
for (let i = 0; i < guest_list.length; i++) {
    console.log('Respected Madam/Sir ' + guest_list[i] + ',\nI invited you on dinner tomorrow.We found big table so we invite 4 more persons. \n Thank You\n');
}

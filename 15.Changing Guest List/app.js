"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let guest_list = ['Maham', 'Aniqa', 'Fareha', 'Hareem'];
for (let i = 0; i < guest_list.length; i++) {
    console.log('Respected Madam ' + guest_list[i] + ',\n we invited you on dinner.\n Thank You\n');
}
let not_present = "Aniqa";
let new_guest = "Laiba";
guest_list[1] = new_guest;
for (let i = 0; i < guest_list.length; i++) {
    console.log('Respected Madam ' + guest_list[i] + ',\n we invited you on dinner.\n Thank You\n');
}
console.log(`Mrs. ${not_present} will not coming on tomorrow dinner.`);

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let current_Users = ["Saba", "admin", "ahmed", "babar", "raza"];
let new_users = ['Fawad', 'Hussain', 'User7', 'admin', 'User9'];
new_users.forEach((newUser) => {
    if (current_Users.some((currentUser) => currentUser.toLowerCase() === newUser.toLowerCase())) {
        console.log(`${newUser} will need to enter a new username.`);
    }
    else {
        console.log(`${newUser} is available`);
    }
});

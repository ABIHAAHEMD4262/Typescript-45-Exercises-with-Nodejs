// Do the following to create a program that simulates how websites ensure that everyone has a unique username.
// • Make a list of five or more usernames called current_users.

// • Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.
let myNumbers = [1,2,3,4,5,6,7,8,9];

//for loop
for(let i = 0; i < myNumbers.length; i++){
    // now we use conditions
    if(myNumbers[i] == 1){
        console.log(`${myNumbers[i]}st`);

        
    }else if (myNumbers[i] == 2){
        console.log(`${myNumbers[i]}nd`);



    }else if(myNumbers[i] == 3){
        console.log(`${myNumbers[i]}rd`);
 
    }else if(myNumbers[i] >= 4 && myNumbers[i] <= 9){
        console.log(`${myNumbers[i]}th`)
}
}
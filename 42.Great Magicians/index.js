var magicians = ["DON", "Rameez", "Chris"];
function make_great(magicians) {
    for (var i = 0; i < magicians.length; i++) {
        magicians[i] = magicians[i] + " the great";
    }
}
make_great(magicians); //modifies the original array
// show_magicians(magicians); //show modifies names
console.log(magicians);

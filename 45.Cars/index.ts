// Cars: Write a function that stores information about a car in a Object.
// The function should always receive a manufacturer and a model name.
// It should then accept an arbitrary number of keyword arguments. 
//Call the function with the required information and two other name-value pairs, such as a color or an optional feature.
//  Print the Object that’s returned to make sure all the information was stored correctly.
function create_car(manufacturer: string, model: string, ...options: string[] ){
    //initialize a car object with manufacturer
    let car = {
        manufacturer: manufacturer,
        model:model
    };

    // add additional options to the car object
    options.forEach(option => {
        let [key,value]= option.split(":")
        car[key.trim()]= value
    });
    return car;

}
//call the function to create a car object
let my_car = create_car("Toyota","Corolla","color: Black","sunroof : True","Year:2024");

//print the variable to ensure all the informaton is stored correctly in the car object
console.log(my_car)
    


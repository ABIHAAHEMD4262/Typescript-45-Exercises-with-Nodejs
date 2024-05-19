
// Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, 
//and titlecase

 let personName: string = "Abiha";
//lower case
console.log ("lowercase:", personName.toLowerCase());

//UPPERCASE
console.log("uppercase:", personName.toUpperCase());

//Title case
console.log("titleCase:", personName.replace(/\bw/g,c => c.toUpperCase()));
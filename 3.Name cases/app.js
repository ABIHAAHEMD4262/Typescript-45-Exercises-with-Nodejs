let personName = "Abiha";
//lower case
console.log("lowercase:", personName.toLowerCase());
//UPPERCASE
console.log("uppercase:", personName.toUpperCase());
//Title case
console.log("titleCase", personName.replace(/\bw/g, c => c.toUpperCase()));
export {};

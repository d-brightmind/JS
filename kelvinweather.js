// Declaring a constant kelvin variable
const kelvin = 293;
// Declaring a constant celsius variable
const celsius = kelvin - 273;
// Declaring Fahrenheit variable
let fahrenheit =celsius * (9/5) + 32;
// Rouding up fahrenheit value
fahrenheit = Math.floor(fahrenheit);
// Print the result
console.log(`The temperatue is ${fahrenheit} degrees Fahrenheit.`);
// Declaring Newton variable
let Newton = celsius * (33/100);
Newton = Math.floor(Newton);
// Print the result
console.log(`The temperature is ${Newton} degrees Newton`);
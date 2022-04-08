//declaring a constant variable kelvin with value 293.
const kelvin = 293;
//now let's define celcius which is (kelvin - 273)
let celcius = kelvin-273;
//now lets convert celcius into fahrenheit;
let fahrenheit = (Math.floor(celcius * (9/5) + 32));
let newton = Math.floor(celcius * (33/100));
console.log(`The temperature is ${celcius} degrees celcius.`);
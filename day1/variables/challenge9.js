const prompt = require("prompt-sync")();
console.log("La première position");
let x1 = parseInt(prompt("x1: "));
let y1 = parseInt(prompt("y1: "));
let z1 = parseInt(prompt("z1: "));
console.log("La deuxième  position");
let x2 = parseInt(prompt("x2: "));
let y2 = parseInt(prompt("y2: "));
let z2 = parseInt(prompt("z2: "));

let distance = ( (x2 - x1)*(x2 - x1) + (y2 - y1)*(y2 - y1) + (z2 - z1)*(z2 - z1) ) ** 0.5;

console.log("La distance: ",distance);
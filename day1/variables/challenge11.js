const prompt = require("prompt-sync")();
let long = parseInt(prompt("Longueur: "));
let larg = parseInt(prompt("Largeur: "));

let s = larg * long;
let p = larg * 2 + long * 2;

console.log("Surface: ", s);
console.log("Périmètre: ", p);
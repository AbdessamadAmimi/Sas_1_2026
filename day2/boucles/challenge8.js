const prompt = require("prompt-sync")();
let base = prompt("Donner la base: ");
let exposant = prompt("Donner l exposant: ");
let i = 1;
let pow = 1;
while(i <= exposant){
    pow = pow * base;
    i++;
}
console.log("Resultat: ", pow);
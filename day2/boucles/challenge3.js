const prompt = require("prompt-sync")();
let nbr = prompt("Donner un nombre: ")
let somme = 0;
for(let i=1 ; i<=nbr ; i++){
    somme += i;
}
console.log("La somme est: ",somme);
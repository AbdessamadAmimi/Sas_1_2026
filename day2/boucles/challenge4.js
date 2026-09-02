const prompt = require("prompt-sync")();
let nbr = prompt("Donner un nombre: ");
for(let i=1 ; i<=10 ; i++){
    console.log(nbr + " x " + i + " = " + nbr*i);
}
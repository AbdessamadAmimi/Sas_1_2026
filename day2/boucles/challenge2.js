const prompt = require("prompt-sync")();
let nbr = prompt("Donner un nombre entier: ");
for(let i = 1 ; i <= nbr ; i++){
    if(i % 2 == 0) console.log(i);
}
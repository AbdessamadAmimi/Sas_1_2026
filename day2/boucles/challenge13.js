const prompt = require("prompt-sync")();
let nbr = prompt("Donner un nombre entier: ");
let div = 0;
for(let i=1 ; i<=nbr ; i++){
    if(nbr % i == 0) div++;
}
if(div <= 2) console.log(nbr+" est un nombre premier.");
else console.log(nbr + " n'est pas un nombre premier.")
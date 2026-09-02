const prompt = require("prompt-sync")();
let nbr = prompt("Donner un nombre: ");
let som_pair = 0;
let som_impair = 0;
for(let i=1 ; i<=nbr ; i++){
    if(i % 2 == 0) som_pair = som_pair + i;
    else som_impair = som_impair + i;
}
console.log("Somme des nombres pairs: ",som_pair);
console.log("Somme des nombres impairs: ",som_impair);
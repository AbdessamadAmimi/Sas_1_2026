const prompt = require("prompt-sync")();
let nbr = prompt("Donner un nombre: ");
let fac = 1;
if(nbr == 0) fac = 1;
else{
    for(let i=nbr ; i>=1 ; i--) fac = fac * i;
}
console.log("Le factoriel est: ",fac);
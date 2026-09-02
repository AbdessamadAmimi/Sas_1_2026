const prompt = require("prompt-sync")();
let nbr = prompt("Donner un nombre: ");
let nbr_div = 0;
for(let i=1 ; i<= nbr ; i++){
    if(nbr % i == 0){
        console.log(i);
        nbr_div ++;
    }
}
console.log("Le nombre des diviseurs est: ",nbr_div)
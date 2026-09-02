const prompt = require("prompt-sync")();
let somme = 0;
let i = 0;
while(1){
    saisie = parseInt(prompt("Saisie: "));
    if(saisie == 0) break;
    somme = somme + saisie;
    i++;
}
console.log("Nombre des valeurs: ",i);
console.log("La somme des valeurs: ",somme);
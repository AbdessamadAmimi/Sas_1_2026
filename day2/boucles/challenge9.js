const prompt = require("prompt-sync")();
let depart = prompt("Donner le nombre de depart: ");
while(depart >= 0){
    console.log(depart)
    depart--;
}
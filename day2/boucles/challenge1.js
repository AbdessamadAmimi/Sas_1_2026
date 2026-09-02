const prompt = require("prompt-sync")();
let nbr = prompt("Donner le nombre des paricipants: ");
for(let i=0 ; i<nbr ; i++){
    console.log("Participant ",i+1);
}
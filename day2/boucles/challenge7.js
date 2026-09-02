const prompt = require("prompt-sync")();
let nbr = prompt("Nombre de missions: ");
let i = 1;
while(i <= nbr){
    console.log("Mission " +i+ " → Score : " + i*100);
    i++;
}
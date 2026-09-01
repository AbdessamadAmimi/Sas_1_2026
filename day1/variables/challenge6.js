const prompt = require("prompt-sync")();
let s1 =  parseInt(prompt("Score partie1: "));
let s2 =  parseInt(prompt("Score partie2: "));
let s3 =  parseInt(prompt("Score partie3: "));
let s4 =  parseInt(prompt("Score partie4: "));

let total = s1 + s2 + s3 + s4;
let avg = total / 4;

console.log("Score Total: ", total);
console.log("Moyenne: ",avg);
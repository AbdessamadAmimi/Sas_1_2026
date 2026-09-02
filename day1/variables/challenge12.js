const prompt = require("prompt-sync")();
let code = prompt("Entrer un nombre de 4 chiffre: ");

let nbr_4 = (code) % 10;
let rest = (code - nbr_4) / 10

let nbr_3 = rest % 10;
rest = (rest - nbr_3) / 10


let nbr_2 = rest % 10;
rest = (rest - nbr_2) / 10;

let nbr_1 = rest % 10;

console.log("Premier chiffre: ", nbr_1);
console.log("Deuxième  chiffre: ", nbr_2);
console.log("Troisième  chiffre: ", nbr_3);
console.log("Quatrième  chiffre: ", nbr_4);
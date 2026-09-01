const prompt = require("prompt-sync")();
let tension = prompt("La tension(V): ");
let intensite = prompt("L intensité(A): ");
let temps = prompt("Le temps(H): ");

let energie = tension * intensite * temps;

console.log("Energie(Wh): ",energie);
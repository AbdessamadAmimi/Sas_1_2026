const prompt = require("prompt-sync")();
let km = prompt("Entrer La distance parcourue en kilomètres: ");
let l = prompt("Entrer La quantité de carburant consommée en litres: ");
let consommation = (l / km) * 100;
console.log("Vous avez consommer: ", consommation , "/100 km");
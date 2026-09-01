const prompt = require("prompt-sync")();
let mad = prompt("Entrer ton bugget: ");
let eur = mad / 11;
console.log("Bugget en MAD: ", mad);
console.log("Bugget en EUR: ",eur);
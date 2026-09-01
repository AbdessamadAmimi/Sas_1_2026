const prompt = require("prompt-sync")();
let gb = prompt("Entrer le stokage en GB: ");
let mb = gb * 1024;
console.log("Stokage: ",gb);
console.log("Resultat: ", mb);
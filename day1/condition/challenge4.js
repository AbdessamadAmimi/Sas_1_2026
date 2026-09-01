const prompt = require("prompt-sync")();
let m = parseInt(prompt("Montant de la commande: "));
let livraison = 0;
if(m < 500) livraison = 40;
if (livraison == 0) console.log("Livraison: Gratuite");
else console.log("Livraison: ", livraison);
console.log("Montant total: ", m+livraison)
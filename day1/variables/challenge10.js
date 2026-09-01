const prompt = require("prompt-sync")();
let r = prompt("Le rayon du réservoir: ");
let h = prompt("La hauteur du réservoir: ");

let v = (3.14159) * r * r * h

console.log("Volume: ", v);
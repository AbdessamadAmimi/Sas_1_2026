const prompt = require("prompt-sync")();
cf_cc = 2;
cf_pr = 3;
cf_ex = 5;

let note_cc = parseInt(prompt("Contrôle continu: "));
let note_pr = parseInt(prompt("Projet : "));
let note_ex = parseInt(prompt("Examen : "));

let note_final = (note_cc * cf_cc + note_pr * cf_pr + note_ex * cf_ex) / (cf_cc + cf_ex + cf_pr);

console.log("Note Final: ",note_final);
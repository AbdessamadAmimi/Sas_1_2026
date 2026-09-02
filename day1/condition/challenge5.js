const prompt = require("prompt-sync")();
let note = parseFloat(prompt("Entrer une note: "));
let mention = "";
if(note < 0 || note > 20) console.log("Note invalide");
else{
    if(note < 10) mention = "Échec";
    else if(note < 12) mention = "Passable";
    else if(note < 14) mention = "Assez bien";
    else if(note < 16) mention = "Bien";
    else if(note < 18) mention = "Très bien";
    else mention = "Excellent";
    console.log("Mention: ", mention);
}